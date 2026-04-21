"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface TransitionContextValue {
  navigate: (x: number, y: number, href: string) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

export const useTransitionNavigate = () =>
  useContext(TransitionContext).navigate;

const TRANSITION_MS = 450;
const SETTLE_MS = 40;

const normPath = (p: string) => (p.endsWith("/") ? p : p + "/");

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [showOverlay, setShowOverlay] = useState(false);
  const [covered, setCovered] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(0);

  const targetRef = useRef<string | null>(null);
  const navigatingRef = useRef(false);
  const scrollMapRef = useRef<Record<string, number>>({});
  const timersRef = useRef<number[]>([]);

  const addTimer = (ms: number, fn: () => void) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  const jumpScroll = (y: number) => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, y);
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prev;
    });
  };

  const navigate = useCallback(
    (x: number, y: number, href: string) => {
      if (navigatingRef.current) return;
      navigatingRef.current = true;
      clearTimers();

      const r =
        Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        ) + 80;

      scrollMapRef.current[normPath(window.location.pathname)] =
        window.scrollY;

      targetRef.current = normPath(href);
      setOrigin({ x, y });
      setRadius(r);
      setCovered(false);
      setShowOverlay(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setCovered(true));
      });

      addTimer(TRANSITION_MS, () => {
        // Viewport is fully covered. Reset scroll for forward navigation
        // *before* the route change so the destination renders at the top,
        // not after, which is what produced the visible scroll-up.
        if (normPath(href) !== "/") {
          jumpScroll(0);
        }
        router.push(href, { scroll: false });
      });
    },
    [router]
  );

  useEffect(() => {
    if (!navigatingRef.current) return;
    const target = targetRef.current;
    if (!target) return;
    if (normPath(pathname) !== target) return;

    clearTimers();

    // Going back to home: restore the scroll position we left from.
    if (target === "/") {
      jumpScroll(scrollMapRef.current["/"] ?? 0);
    }

    addTimer(SETTLE_MS, () => {
      setCovered(false);
      addTimer(TRANSITION_MS + 40, () => {
        setShowOverlay(false);
        navigatingRef.current = false;
        targetRef.current = null;
      });
    });
  }, [pathname]);

  useEffect(() => () => clearTimers(), []);

  const clip = covered
    ? `circle(${radius}px at ${origin.x}px ${origin.y}px)`
    : `circle(0px at ${origin.x}px ${origin.y}px)`;

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      {showOverlay && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[100]"
          style={{
            backgroundColor: "#FAF9F6",
            clipPath: clip,
            WebkitClipPath: clip,
            transition: `clip-path ${TRANSITION_MS}ms cubic-bezier(0.77, 0, 0.175, 1), -webkit-clip-path ${TRANSITION_MS}ms cubic-bezier(0.77, 0, 0.175, 1)`,
          }}
        />
      )}
    </TransitionContext.Provider>
  );
}

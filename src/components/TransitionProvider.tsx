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

type Phase = "idle" | "expanding" | "fading";

interface TransitionContextValue {
  navigate: (x: number, y: number, href: string) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

export const useTransitionNavigate = () =>
  useContext(TransitionContext).navigate;

const EXPAND_MS = 450;
const FADE_MS = 320;

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<Phase>("idle");
  const [expanded, setExpanded] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(0);
  const targetRef = useRef<string | null>(null);
  const navTimerRef = useRef<number | null>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (navTimerRef.current) window.clearTimeout(navTimerRef.current);
    if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    navTimerRef.current = null;
    fadeTimerRef.current = null;
    idleTimerRef.current = null;
  };

  const navigate = useCallback(
    (x: number, y: number, href: string) => {
      if (phase !== "idle") return;

      const r =
        Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        ) + 80;

      clearTimers();
      targetRef.current = href;
      setOrigin({ x, y });
      setRadius(r);
      setExpanded(false);
      setPhase("expanding");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setExpanded(true));
      });

      navTimerRef.current = window.setTimeout(() => {
        router.push(href);
      }, EXPAND_MS - 40);
    },
    [phase, router]
  );

  useEffect(() => {
    if (phase !== "expanding") return;
    const target = targetRef.current;
    if (!target) return;
    const norm = (s: string) => (s.endsWith("/") ? s : s + "/");
    if (norm(pathname) !== norm(target)) return;

    if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = window.setTimeout(() => {
      setPhase("fading");
      idleTimerRef.current = window.setTimeout(() => {
        setPhase("idle");
        setExpanded(false);
        targetRef.current = null;
      }, FADE_MS + 40);
    }, 60);
  }, [pathname, phase]);

  useEffect(() => () => clearTimers(), []);

  const showOverlay = phase !== "idle";
  const clip = expanded
    ? `circle(${radius}px at ${origin.x}px ${origin.y}px)`
    : `circle(0px at ${origin.x}px ${origin.y}px)`;
  const opacity = phase === "fading" ? 0 : 1;

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
            opacity,
            transition: `clip-path ${EXPAND_MS}ms cubic-bezier(0.77, 0, 0.175, 1), -webkit-clip-path ${EXPAND_MS}ms cubic-bezier(0.77, 0, 0.175, 1), opacity ${FADE_MS}ms ease`,
            pointerEvents: phase === "fading" ? "none" : "auto",
          }}
        />
      )}
    </TransitionContext.Provider>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const SECTIONS = ["about", "research", "projects"];
const SCROLL_OFFSET = 150;

export function useActiveSection(): [string, (section: string) => void] {
  const [activeSection, setActiveSection] = useState<string>("about");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavClick = useCallback((section: string) => {
    isScrollingRef.current = true;
    setActiveSection(section);

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Re-enable scroll-spy once scrolling settles (no scroll events for 150ms)
    const resetOnIdle = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        window.removeEventListener("scroll", resetOnIdle);
      }, 150);
    };

    window.addEventListener("scroll", resetOnIdle, { passive: true });
    // Fallback: unlock after 2s in case scroll events don't fire
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      window.removeEventListener("scroll", resetOnIdle);
    }, 2000);
  }, []);

  useEffect(() => {
    let rafPending = false;

    const getActiveFromScroll = () => {
      rafPending = false;
      if (isScrollingRef.current) return;

      // If near the bottom, activate the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        setActiveSection(SECTIONS[SECTIONS.length - 1]);
        return;
      }

      // Find the last section whose top has scrolled past the offset
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    // Coalesce multiple scroll events into one read per frame so we do
    // not getBoundingClientRect three times per wheel tick on mobile.
    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(getActiveFromScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    getActiveFromScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return [activeSection, handleNavClick];
}

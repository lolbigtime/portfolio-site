"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 14;
const AMPLITUDE = 5;
const CENTER = WIDTH / 2;
const LINE_HEIGHT = 14 * 1.15; // fontSize * lineHeight

export default function AsciiDoubleHelix() {
  const preRef = useRef<HTMLPreElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rowCount, setRowCount] = useState(55);

  useEffect(() => {
    function updateRows() {
      if (containerRef.current) {
        const h = containerRef.current.clientHeight;
        setRowCount(Math.ceil(h / LINE_HEIGHT));
      }
    }

    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  useEffect(() => {
    // The helix is hidden below lg via `hidden lg:flex` on its wrapper.
    // Skip the rAF loop on narrower viewports so mobile doesn't pay for
    // a per-frame text rebuild nobody ever sees.
    if (typeof window !== "undefined" && !window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    let offset = 0;
    let animId: number;

    function render() {
      if (!preRef.current) return;

      const lines: string[] = [];

      for (let row = 0; row < rowCount; row++) {
        const t = (row + offset) * 0.2;
        const x1 = Math.round(CENTER + AMPLITUDE * Math.sin(t));
        const x2 = Math.round(CENTER - AMPLITUDE * Math.sin(t));

        const chars = new Array(WIDTH).fill(" ");

        const left = Math.min(x1, x2);
        const right = Math.max(x1, x2);
        const diff = right - left;

        // Draw bridge rungs when strands are sufficiently apart
        if (diff > 3 && row % 3 === 0) {
          for (let i = left + 1; i < right; i++) {
            chars[i] = "═";
          }
        }

        // Depth: front strand gets ● back strand gets ○
        const z1 = Math.cos(t);

        if (z1 > 0) {
          chars[x2] = "○";
          chars[x1] = "●";
        } else {
          chars[x1] = "○";
          chars[x2] = "●";
        }

        lines.push(chars.join(""));
      }

      preRef.current.textContent = lines.join("\n");

      offset += 0.04;
      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, [rowCount]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <pre
        ref={preRef}
        className="ascii-helix-text select-none motion-reduce-hidden"
        aria-hidden="true"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "14px",
          lineHeight: "1.15",
          whiteSpace: "pre",
          overflow: "hidden",
        }}
      />
    </div>
  );
}

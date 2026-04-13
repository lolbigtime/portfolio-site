"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function PrismaticBackground() {
  const { x, y } = useMousePosition();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Ambient gradient blobs */}
      <div
        className="absolute motion-reduce-hidden"
        style={{
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(232, 180, 203, 0.1) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute motion-reduce-hidden"
        style={{
          bottom: "-15%",
          left: "-10%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(196, 181, 224, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute motion-reduce-hidden"
        style={{
          top: "40%",
          left: "50%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(168, 216, 234, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Mouse-following spotlight */}
      <div
        className="motion-reduce-hidden"
        style={{
          position: "fixed",
          left: x - 200,
          top: y - 200,
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(196, 181, 224, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />
    </div>
  );
}

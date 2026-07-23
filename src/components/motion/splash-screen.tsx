"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

const VISIBLE_MS = 1300;
const FADE_MS = 550;

/**
 * One-time intro shown on a fresh document load. Lives in the root layout,
 * which persists across client-side navigation, so it never replays on
 * in-app route changes, only on a hard refresh / first visit.
 */
export function SplashScreen() {
  const reducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    if (reducedMotion) return;

    const fadeTimer = setTimeout(() => setPhase("fading"), VISIBLE_MS);
    const removeTimer = setTimeout(() => setPhase("gone"), VISIBLE_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [reducedMotion]);

  if (reducedMotion || phase === "gone") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-999 flex items-center justify-center bg-[#150a0a] transition-all duration-500 ease-out"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transform: phase === "fading" ? "scale(1.05)" : "scale(1)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="splash-icon-in flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10">
          <Scale className="h-8 w-8 text-[#c9a227]" />
        </span>
        <p className="splash-text-in font-display text-xl tracking-wide text-[#f7efe2]">
          Sovereign Apex <span className="text-[#c9a227]">Legal</span>
        </p>
        <span className="splash-rule-in h-px w-16 bg-[#c9a227]" />
      </div>
    </div>
  );
}

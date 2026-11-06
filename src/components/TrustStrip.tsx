"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPhase(3);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visible = 1 - Math.min(Math.max(rect.top / vh, 0), 1);
      if (visible < 0.2) setPhase(0);
      else if (visible < 0.45) setPhase(1);
      else if (visible < 0.7) setPhase(2);
      else setPhase(3);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface-brand px-4 py-24 sm:px-8 sm:py-28 lg:px-20 lg:py-32">
      <div className="page-max flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-2 text-base font-medium text-text-on-brand">
              <span className="inline-block h-2 w-2 rounded-full bg-text-on-brand" aria-hidden />
              The terms, plainly
            </p>
          </div>
          <div className="h-[3px] w-full max-w-[148px] rounded-sm bg-surface-base" />
        </div>

        <p className="trust-body max-w-[1000px] text-[clamp(1.25rem,3vw,2.5rem)] font-normal leading-relaxed tracking-[-0.025em]">
          <span className={cn("trust-muted", phase >= 1 && "revealed")}>With YUMM it&apos;s </span>
          <span className={cn("trust-highlight text-[1.4em] tracking-[-0.02em]", phase >= 1 && "revealed")}>₹0&nbsp;to&nbsp;join</span>
          <span className={cn("trust-muted", phase >= 2 && "revealed")}>, </span>
          <span className={cn("trust-highlight text-[1.4em] tracking-[-0.02em]", phase >= 2 && "revealed")}>₹0&nbsp;a&nbsp;month</span>
          <span className={cn("trust-muted", phase >= 3 && "revealed")}> and </span>
          <span className={cn("trust-highlight text-[1.4em] tracking-[-0.02em]", phase >= 3 && "revealed")}>0%&nbsp;commission</span>
          <span className={cn("trust-muted", phase >= 3 && "revealed")}>
            {" "}
            on your orders. Your menu, your guests and the full ticket stay with you. Campaign credits are optional, and you pay only when you choose to
            send a broadcast.
          </span>
        </p>
      </div>
    </section>
  );
}

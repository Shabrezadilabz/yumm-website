"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHashEl() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return;
  const header = document.querySelector<HTMLElement>("header");
  const headerH = header?.getBoundingClientRect().height ?? 72;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 24;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

/** Smooth-scroll to #hash after navigation (Figma: section lands below sticky header). */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHashEl();
  }, [pathname]);

  useEffect(() => {
    const onHash = () => scrollToHashEl();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return null;
}

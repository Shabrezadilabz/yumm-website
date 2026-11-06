"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { YummLogo } from "./YummLogo";
import { cn } from "@/lib/cn";

const PRODUCTS_COL_1 = [
  {
    href: "/ordering",
    label: "WhatsApp ordering",
    desc: "Menu, order and UPI pay in chat",
    icon: "/yumm-assets/icon-message.svg",
  },
  {
    href: "/packaging",
    label: "Packaging QR",
    desc: "Every parcel brings the next order",
    icon: "/yumm-assets/icon-qr.svg",
  },
  {
    href: "/loyalty",
    label: "Loyalty and CRM",
    desc: "Every guest, one record",
    icon: "/yumm-assets/icon-wallet.svg",
  },
] as const;

const PRODUCTS_COL_2 = [
  {
    href: "/campaigns",
    label: "Campaigns",
    desc: "Offers that make themselves",
    icon: "/yumm-assets/icon-megaphone.svg",
  },
  {
    href: "/delivery",
    label: "Delivery",
    desc: "From your kitchen to their door",
    icon: "/yumm-assets/icon-truck.svg",
  },
] as const;

const MOBILE_PRODUCTS = [
  ...PRODUCTS_COL_1,
  ...PRODUCTS_COL_2,
  {
    href: "/calculator",
    label: "Pricing calculator",
    desc: "What you keep on every order",
    icon: "/yumm-assets/icon-percent.svg",
  },
] as const;

function sectionHref(pathname: string, hash: string) {
  return pathname === "/" ? `#${hash}` : `/#${hash}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!productsRef.current?.contains(e.target as Node)) setProductsOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-default bg-surface-base/95 backdrop-blur-md">
        {/* Desktop Header */}
        <div className="page-max relative hidden h-[72px] items-center justify-between px-8 py-4 md:flex">
          <YummLogo variant="plum" size="desktop" />

          <nav className="flex items-center gap-1" aria-label="Primary">
            <Link
              href={sectionHref(pathname, "how-it-works")}
              onMouseEnter={() => setProductsOpen(false)}
              className="flex h-[40px] cursor-pointer items-center gap-1 rounded-full px-4 text-base font-medium text-text-primary transition-colors hover:bg-surface-subtle"
            >
              How it works
            </Link>

            <div
              className="relative"
              ref={productsRef}
              onMouseEnter={() => setProductsOpen(true)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen((v) => !v)}
                className={cn(
                  "flex h-[40px] cursor-pointer items-center gap-1 rounded-full px-4 text-base font-medium text-text-primary transition-colors",
                  productsOpen ? "bg-surface-subtle" : "hover:bg-surface-subtle",
                )}
                aria-expanded={productsOpen}
              >
                Products
                <Image
                  src="/yumm-assets/chevron-down-plum.svg"
                  alt=""
                  width={16}
                  height={16}
                  className={cn("transition-transform duration-200", productsOpen && "rotate-180")}
                />
              </button>
            </div>

            <Link
              href="/pricing"
              onMouseEnter={() => setProductsOpen(false)}
              className="flex h-[40px] cursor-pointer items-center gap-1 rounded-full px-4 text-base font-medium text-text-primary transition-colors hover:bg-surface-subtle"
            >
              Pricing
            </Link>
            <Link
              href={sectionHref(pathname, "faq")}
              onMouseEnter={() => setProductsOpen(false)}
              className="flex h-[40px] cursor-pointer items-center gap-1 rounded-full px-4 text-base font-medium text-text-primary transition-colors hover:bg-surface-subtle"
            >
              FAQ
            </Link>
          </nav>

          <Link
            href="/waitlist"
            className="flex items-center gap-2 rounded-full bg-surface-brand px-5 py-3 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
          >
            Join waitlist
          </Link>

          {/* Products Mega-Menu Dropdown (94:10269;94:12559) */}
          {productsOpen ? (
            <div
              onMouseLeave={() => setProductsOpen(false)}
              className="absolute left-1/2 top-[80px] z-50 flex w-[978px] max-w-[calc(100vw-2rem)] -translate-x-1/2 items-start gap-4 rounded-[24px] border border-border-default bg-surface-card p-4 shadow-[0px_24px_48px_rgba(36,16,31,0.12)]"
              role="menu"
            >
              <div className="flex flex-1 items-start gap-2">
                <div className="flex flex-1 flex-col gap-1">
                  {PRODUCTS_COL_1.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex h-[80px] w-full max-w-[320px] items-center gap-4 rounded-[16px] p-4 transition-colors hover:bg-surface-subtle/60"
                      role="menuitem"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-subtle">
                        <Image src={p.icon} alt="" width={24} height={24} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <p className="text-base font-semibold leading-normal text-text-primary">
                          {p.label}
                        </p>
                        <p className="text-xs font-normal leading-normal text-text-body">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  {PRODUCTS_COL_2.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex h-[80px] w-full max-w-[320px] items-center gap-4 rounded-[16px] p-4 transition-colors hover:bg-surface-subtle/60"
                      role="menuitem"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-subtle">
                        <Image src={p.icon} alt="" width={24} height={24} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <p className="text-base font-semibold leading-normal text-text-primary">
                          {p.label}
                        </p>
                        <p className="text-xs font-normal leading-normal text-text-body">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right promotion card */}
              <div className="flex w-[280px] shrink-0 flex-col items-start justify-between self-stretch rounded-[16px] bg-surface-brand p-6">
                <div className="flex flex-col gap-2">
                  <p className="font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
                    See what you keep
                  </p>
                  <p className="text-base font-normal leading-normal text-text-on-brand-muted">
                    Your cost per order next to aggregator commission.
                  </p>
                </div>
                <Link
                  href="/calculator"
                  onClick={() => setProductsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-surface-base px-5 py-3 text-base font-medium text-text-brand transition-opacity hover:opacity-95"
                >
                  Open calculator
                  <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
                </Link>
              </div>
            </div>
          ) : null}
        </div>

        {/* Mobile Header (94:7076) */}
        <div className="flex h-[54px] items-center justify-between px-5 py-3 md:hidden">
          <YummLogo variant="plum" size="mobile" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-6 w-6 items-center justify-center"
          >
            <Image src="/yumm-assets/icon-menu.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay (94:9162 & 94:9164) */}
      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between overflow-y-auto bg-surface-base md:hidden">
          <div className="flex flex-col items-start w-full">
            <div className="flex w-full items-center justify-between px-5 py-3">
              <div onClick={() => setMobileMenuOpen(false)}>
                <YummLogo variant="plum" size="mobile" />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-subtle"
              >
                <Image
                  src="/yumm-assets/icon-close.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="rotate-45"
                />
              </button>
            </div>

            <div className="flex w-full flex-col px-5">
              <Link
                href={sectionHref(pathname, "how-it-works")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-[72px] w-full items-center justify-between"
              >
                <span className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
                  How it works
                </span>
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </Link>
              <div className="h-px w-full bg-border-default" />

              <button
                type="button"
                onClick={() => setMobileProductsOpen((v) => !v)}
                className="flex h-[72px] w-full items-center justify-between text-left"
              >
                <span className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
                  Products
                </span>
                <Image
                  src="/yumm-assets/chevron-down-plum.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={cn("transition-transform duration-200", mobileProductsOpen && "rotate-180")}
                />
              </button>

              {mobileProductsOpen ? (
                <div className="flex w-full flex-col gap-1 pb-4">
                  {MOBILE_PRODUCTS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex h-[80px] w-full items-center gap-4 rounded-[16px] p-4 hover:bg-surface-subtle/60"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-subtle">
                        <Image src={p.icon} alt="" width={24} height={24} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <p className="text-base font-semibold leading-normal text-text-primary">
                          {p.label}
                        </p>
                        <p className="text-xs font-normal leading-normal text-text-body">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}

              <div className="h-px w-full bg-border-default" />
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-[72px] w-full items-center justify-between"
              >
                <span className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
                  Pricing
                </span>
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </Link>
              <div className="h-px w-full bg-border-default" />
              <Link
                href={sectionHref(pathname, "faq")}
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-[72px] w-full items-center justify-between"
              >
                <span className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
                  FAQ
                </span>
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-3 px-5 pb-8 pt-8">
            <Link
              href="/waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand"
            >
              Join the waitlist
              <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
            </Link>
            <p className="text-xs font-normal text-text-caption">
              No onboarding fee · No subscription · No commission
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

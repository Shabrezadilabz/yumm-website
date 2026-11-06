"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type StepId = "scan" | "menu" | "pay" | "confirmed";

const TABS: { id: StepId; n: string; label: string }[] = [
  { id: "scan", n: "01", label: "Scan" },
  { id: "menu", n: "02", label: "Menu" },
  { id: "pay", n: "03", label: "Pay" },
  { id: "confirmed", n: "04", label: "Confirmed" },
];

const STEP_DATA: Record<
  StepId,
  {
    kicker: string;
    titleLines: [string, string];
    body: string;
    backdropImg: string;
    cards: { icon: string; title: string; body: string }[];
  }
> = {
  scan: {
    kicker: "Step 01 of 04",
    titleLines: ["Scan the QR.", "Open the chat."],
    body: "Every parcel carries your QR. One scan opens WhatsApp with your restaurant: no app, no sign up.",
    backdropImg: "/yumm-assets/packaging-one-guest.png",
    cards: [
      { icon: "/yumm-assets/icon-qr.svg", title: "QR on every parcel", body: "Printed on stickers and bag tags." },
      { icon: "/yumm-assets/icon-message.svg", title: "No app needed", body: "Works on any phone with WhatsApp." },
      { icon: "/yumm-assets/icon-shop.svg", title: "Your brand first", body: "Guests see your name, not a marketplace." },
      { icon: "/yumm-assets/icon-eye-slash.svg", title: "Know the source", body: "See which parcel brought each guest back." },
    ],
  },
  menu: {
    kicker: "Step 02 of 04",
    titleLines: ["Say hi.", "Browse your menu."],
    body: "An instant greeting links to your own mini site menu, with your photos, prices and combos.",
    backdropImg: "/yumm-assets/loyalty-redeem-chat.png",
    cards: [
      { icon: "/yumm-assets/icon-message.svg", title: "Instant greeting", body: "Replies in seconds, day and night." },
      { icon: "/yumm-assets/icon-shop.svg", title: "Your mini site", body: "Your photos, prices and combos." },
      { icon: "/yumm-assets/icon-truck.svg", title: "Delivery or dine in", body: "One chat for every order type." },
      { icon: "/yumm-assets/icon-gift.svg", title: "Offers built in", body: "Weekend deals shown automatically." },
    ],
  },
  pay: {
    kicker: "Step 03 of 04",
    titleLines: ["Add to cart.", "Pay by UPI."],
    body: "Cart, offer and points sit in one message. Guests pay without ever leaving WhatsApp.",
    backdropImg: "/yumm-assets/dish-biryani.png",
    cards: [
      { icon: "/yumm-assets/icon-wallet.svg", title: "UPI in the chat", body: "GPay, PhonePe or Paytm." },
      { icon: "/yumm-assets/icon-percent.svg", title: "Points at checkout", body: "Rewards redeemed automatically." },
      { icon: "/yumm-assets/icon-shield.svg", title: "0% commission", body: "The full ticket stays yours." },
      { icon: "/yumm-assets/icon-tick-circle.svg", title: "Instant confirmation", body: "Payment status in seconds." },
    ],
  },
  confirmed: {
    kicker: "Step 04 of 04",
    titleLines: ["Order confirmed.", "Guest kept."],
    body: "Confirmation, rider updates and points all land in the same thread, and the guest stays on your list.",
    backdropImg: "/yumm-assets/delivery-hero.png",
    cards: [
      { icon: "/yumm-assets/icon-clock.svg", title: "Live order status", body: "Prepared, picked up, delivered." },
      { icon: "/yumm-assets/icon-star.svg", title: "Points earned", body: "A reason to order again." },
      { icon: "/yumm-assets/icon-repeat.svg", title: "Guest saved", body: "Their number stays with you." },
      { icon: "/yumm-assets/icon-megaphone.svg", title: "Next campaign", body: "Reach them directly on WhatsApp." },
    ],
  },
};

const SCAN_SLIDES = [
  {
    src: "/yumm-assets/packaging-one-guest.png",
    badge: "CAMERA · QR DETECTED",
    title: "Mango Leaf Kitchen parcel QR",
    sub: "Tap banner to open WhatsApp chat",
  },
  {
    src: "/yumm-assets/packaging-surface-4.png",
    badge: "SAFE ZONE STICKER",
    title: "Every box & bag brings them back",
    sub: "Zero app install · 100% direct guest",
  },
  {
    src: "/yumm-assets/step-screen-1.png",
    badge: "OPENING WHATSAPP",
    title: "WhatsApp thread ready in 1s",
    sub: "Menu, offers & loyalty loaded",
  },
] as const;

const MENU_DISH_CAROUSEL = [
  { name: "Paneer Tikka Roll", price: "₹149", img: "/yumm-assets/dish-rolls.png" },
  { name: "Hyderabadi Biryani", price: "₹249", img: "/yumm-assets/dish-biryani.png" },
  { name: "Masala Dosa", price: "₹129", img: "/yumm-assets/dish-dosa.png" },
  { name: "Royal Thali", price: "₹299", img: "/yumm-assets/dish-thali.png" },
] as const;

function PhoneScreen({ step, slideTick }: { step: StepId; slideTick: number }) {
  if (step === "scan") {
    const activeScan = SCAN_SLIDES[slideTick % SCAN_SLIDES.length]!;
    return (
      <div className="relative flex h-[680px] w-[340px] flex-col items-start overflow-hidden rounded-[52.133px] bg-surface-ink p-[11.333px] shadow-[0px_24px_48px_-8px_rgba(15,61,41,0.22)]">
        <div className="relative flex flex-1 flex-col items-center justify-between overflow-hidden rounded-[40.8px] bg-[#1a0b17] p-5 text-center w-full">
          {/* Colorful real-time camera/QR carousel background */}
          {SCAN_SLIDES.map((sl, i) => (
            <Image
              key={sl.src}
              src={sl.src}
              alt={sl.title}
              width={340}
              height={660}
              className={cn(
                "pointer-events-none absolute inset-0 h-full w-full object-cover transition-all duration-700",
                i === slideTick % SCAN_SLIDES.length ? "scale-100 opacity-90" : "scale-105 opacity-0",
              )}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#24101f]/75 via-transparent to-[#24101f]/90" />

          {/* Top status pill */}
          <div className="relative z-10 mt-6 flex items-center gap-2 rounded-full border border-[#7fd858]/50 bg-[#24101f]/80 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-ping rounded-full bg-[#7fd858]" />
            <p className="text-[11px] font-semibold tracking-wider text-[#c8f0b4]">
              {activeScan.badge}
            </p>
          </div>

          {/* Center QR target reticle */}
          <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-3xl border-2 border-dashed border-[#7fd858] bg-black/25 backdrop-blur-[2px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-base/95 shadow-lg">
              <Image src="/yumm-assets/icon-qr.svg" alt="" width={36} height={36} />
            </div>
          </div>

          {/* Bottom WhatsApp notification card */}
          <div className="relative z-10 mb-6 w-full rounded-[22px] border border-white/25 bg-[#fff3e6]/95 p-4 text-left shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#381932] px-2.5 py-0.5 text-[10px] font-semibold text-[#c8f0b4]">
                WHATSAPP · INSTANT
              </span>
              <div className="flex gap-1">
                {SCAN_SLIDES.map((_, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      idx === slideTick % SCAN_SLIDES.length ? "w-4 bg-[#381932]" : "w-1.5 bg-[#381932]/30",
                    )}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-base font-semibold leading-snug text-text-primary">
              {activeScan.title}
            </p>
            <p className="mt-0.5 text-xs text-text-body">{activeScan.sub}</p>
          </div>
        </div>
        <div className="absolute left-[121.43px] top-[17px] z-20 h-[26.714px] w-[97.143px] rounded-[13.357px] bg-surface-ink" />
      </div>
    );
  }

  return (
    <div className="relative h-[680px] w-[340px] overflow-hidden rounded-[53.429px] bg-surface-ink shadow-[0px_24px_48px_-8px_rgba(15,61,41,0.22)]">
      <div className="absolute left-[8.5px] top-[8.5px] flex h-[663px] w-[323px] flex-col overflow-hidden rounded-[46.143px] bg-surface-subtle">
        {/* Colorful real-time transparent food wallpaper inside WhatsApp thread */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <Image
            src={STEP_DATA[step].backdropImg}
            alt=""
            width={323}
            height={663}
            className="h-full w-full object-cover opacity-18 mix-blend-multiply transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f6e4cf]/85 via-[#f6e4cf]/75 to-[#ebd5bf]/90" />
        </div>

        {/* WhatsApp Header */}
        <div className="relative z-10 flex w-full shrink-0 flex-col gap-3 bg-surface-brand-soft px-[21.857px] pb-[14.571px] pt-[19.429px]">
          <div className="flex w-full items-start justify-between px-2.5 text-sm font-medium leading-[1.2] text-text-on-brand">
            <span>12:48</span>
            <span className="whitespace-pre text-[13.357px]">{`5G  ■`}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative h-[38.857px] w-[38.857px] overflow-hidden rounded-full ring-2 ring-[#7fd858]">
              <Image
                src="/yumm-assets/dish-thali.png"
                alt="Mango Leaf Kitchen"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[15.786px] font-medium leading-[1.2] text-text-on-brand">
                Mango Leaf Kitchen
              </span>
              <span className="text-[12.5px] font-normal leading-[1.45] text-[#c8f0b4]">
                ● Online · Direct Ordering
              </span>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        {step === "menu" ? (
          <div className="relative z-10 flex flex-1 flex-col gap-[8px] px-[12.143px] py-[12px]">
            <div className="flex w-full justify-end">
              <div className="flex w-[78px] flex-col gap-0.5 rounded-bl-[14.571px] rounded-br-[14.571px] rounded-tl-[14.571px] rounded-tr-[2.429px] bg-[#ddf5c8] px-3 py-2 shadow-xs">
                <p className="text-[15px] leading-[1.35] text-text-primary">HI</p>
                <p className="text-right text-[11px] text-text-caption">12:48</p>
              </div>
            </div>
            <div className="flex w-[256px] flex-col gap-1 rounded-bl-[14.571px] rounded-br-[14.571px] rounded-tl-[2.429px] rounded-tr-[14.571px] bg-surface-card px-3 py-2.5 shadow-xs">
              <p className="text-[14.5px] leading-[1.4] text-text-primary">
                Hi, welcome to Mango Leaf Kitchen! What would you like to do?
              </p>
              {/* Mini real-time dish carousel inside the greeting bubble */}
              <div className="mt-1 flex items-center gap-2.5 rounded-xl bg-surface-base p-2">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={MENU_DISH_CAROUSEL[slideTick % MENU_DISH_CAROUSEL.length]!.img}
                    alt=""
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-text-brand">
                    {MENU_DISH_CAROUSEL[slideTick % MENU_DISH_CAROUSEL.length]!.name}
                  </p>
                  <p className="text-[11px] font-medium text-text-accent">
                    {MENU_DISH_CAROUSEL[slideTick % MENU_DISH_CAROUSEL.length]!.price} · Tap to add
                  </p>
                </div>
              </div>
              <p className="text-right text-[11px] text-text-caption">12:48</p>
            </div>
            {["Order Delivery", "Dine in Menu", "Claim Rewards", "Book Table"].map((btn) => (
              <div
                key={btn}
                className="flex h-[40px] w-full items-center justify-center rounded-[12.143px] bg-surface-card/95 shadow-xs backdrop-blur-xs"
              >
                <span className="text-[15px] font-medium leading-[1.2] text-text-accent">{btn}</span>
              </div>
            ))}
          </div>
        ) : step === "pay" ? (
          <div className="relative z-10 flex flex-1 flex-col gap-[9.067px] px-[11.333px] py-[13.6px]">
            <div className="flex w-full flex-col gap-[9.067px] rounded-[15.867px] bg-surface-card/95 p-[13.6px] shadow-xs backdrop-blur-xs">
              <div className="flex w-full items-center gap-[9.067px] rounded-[11.333px] bg-surface-subtle px-[11.333px] py-[8px]">
                <Image src="/yumm-assets/icon-gift.svg" alt="" width={20} height={20} />
                <span className="text-[13.6px] font-medium text-text-brand">Weekend offer applied</span>
              </div>
              <div className="flex w-full items-center justify-between text-[14.5px]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/yumm-assets/dish-rolls.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-text-body">Paneer Tikka Roll ×2</span>
                </div>
                <span className="font-medium text-text-primary">₹298</span>
              </div>
              <div className="flex w-full items-center justify-between text-[14.5px]">
                <div className="flex items-center gap-2">
                  <Image
                    src="/yumm-assets/dish-paneer.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-text-body">Masala Fries ×1</span>
                </div>
                <span className="font-medium text-text-primary">₹129</span>
              </div>
              <div className="flex w-full justify-between text-[14.5px]">
                <span className="text-text-body">Reward points</span>
                <span className="font-medium text-[#2d8a16]">−₹40</span>
              </div>
              <div className="flex w-full items-baseline justify-between pt-1">
                <span className="text-[17px] font-medium text-text-primary">Total</span>
                <span className="text-[22.667px] font-semibold text-text-brand">₹387</span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-[11.333px] rounded-[15.867px] border-2 border-[#fff3e6] bg-surface-card/95 p-[15.867px] shadow-xs backdrop-blur-xs">
              <p className="text-[13.6px] font-semibold uppercase tracking-[0.816px] text-text-accent">
                PAY WITH UPI
              </p>
              <div className="flex items-center gap-[11.333px]">
                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-surface-brand">
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-brand" />
                </span>
                <span className="text-[14.733px] text-text-primary">Any UPI app</span>
              </div>
              <div className="flex items-center gap-[11.333px]">
                <span className="h-[18px] w-[18px] rounded-full border-2 border-border-default" />
                <span className="text-[14.733px] text-text-primary">Pay with points + UPI</span>
              </div>
              <div className="flex w-full justify-center rounded-[11.333px] bg-surface-brand py-[11.333px]">
                <span className="text-[17px] font-medium text-text-on-brand">Pay ₹387</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-1 flex-col gap-[9.714px] px-[12.143px] py-[14.571px]">
            <div className="flex w-full flex-col items-center gap-[7.286px] rounded-[17px] bg-surface-card/95 px-[14.571px] py-[18px] shadow-xs backdrop-blur-xs">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ddf5c8]">
                <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={28} height={28} />
              </div>
              <p className="text-[23px] font-semibold leading-[1.25] text-text-brand">
                Order confirmed
              </p>
              <p className="text-[14px] text-text-body">#1042 · ₹387 paid via UPI</p>
            </div>
            <div className="flex w-[252px] flex-col gap-0.5 rounded-bl-[14.571px] rounded-br-[14.571px] rounded-tl-[2.429px] rounded-tr-[14.571px] bg-surface-card/95 px-3 py-2.5 shadow-xs">
              <p className="text-[15px] leading-[1.45] text-text-primary">
                Your order is being prepared. You earned 39 points on this order.
              </p>
              <p className="text-right text-[11.5px] text-text-caption">12:53</p>
            </div>
            <div className="flex w-[252px] flex-col gap-0.5 rounded-bl-[14.571px] rounded-br-[14.571px] rounded-tl-[2.429px] rounded-tr-[14.571px] bg-surface-card/95 px-3 py-2.5 shadow-xs">
              <p className="text-[15px] leading-[1.45] text-text-primary">
                Out for delivery, your rider is on the way.
              </p>
              <p className="text-right text-[11.5px] text-text-caption">1:08</p>
            </div>
          </div>
        )}
      </div>
      {/* Dynamic island */}
      <div className="absolute left-[121.43px] top-[17px] z-20 h-[26.714px] w-[97.143px] rounded-[13.357px] bg-surface-ink" />
    </div>
  );
}

export function WhatsAppDemo({ id }: { id?: string }) {
  const [step, setStep] = useState<StepId>("scan");
  const [slideTick, setSlideTick] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setSlideTick((t) => t + 1);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScroll = el.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      if (scrolled < 0 || scrolled > totalScroll + 100) return;
      const ratio = Math.min(Math.max(scrolled / totalScroll, 0), 0.999);
      const idx = Math.floor(ratio * 4);
      const nextStep = TABS[idx]?.id ?? "scan";
      setStep(nextStep);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function selectTab(target: StepId) {
    setStep(target);
    const el = containerRef.current;
    if (!el) return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isDesktop && !reduceMotion && el.offsetHeight > window.innerHeight * 1.5) {
      const idx = TABS.findIndex((t) => t.id === target);
      const totalScroll = el.offsetHeight - window.innerHeight;
      const top = window.scrollY + el.getBoundingClientRect().top + (idx / 4) * totalScroll + 10;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  const current = STEP_DATA[step];

  return (
    <section id={id} ref={containerRef} className="relative bg-surface-base lg:h-[320vh]">
      <div className="px-5 py-16 sm:px-8 lg:sticky lg:top-[72px] lg:min-h-[896px] lg:px-20 lg:py-14">
        <div className="page-max">
          {/* Header + Step tabs */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                  <p className="text-base font-medium text-text-brand">See it in the chat</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
              </div>
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                From hi to paid
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="WhatsApp demo steps">
              {TABS.map((t) => {
                const active = step === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => selectTab(t.id)}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-base font-medium transition-colors",
                      active
                        ? "bg-surface-brand text-white"
                        : "border border-border-default bg-surface-card text-text-body hover:border-border-brand",
                    )}
                  >
                    <span className={cn("text-xs font-semibold", active ? "text-[#7fd858]" : "text-text-caption")}>
                      {t.n}
                    </span>
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main 2-column content */}
          <div className="mt-10 flex flex-col items-center gap-10 lg:mt-12 lg:flex-row lg:items-start lg:gap-[60px]">
            {/* Left Phone Panel (540x584) with transparent engaging background image */}
            <div className="relative h-[584px] w-full max-w-[540px] shrink-0 overflow-hidden rounded-[32px] bg-surface-subtle">
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <Image
                  src={current.backdropImg}
                  alt=""
                  width={540}
                  height={584}
                  className="h-full w-full scale-105 object-cover opacity-25 mix-blend-multiply blur-[1px] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#381932]/25 via-[#f6e4cf]/65 to-[#7fd858]/20" />
              </div>
              <div className="absolute left-1/2 top-[64px] -translate-x-1/2">
                <PhoneScreen step={step} slideTick={slideTick} />
              </div>
            </div>

            {/* Right Step Copy + 2x2 Cards */}
            <div className="flex w-full max-w-[520px] flex-col items-start gap-5 pt-2">
              <p className="text-base font-semibold leading-[1.5] text-text-accent">{current.kicker}</p>
              <div className="text-[28px] font-semibold leading-[1.2] tracking-[-0.14px] text-text-primary">
                <p>{current.titleLines[0]}</p>
                <p>{current.titleLines[1]}</p>
              </div>
              <p className="max-w-[480px] text-base font-normal leading-[1.5] text-text-body">{current.body}</p>

              <div className="grid w-full grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                {current.cards.map((c) => (
                  <div
                    key={c.title}
                    className="flex flex-col items-start gap-3 rounded-[20px] border border-border-subtle bg-surface-card p-5 shadow-xs"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-surface-subtle">
                      <Image src={c.icon} alt="" width={24} height={24} />
                    </div>
                    <p className="text-base font-semibold leading-[1.5] text-text-primary">{c.title}</p>
                    <p className="text-base font-normal leading-[1.5] text-text-body">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

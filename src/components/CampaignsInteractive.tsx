"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const DISHES = ["Paneer Tikka Roll", "Masala Fries", "Combos"] as const;
const DISCOUNTS = ["10%", "20%", "Free dessert"] as const;
const TONES = ["Festive", "Playful", "Simple"] as const;

const DISH_META: Record<
  (typeof DISHES)[number],
  {
    images: string[];
    price: string;
    oldPrice: string;
    tagline: string;
    cuisineTag: string;
  }
> = {
  "Paneer Tikka Roll": {
    images: [
      "/yumm-assets/dish-rolls.png",
      "/yumm-assets/dish-paneer.png",
      "/yumm-assets/order-hero-food.png",
    ],
    price: "₹149",
    oldPrice: "₹189",
    tagline: "Chargrilled malai paneer wrapped in flaky roomali roti with mint chutney",
    cuisineTag: "SIGNATURE KATHI ROLL",
  },
  "Masala Fries": {
    images: [
      "/yumm-assets/dish-paneer.png",
      "/yumm-assets/dish-pizza.png",
      "/yumm-assets/dish-rolls.png",
    ],
    price: "₹129",
    oldPrice: "₹160",
    tagline: "Crispy golden fries tossed in house peri-peri spice & smoky garlic dip",
    cuisineTag: "CRISPY SIDES & SNACKS",
  },
  Combos: {
    images: [
      "/yumm-assets/dish-thali.png",
      "/yumm-assets/dish-biryani.png",
      "/yumm-assets/order-hero-food.png",
    ],
    price: "₹299",
    oldPrice: "₹375",
    tagline: "Paneer Tikka Roll + Loaded Masala Fries + Chilled Alphonso Mango Lassi",
    cuisineTag: "BESTSELLER MEAL COMBO",
  },
};

const TONE_THEME: Record<
  (typeof TONES)[number],
  {
    badge: string;
    posterBg: string;
    cardGradient: string;
    accentColor: string;
    pillBgHex: string;
    pillTextHex: string;
    headlinePrefix: string;
    subMood: string;
  }
> = {
  Festive: {
    badge: "✨ FESTIVE SPECIAL EDITION",
    posterBg: "#2e1129",
    cardGradient:
      "linear-gradient(155deg, #42183b 0%, #24101f 55%, #190a16 100%)",
    accentColor: "#f6c453",
    pillBgHex: "#f6c453",
    pillTextHex: "#24101f",
    headlinePrefix: "Celebrate tonight with",
    subMood: "Royal Plum & Festive Gold · Brand Palette",
  },
  Playful: {
    badge: "🔥 HOT CRAVING DROP",
    posterBg: "#123526",
    cardGradient:
      "linear-gradient(155deg, #174934 0%, #0f3123 55%, #091f16 100%)",
    accentColor: "#7fd858",
    pillBgHex: "#7fd858",
    pillTextHex: "#0f3123",
    headlinePrefix: "Treat yourself to",
    subMood: "Fresh Emerald & Lime · High-Energy Palette",
  },
  Simple: {
    badge: "● DIRECT KITCHEN OFFER",
    posterBg: "#17253b",
    cardGradient:
      "linear-gradient(155deg, #1e3250 0%, #142238 55%, #0c1524 100%)",
    accentColor: "#7cc4fa",
    pillBgHex: "#7cc4fa",
    pillTextHex: "#0c1524",
    headlinePrefix: "Fresh from our kitchen:",
    subMood: "Editorial Navy & Cream · Minimal Palette",
  },
};

const LOOP_STEPS = [
  {
    num: "01",
    title: "Trigger",
    body: "A festival, payday or weekend comes up.",
    icon: "/yumm-assets/icon-clock.svg",
    img: "/yumm-assets/order-hero-food.png",
  },
  {
    num: "02",
    title: "AI poster",
    body: "Poster and caption in your colours.",
    icon: "/yumm-assets/icon-megaphone.svg",
    img: "/yumm-assets/feature-card-3.png",
  },
  {
    num: "03",
    title: "Send",
    body: "To opted in guests by radius or CRM.",
    icon: "/yumm-assets/icon-message.svg",
    img: "/yumm-assets/loyalty-redeem-chat.png",
  },
  {
    num: "04",
    title: "Tracked in CRM",
    body: "Every order from it is counted.",
    icon: "/yumm-assets/icon-repeat.svg",
    img: "/yumm-assets/feature-card-2.png",
  },
] as const;

export function CampaignsInteractive() {
  const [dish, setDish] = useState<(typeof DISHES)[number]>("Paneer Tikka Roll");
  const [discount, setDiscount] = useState<(typeof DISCOUNTS)[number]>("20%");
  const [tone, setTone] = useState<(typeof TONES)[number]>("Festive");
  const [variationIdx, setVariationIdx] = useState<number>(0);

  const [loopStep, setLoopStep] = useState<number>(0);
  const loopRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setLoopStep(3);
      return;
    }

    const onScroll = () => {
      const el = loopRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = 1 - Math.min(Math.max(rect.top / (vh * 0.8), 0), 1);
      if (progress < 0.25) setLoopStep(0);
      else if (progress < 0.5) setLoopStep(1);
      else if (progress < 0.75) setLoopStep(2);
      else setLoopStep(3);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentDish = DISH_META[dish];
  const currentTone = TONE_THEME[tone];
  const activeDishImg =
    currentDish.images[variationIdx % currentDish.images.length] ?? currentDish.images[0]!;

  return (
    <>
      {/* 04 AI posters (94:10939) — Live interactive AI Poster generator & preview */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">AI posters</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Pick three things. Get a poster.
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  Choose the dish, the discount and the tone. The poster and caption come back in your brand colours, ready to approve.
                </p>
              </div>

              <div className="flex w-full flex-col gap-6">
                {/* Pick 1: Dish */}
                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold text-text-brand">Dish</p>
                  <div className="flex flex-wrap gap-2">
                    {DISHES.map((d) => {
                      const active = dish === d;
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => {
                            setDish(d);
                            setVariationIdx(0);
                          }}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-[16px] border-[1.5px] px-4 py-3 text-base font-medium text-text-primary transition-colors",
                            active
                              ? "border-border-brand bg-surface-subtle"
                              : "border-border-default bg-surface-card hover:border-border-brand",
                          )}
                        >
                          <Image src="/yumm-assets/icon-chef-hat.svg" alt="" width={20} height={20} />
                          <span>{d}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pick 2: Discount */}
                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold text-text-brand">Discount</p>
                  <div className="flex flex-wrap gap-2">
                    {DISCOUNTS.map((d) => {
                      const active = discount === d;
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDiscount(d)}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-[16px] border-[1.5px] px-4 py-3 text-base font-medium text-text-primary transition-colors",
                            active
                              ? "border-border-brand bg-surface-subtle"
                              : "border-border-default bg-surface-card hover:border-border-brand",
                          )}
                        >
                          <Image src="/yumm-assets/icon-chef-hat.svg" alt="" width={20} height={20} />
                          <span>{d}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pick 3: Tone */}
                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold text-text-brand">Tone</p>
                  <div className="flex flex-wrap gap-2">
                    {TONES.map((t) => {
                      const active = tone === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTone(t)}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-[16px] border-[1.5px] px-4 py-3 text-base font-medium text-text-primary transition-colors",
                            active
                              ? "border-border-brand bg-surface-subtle"
                              : "border-border-default bg-surface-card hover:border-border-brand",
                          )}
                        >
                          <Image src="/yumm-assets/icon-chef-hat.svg" alt="" width={20} height={20} />
                          <span>{t}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Generate Variation Trigger */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setVariationIdx((v) => v + 1)}
                    className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-surface-brand px-6 py-3.5 text-sm font-semibold text-text-on-brand shadow-md transition-opacity hover:opacity-95"
                  >
                    <span>✨ Generate another poster design</span>
                    <span
                      style={{
                        borderRadius: 999,
                        backgroundColor: "rgba(255,255,255,0.16)",
                        padding: "2px 8px",
                        fontSize: 11,
                      }}
                    >
                      Design #{(variationIdx % 3) + 1}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Live AI Generated Poster + WhatsApp Caption Preview (94:10965) */}
          <div
            className="w-full shrink-0 overflow-hidden rounded-[32px]"
            style={{
              maxWidth: 480,
              background: currentTone.cardGradient,
              padding: 24,
              boxShadow: "0 24px 56px rgba(36, 16, 31, 0.24)",
              border: "1px solid rgba(255, 243, 230, 0.14)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* Top Header: Restaurant Identity + Offer Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderRadius: 999,
                  backgroundColor: "#fff3e6",
                  padding: "6px 14px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.16)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#381932",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color: "#381932",
                  }}
                >
                  MANGO LEAF KITCHEN
                </span>
              </div>

              <span
                style={{
                  borderRadius: 999,
                  backgroundColor: currentTone.pillBgHex,
                  color: currentTone.pillTextHex,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                {discount === "Free dessert" ? "🎁 + FREE DESSERT" : `🔥 FLAT ${discount} OFF`}
              </span>
            </div>

            {/* Framed AI Poster Image Showcase */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 270,
                borderRadius: 22,
                overflow: "hidden",
                backgroundColor: "#1a0b17",
                border: `2px solid ${currentTone.accentColor}`,
                boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
              }}
            >
              {/* Unoptimized Image so it renders immediately from /yumm-assets */}
              <Image
                key={`${dish}-${tone}-${discount}-${variationIdx}`}
                src={activeDishImg}
                alt={`${dish} AI poster`}
                width={440}
                height={270}
                unoptimized
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Poster gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(20,10,18,0.15) 0%, rgba(20,10,18,0.25) 45%, rgba(20,10,18,0.92) 100%)",
                }}
              />

              {/* Top-left AI Tone Badge inside poster */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  borderRadius: 999,
                  backgroundColor: "rgba(20, 10, 18, 0.78)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "4px 12px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: currentTone.accentColor,
                  backdropFilter: "blur(6px)",
                }}
              >
                {currentTone.badge}
              </div>

              {/* Top-right Price Tag inside poster */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  borderRadius: 12,
                  backgroundColor: "#fff3e6",
                  padding: "4px 10px",
                  textAlign: "right",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    textDecoration: "line-through",
                    color: "#86717f",
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  {currentDish.oldPrice}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#381932",
                    lineHeight: 1.2,
                  }}
                >
                  {currentDish.price}
                </div>
              </div>

              {/* Bottom Poster Headline Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 16,
                  right: 16,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: currentTone.accentColor,
                      margin: "0 0 2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {currentDish.cuisineTag}
                  </p>
                  <p
                    className="font-serif-display"
                    style={{
                      fontSize: 28,
                      lineHeight: 1.1,
                      color: "#fff3e6",
                      margin: 0,
                    }}
                  >
                    {currentTone.headlinePrefix} {dish}
                  </p>
                </div>

                {/* Mini WhatsApp QR Stamp on Poster */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: "#ffffff",
                    padding: 4,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src="/yumm-assets/icon-qr.svg"
                    alt="QR"
                    width={32}
                    height={32}
                    style={{ width: 32, height: 32 }}
                  />
                </div>
              </div>
            </div>

            {/* Active Selection Summary Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              <span
                style={{
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  padding: "4px 10px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#fff3e6",
                }}
              >
                🍽 {dish}
              </span>
              <span
                style={{
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  padding: "4px 10px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#fff3e6",
                }}
              >
                🏷 {discount}
              </span>
              <span
                style={{
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.12)",
                  padding: "4px 10px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#fff3e6",
                }}
              >
                🎨 {tone} tone
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  fontWeight: 600,
                  color: currentTone.accentColor,
                }}
              >
                ● AI Poster Ready
              </span>
            </div>

            {/* Generated WhatsApp Message Caption Card */}
            <div
              style={{
                borderRadius: 18,
                backgroundColor: "#fff3e6",
                padding: 16,
                boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#5a3352",
                  }}
                >
                  AI WhatsApp Caption · {tone}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#144734",
                  }}
                >
                  ✓ Ready to approve
                </span>
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "#24101f",
                  margin: 0,
                }}
              >
                “Craving <strong>{dish}</strong>? Enjoy{" "}
                <strong>
                  {discount === "Free dessert"
                    ? "a complimentary warm Gulab Jamun"
                    : `flat ${discount} off`}
                </strong>{" "}
                when you order directly in this WhatsApp chat tonight. Tap below to claim in 2 taps!”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Automated loop (94:10967) */}
      <section ref={loopRef} className="bg-surface-brand px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                  <p className="text-base font-medium text-text-on-brand">Automated loop</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                  From festival to repeat order
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-on-brand-muted">
                  The loop runs through the year. Your only job in it is to tap approve.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3">
              {LOOP_STEPS.map((s, idx) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setLoopStep(idx)}
                  className={cn(
                    "relative flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-[16px] p-5 text-left transition-all",
                    loopStep === idx
                      ? "bg-surface-base text-text-brand ring-2 ring-[#7fd858]"
                      : "bg-surface-brand-soft text-text-on-brand opacity-80 hover:opacity-100",
                  )}
                >
                  <p className="w-[40px] shrink-0 font-serif-display text-[32px] leading-[1.2]">
                    {s.num}
                  </p>
                  <div className="flex flex-1 flex-col gap-0.5">
                    <p className="text-xl font-semibold leading-[1.2]">{s.title}</p>
                    <p
                      className={cn(
                        "text-base font-normal leading-[1.5]",
                        loopStep === idx ? "text-text-body" : "text-text-on-brand-muted",
                      )}
                    >
                      {s.body}
                    </p>
                  </div>
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[10px]">
                    <Image src={s.img} alt="" width={48} height={48} unoptimized className="h-full w-full object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right 4-node ring diagram (94:10996) */}
          <div className="relative h-[360px] w-[360px] shrink-0 sm:h-[480px] sm:w-[480px]">
            {/* Outer ring */}
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface-brand-soft sm:h-[320px] sm:w-[320px]" />

            {/* Center label */}
            <div className="absolute left-1/2 top-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-surface-brand-soft text-center sm:h-[140px] sm:w-[140px]">
              <p className="font-serif-display text-2xl leading-[1.2] text-text-on-brand">
                One loop
              </p>
              <p className="text-xs text-text-on-brand-muted">
                Step 0{loopStep + 1} active
              </p>
            </div>

            {/* Node 1: Top */}
            <button
              type="button"
              onClick={() => setLoopStep(0)}
              className={cn(
                "absolute left-1/2 top-[16px] flex h-[72px] w-[72px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-full transition-transform sm:top-[40px] sm:h-[80px] sm:w-[80px]",
                loopStep === 0 ? "scale-110 bg-surface-base ring-4 ring-[#7fd858]" : "bg-surface-base/90",
              )}
              aria-label="Step 1: Trigger"
            >
              <Image src="/yumm-assets/icon-clock.svg" alt="" width={28} height={28} />
            </button>

            {/* Node 2: Right */}
            <button
              type="button"
              onClick={() => setLoopStep(1)}
              className={cn(
                "absolute right-[16px] top-1/2 flex h-[72px] w-[72px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-transform sm:right-[40px] sm:h-[80px] sm:w-[80px]",
                loopStep === 1 ? "scale-110 bg-surface-base ring-4 ring-[#7fd858]" : "bg-surface-base/90",
              )}
              aria-label="Step 2: AI poster"
            >
              <Image src="/yumm-assets/icon-megaphone.svg" alt="" width={28} height={28} />
            </button>

            {/* Node 3: Bottom */}
            <button
              type="button"
              onClick={() => setLoopStep(2)}
              className={cn(
                "absolute bottom-[16px] left-1/2 flex h-[72px] w-[72px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-full transition-transform sm:bottom-[40px] sm:h-[80px] sm:w-[80px]",
                loopStep === 2 ? "scale-110 bg-surface-base ring-4 ring-[#7fd858]" : "bg-surface-base/90",
              )}
              aria-label="Step 3: Send"
            >
              <Image src="/yumm-assets/icon-message.svg" alt="" width={28} height={28} />
            </button>

            {/* Node 4: Left */}
            <button
              type="button"
              onClick={() => setLoopStep(3)}
              className={cn(
                "absolute left-[16px] top-1/2 flex h-[72px] w-[72px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-transform sm:left-[40px] sm:h-[80px] sm:w-[80px]",
                loopStep === 3 ? "scale-110 bg-surface-base ring-4 ring-[#7fd858]" : "bg-surface-base/90",
              )}
              aria-label="Step 4: Tracked in CRM"
            >
              <Image src="/yumm-assets/icon-repeat.svg" alt="" width={28} height={28} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

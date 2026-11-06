"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type StepData = {
  step: string;
  title: string;
  body: string;
  tall: boolean;
  aura: string;
  badge: string;
  slides: {
    img: string;
    caption: string;
    sub: string;
    tag: string;
  }[];
};

const STEPS: StepData[] = [
  {
    step: "Step 1",
    title: "Guest scans the QR",
    body: "On the bag, box lid, tissue or sticker. It opens your WhatsApp.",
    tall: true,
    aura: "from-[#ff9a5a]/35 via-[#7fd858]/25 to-[#381932]/20",
    badge: "Camera · Instant QR",
    slides: [
      {
        img: "/yumm-assets/packaging-one-guest.png",
        caption: "Scan parcel QR code",
        sub: "Opens Mango Leaf Kitchen on WhatsApp",
        tag: "LIVE SCAN",
      },
      {
        img: "/yumm-assets/packaging-surface-4.png",
        caption: "Box lid & seal sticker",
        sub: "Works in English, Hindi, Kannada & Telugu",
        tag: "PACKAGING",
      },
      {
        img: "/yumm-assets/step-screen-1.png",
        caption: "One tap to open chat",
        sub: "No app download · No sign up wall",
        tag: "WHATSAPP",
      },
    ],
  },
  {
    step: "Step 2",
    title: "Orders and pays in WhatsApp",
    body: "Menu, cart and UPI payment without leaving the chat.",
    tall: false,
    aura: "from-[#7fd858]/35 via-[#ffb86c]/25 to-[#5a3352]/20",
    badge: "In-Chat Menu · UPI",
    slides: [
      {
        img: "/yumm-assets/loyalty-redeem-chat.png",
        caption: "Browse dishes in chat",
        sub: "Paneer Tikka Roll ×2 · Masala Fries ×1",
        tag: "MINI-SITE",
      },
      {
        img: "/yumm-assets/dish-biryani.png",
        caption: "Bestseller combos ready",
        sub: "Weekend offer + 40 reward points applied",
        tag: "CART · ₹387",
      },
      {
        img: "/yumm-assets/step-screen-2.png",
        caption: "Instant UPI checkout",
        sub: "GPay, PhonePe & Paytm inside WhatsApp",
        tag: "0% COMMISSION",
      },
    ],
  },
  {
    step: "Step 3",
    title: "You pack and deliver",
    body: "A new QR goes in every parcel. Your riders or a partner deliver, with status in chat.",
    tall: false,
    aura: "from-[#f59e0b]/35 via-[#ec4899]/25 to-[#381932]/20",
    badge: "Kitchen · Live Dispatch",
    slides: [
      {
        img: "/yumm-assets/delivery-pack-1.png",
        caption: "KOT prints · QR applied",
        sub: "Fresh reorder sticker on every parcel",
        tag: "PACKED",
      },
      {
        img: "/yumm-assets/delivery-hero.png",
        caption: "Rider at the doorstep",
        sub: "Own fleet, Shadowfax, Dunzo or Porter",
        tag: "ON THE WAY",
      },
      {
        img: "/yumm-assets/step-screen-3.png",
        caption: "Live status in thread",
        sub: "Arriving in 18 mins · Tracked in chat",
        tag: "LIVE STATUS",
      },
    ],
  },
  {
    step: "Step 4",
    title: "Rewards bring them back",
    body: "Points and offers arrive in the same chat. Redeem on delivery or at the table.",
    tall: false,
    aura: "from-[#a855f7]/35 via-[#7fd858]/30 to-[#f97316]/20",
    badge: "Loyalty · AI Campaigns",
    slides: [
      {
        img: "/yumm-assets/feature-card-2.png",
        caption: "+43 Bean Coins earned",
        sub: "160 pts balance · Redeem on next order",
        tag: "REWARDS",
      },
      {
        img: "/yumm-assets/feature-card-3.png",
        caption: "Automated weekend drop",
        sub: "AI poster sent Friday 6 pm · 20% off rolls",
        tag: "CAMPAIGN",
      },
      {
        img: "/yumm-assets/step-screen-4.png",
        caption: "One-tap reorder in chat",
        sub: "100% guest phone & history stays yours",
        tag: "REGULAR",
      },
    ],
  },
];

export function HowItWorks() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setTick((t) => t + 1);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden rounded-t-[64px] bg-surface-card px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
    >
      {/* Ambient floating transparent food/packaging engagement backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-[#7fd858]/10 blur-3xl" />
        <div className="absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-[#b98aae]/20 blur-3xl" />
        <div className="absolute left-[6%] top-[14%] hidden h-24 w-24 rotate-[-12deg] overflow-hidden rounded-full opacity-15 ring-4 ring-surface-subtle lg:block">
          <Image src="/yumm-assets/dish-pizza.png" alt="" width={96} height={96} className="h-full w-full object-cover" />
        </div>
        <div className="absolute right-[7%] top-[12%] hidden h-28 w-28 rotate-[10deg] overflow-hidden rounded-full opacity-15 ring-4 ring-surface-subtle lg:block">
          <Image src="/yumm-assets/dish-thali.png" alt="" width={112} height={112} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="page-max relative z-[1] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
              <p className="text-base font-medium text-text-brand">Just 4 steps</p>
            </div>
            <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
              How it works
            </h2>
            <p className="max-w-[560px] text-xl font-normal leading-[1.5] text-text-body">
              From the parcel in their hands to their next order, all in one WhatsApp chat.
            </p>
          </div>
        </div>

        <div className="relative flex w-full max-w-[1120px] flex-wrap items-end justify-center gap-6 pt-6 lg:flex-nowrap">
          {STEPS.map((s, stepIdx) => {
            const activeSlideIdx = (tick + stepIdx) % s.slides.length;
            const activeSlide = s.slides[activeSlideIdx]!;

            return (
              <div
                key={s.step}
                className={cn(
                  "group relative flex flex-col items-center gap-6 overflow-hidden rounded-[24px] bg-surface-subtle pt-8 transition-transform duration-300 hover:-translate-y-1",
                  s.tall
                    ? "h-[620px] w-full max-w-[304px] px-6 sm:w-[calc(50%-12px)] lg:w-[304px] lg:shrink-0"
                    : "h-[556px] w-full max-w-[304px] px-5 sm:w-[calc(50%-12px)] lg:w-[248px] lg:flex-1",
                )}
              >
                {/* Colorful real-time ambient glow + transparent image layer behind phone */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t opacity-80 transition-opacity duration-500",
                    s.aura,
                  )}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-2 bottom-2 top-[34%] overflow-hidden rounded-[20px] opacity-25 mix-blend-multiply blur-[2px]"
                  aria-hidden
                >
                  <Image
                    src={activeSlide.img}
                    alt=""
                    width={280}
                    height={360}
                    className="h-full w-full scale-110 object-cover transition-all duration-700"
                  />
                </div>

                <div className="relative z-[2] flex w-full flex-col items-center gap-3.5 text-center">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-surface-card px-3 py-1 text-xs font-semibold leading-[1.5] text-text-brand shadow-xs">
                      {s.step}
                    </span>
                    <span className="rounded-full bg-[#381932] px-2.5 py-1 text-[11px] font-semibold text-[#c8f0b4]">
                      {s.badge}
                    </span>
                  </div>
                  <div className="flex w-full flex-col items-center gap-2">
                    <p className="text-xl font-semibold leading-[1.2] text-text-brand">{s.title}</p>
                    <p className="text-base font-normal leading-[1.5] text-text-body">{s.body}</p>
                  </div>
                </div>

                {/* Titanium iPhone Mockup with colorful real-time dynamic carousel */}
                <div className="relative z-[2] min-h-px w-full flex-1 overflow-hidden">
                  {s.tall ? (
                    <div className="absolute left-1/2 top-0 h-[465.49px] w-[236px] -translate-x-1/2 shadow-[1.628px_4.883px_8.138px_0px_rgba(0,0,0,0.18),9.766px_22.786px_39.062px_0px_rgba(26,20,13,0.22)]">
                      <div
                        className="absolute left-[8.14px] top-0 h-[465.49px] w-[227.862px] rounded-[37.434px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgb(26, 27, 30) 0%, rgb(38, 40, 44) 85%, rgb(92, 96, 103) 94%, rgb(44, 46, 50) 100%)",
                        }}
                      />
                      <div className="absolute left-[233.56px] top-[122.07px] h-[60.221px] w-[3.255px] rounded-[1.628px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div className="absolute left-[-1.63px] top-[96.03px] h-[24.414px] w-[3.255px] rounded-[1.628px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div className="absolute left-[-1.63px] top-[138.34px] h-[43.945px] w-[3.255px] rounded-[1.628px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div className="absolute left-[-1.63px] top-[192.06px] h-[43.945px] w-[3.255px] rounded-[1.628px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div
                        className="absolute left-0 top-0 h-[465.49px] w-[227.862px] rounded-[37.434px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgb(59, 62, 67) 0%, rgb(141, 145, 152) 6%, rgb(46, 49, 53) 16%, rgb(37, 39, 43) 50%, rgb(48, 51, 56) 84%, rgb(126, 130, 138) 94%, rgb(53, 56, 61) 100%)",
                        }}
                      />
                      <div className="absolute left-[3.26px] top-[3.26px] h-[458.979px] w-[221.352px] rounded-[34.179px] bg-[#0a0a0b]" />

                      {/* Dynamic colorful real-time screen */}
                      <div className="absolute left-[9.77px] top-[9.77px] h-[445.959px] w-[208.331px] overflow-hidden rounded-[27.669px] bg-[#1e0d1b]">
                        {s.slides.map((sl, idx) => (
                          <div
                            key={sl.caption}
                            className={cn(
                              "absolute inset-0 transition-all duration-700 ease-out",
                              idx === activeSlideIdx
                                ? "scale-100 opacity-100"
                                : "scale-105 opacity-0 pointer-events-none",
                            )}
                          >
                            <Image
                              src={sl.img}
                              alt={sl.caption}
                              width={220}
                              height={446}
                              className="h-full w-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#24101f]/95 via-[#24101f]/25 to-transparent" />
                          </div>
                        ))}

                        {/* Live WhatsApp status bar */}
                        <div className="absolute inset-x-0 top-9 z-10 flex items-center justify-between px-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#24101f]/80 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[#7fd858] backdrop-blur-md">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7fd858]" />
                            {activeSlide.tag}
                          </span>
                          <div className="flex gap-1">
                            {s.slides.map((_, idx) => (
                              <span
                                key={idx}
                                className={cn(
                                  "h-1 rounded-full transition-all duration-300",
                                  idx === activeSlideIdx ? "w-4 bg-[#7fd858]" : "w-1.5 bg-white/50",
                                )}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Bottom glass engagement card */}
                        <div className="absolute inset-x-2.5 bottom-6 z-10 rounded-2xl border border-white/20 bg-[#381932]/85 p-3 text-left text-white shadow-lg backdrop-blur-md">
                          <p className="text-xs font-semibold leading-snug text-[#fff3e6]">
                            {activeSlide.caption}
                          </p>
                          <p className="mt-0.5 text-[10px] leading-snug text-[#dcc7d5]">
                            {activeSlide.sub}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-[79.75px] top-[19.53px] z-20 h-[19.531px] w-[68.359px] rounded-[9.766px] bg-black" />
                      <div className="absolute left-[133.46px] top-[26.04px] z-20 h-[6.51px] w-[6.51px]">
                        <Image src="/yumm-assets/camera.svg" alt="" width={7} height={7} />
                      </div>
                      <div
                        className="pointer-events-none absolute left-[9.77px] top-[9.77px] z-10 h-[445.959px] w-[208.331px] rounded-[27.669px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(108.11deg, rgba(255, 255, 255, 0.16) 14.1%, rgba(255, 255, 255, 0) 39.23%, rgba(255, 255, 255, 0) 85.9%)",
                        }}
                      />
                    </div>
                  ) : (
                    <div className="absolute left-1/2 top-0 h-[394.483px] w-[200px] -translate-x-1/2 shadow-[1.379px_4.138px_6.897px_0px_rgba(0,0,0,0.18),8.276px_19.31px_33.103px_0px_rgba(26,20,13,0.22)]">
                      <div
                        className="absolute left-[6.9px] top-0 h-[394.483px] w-[193.103px] rounded-[31.724px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgb(26, 27, 30) 0%, rgb(38, 40, 44) 85%, rgb(92, 96, 103) 94%, rgb(44, 46, 50) 100%)",
                        }}
                      />
                      <div className="absolute left-[197.93px] top-[103.45px] h-[51.034px] w-[2.759px] rounded-[1.379px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div className="absolute left-[-1.38px] top-[81.38px] h-[20.69px] w-[2.759px] rounded-[1.379px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div className="absolute left-[-1.38px] top-[117.24px] h-[37.241px] w-[2.759px] rounded-[1.379px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div className="absolute left-[-1.38px] top-[162.76px] h-[37.241px] w-[2.759px] rounded-[1.379px] bg-gradient-to-r from-[#6d7178] via-[#b9bdc4] to-[#55585e]" />
                      <div
                        className="absolute left-0 top-0 h-[394.483px] w-[193.103px] rounded-[31.724px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, rgb(59, 62, 67) 0%, rgb(141, 145, 152) 6%, rgb(46, 49, 53) 16%, rgb(37, 39, 43) 50%, rgb(48, 51, 56) 84%, rgb(126, 130, 138) 94%, rgb(53, 56, 61) 100%)",
                        }}
                      />
                      <div className="absolute left-[2.76px] top-[2.76px] h-[388.966px] w-[187.586px] rounded-[28.966px] bg-[#0a0a0b]" />

                      {/* Dynamic colorful real-time screen */}
                      <div className="absolute left-[8.28px] top-[8.28px] h-[377.931px] w-[176.552px] overflow-hidden rounded-[23.448px] bg-[#1e0d1b]">
                        {s.slides.map((sl, idx) => (
                          <div
                            key={sl.caption}
                            className={cn(
                              "absolute inset-0 transition-all duration-700 ease-out",
                              idx === activeSlideIdx
                                ? "scale-100 opacity-100"
                                : "scale-105 opacity-0 pointer-events-none",
                            )}
                          >
                            <Image
                              src={sl.img}
                              alt={sl.caption}
                              width={190}
                              height={378}
                              className="h-full w-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#24101f]/95 via-[#24101f]/25 to-transparent" />
                          </div>
                        ))}

                        {/* Live WhatsApp status bar */}
                        <div className="absolute inset-x-0 top-8 z-10 flex items-center justify-between px-2.5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#24101f]/80 px-2 py-0.5 text-[8px] font-semibold tracking-wider text-[#7fd858] backdrop-blur-md">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7fd858]" />
                            {activeSlide.tag}
                          </span>
                          <div className="flex gap-1">
                            {s.slides.map((_, idx) => (
                              <span
                                key={idx}
                                className={cn(
                                  "h-1 rounded-full transition-all duration-300",
                                  idx === activeSlideIdx ? "w-3.5 bg-[#7fd858]" : "w-1 bg-white/50",
                                )}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Bottom glass engagement card */}
                        <div className="absolute inset-x-2 bottom-5 z-10 rounded-xl border border-white/20 bg-[#381932]/85 p-2.5 text-left text-white shadow-lg backdrop-blur-md">
                          <p className="text-[11px] font-semibold leading-snug text-[#fff3e6]">
                            {activeSlide.caption}
                          </p>
                          <p className="mt-0.5 text-[9.5px] leading-snug text-[#dcc7d5]">
                            {activeSlide.sub}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-[67.59px] top-[16.55px] z-20 h-[16.552px] w-[57.931px] rounded-[8.276px] bg-black" />
                      <div className="absolute left-[113.1px] top-[22.07px] z-20 h-[5.517px] w-[5.517px]">
                        <Image src="/yumm-assets/camera.svg" alt="" width={6} height={6} />
                      </div>
                      <div
                        className="pointer-events-none absolute left-[8.28px] top-[8.28px] z-10 h-[377.931px] w-[176.552px] rounded-[23.448px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(108.11deg, rgba(255, 255, 255, 0.16) 14.1%, rgba(255, 255, 255, 0) 39.23%, rgba(255, 255, 255, 0) 85.9%)",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bigger Light-Green Curved Step Arrow from Step 1 to Step 2 */}
          <div className="pointer-events-none absolute left-[248px] top-[-14px] z-30 hidden h-[82px] w-[112px] drop-shadow-[0_6px_16px_rgba(127,216,88,0.45)] lg:block">
            <Image
              src="/yumm-assets/step-arrow.svg"
              alt=""
              width={112}
              height={82}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

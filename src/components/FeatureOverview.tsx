"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const CARDS = [
  {
    id: 1,
    num: "01",
    title: "Packaging QR",
    body: "Codes on the bag, box lid, tissue and stickers. Sticker copy in Hindi, Kannada or Telugu.",
    linkLabel: "Explore packaging",
    href: "/packaging",
    icon: "/yumm-assets/icon-qr.svg",
    photos: [
      { src: "/yumm-assets/feature-card-1.png", tag: "Bag · Box · Tissue QR" },
      { src: "/yumm-assets/packaging-one-guest.png", tag: "Instant Camera Scan" },
      { src: "/yumm-assets/packaging-setup.png", tag: "Kitchen Sticker Pack" },
    ],
  },
  {
    id: 2,
    num: "02",
    title: "Loyalty & CRM",
    body: "One digital card per guest. Points earned on delivery, redeemable in chat or at the table.",
    linkLabel: "Explore loyalty",
    href: "/loyalty",
    icon: "/yumm-assets/icon-wallet.svg",
    photos: [
      { src: "/yumm-assets/feature-card-2.png", tag: "1,240 Bean Coins Wallet" },
      { src: "/yumm-assets/loyalty-redeem-chat.png", tag: "Redeem in WhatsApp" },
      { src: "/yumm-assets/loyalty-redeem-table.png", tag: "Redeem at the Table" },
    ],
  },
  {
    id: 3,
    num: "03",
    title: "Campaigns",
    body: "Festival, payday and weekend offers with AI made posters, tracked to the rupee.",
    linkLabel: "Explore campaigns",
    href: "/campaigns",
    icon: "/yumm-assets/icon-megaphone.svg",
    photos: [
      { src: "/yumm-assets/feature-card-3.png", tag: "AI Festival & Payday Posters" },
      { src: "/yumm-assets/dish-biryani.png", tag: "Weekend Combo Drops" },
      { src: "/yumm-assets/dish-thali.png", tag: "Festive Thali Broadcasts" },
    ],
  },
  {
    id: 4,
    num: "04",
    title: "Delivery",
    body: "Your own riders, or Shadowfax, Dunzo and Porter where available. Status in the chat.",
    linkLabel: "Explore delivery",
    href: "/delivery",
    icon: "/yumm-assets/icon-truck.svg",
    photos: [
      { src: "/yumm-assets/feature-card-4.png", tag: "Doorstep Hand-off" },
      { src: "/yumm-assets/delivery-pack-1.png", tag: "KOT + Reorder QR" },
      { src: "/yumm-assets/delivery-pack-2.png", tag: "Sealed & Dispatched" },
    ],
  },
] as const;

export function FeatureOverview() {
  const [openId, setOpenId] = useState<number>(1);
  const [slideIdx, setSlideIdx] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      setSlideIdx((s) => s + 1);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="features"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative scroll-mt-24 overflow-hidden bg-surface-base px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
    >
      {/* Transparent ambient food/packaging engagement backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-[#7fd858]/12 blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-80 w-80 rounded-full bg-[#b98aae]/20 blur-3xl" />
      </div>

      <div className="page-max relative z-[1] flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">One rail, four tools</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand lg:w-[860px]">
              Built for the next order
            </h2>
          </div>

          <p className="max-w-[400px] flex-1 text-xl font-normal leading-[1.5] text-text-body">
            Packaging, loyalty, campaigns and delivery connect through one guest record, so each order can lead to the next.
          </p>
        </div>

        {/* Desktop hover-expand row with real-time dynamic image carousels & transparent photo backdrops */}
        <div className="hidden h-[420px] w-full items-start gap-4 lg:flex">
          {CARDS.map((card) => {
            const isOpen = openId === card.id;
            const activePhotoIndex = slideIdx % card.photos.length;
            const activePhoto = card.photos[activePhotoIndex]!;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setOpenId(card.id)}
                onFocus={() => setOpenId(card.id)}
                onClick={() => setOpenId(card.id)}
                tabIndex={0}
                className={cn(
                  "relative flex h-[420px] flex-col overflow-hidden rounded-[28px] p-[10px] transition-[width,background-color,box-shadow] duration-300 ease-in-out outline-none",
                  isOpen
                    ? "w-[472px] shrink-0 bg-surface-card shadow-[0_20px_48px_rgba(36,16,31,0.12)]"
                    : "w-[200px] flex-1 cursor-pointer bg-surface-brand",
                )}
              >
                {isOpen ? (
                  <>
                    <div className="relative h-[170px] w-full shrink-0 overflow-hidden rounded-[20px] bg-surface-ink">
                      {card.photos.map((ph, idx) => (
                        <Image
                          key={ph.src}
                          src={ph.src}
                          alt={ph.tag}
                          width={452}
                          height={170}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                            idx === activePhotoIndex
                              ? "scale-100 opacity-100"
                              : "scale-105 opacity-0",
                          )}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24101f]/65 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#24101f]/80 px-3 py-1 text-xs font-semibold text-[#c8f0b4] backdrop-blur-md">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7fd858]" />
                          {activePhoto.tag}
                        </span>
                        <div className="flex items-center gap-1">
                          {card.photos.map((ph, idx) => (
                            <button
                              key={ph.src}
                              type="button"
                              aria-label={`Show slide ${idx + 1}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSlideIdx(idx);
                              }}
                              className={cn(
                                "h-1.5 cursor-pointer rounded-full transition-all",
                                idx === activePhotoIndex
                                  ? "w-5 bg-[#7fd858]"
                                  : "w-1.5 bg-white/60 hover:bg-white",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-between px-[18px] pb-3 pt-[18px]">
                      <div className="flex w-full flex-col gap-3">
                        <div className="flex w-full items-start justify-between">
                          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[14px] bg-surface-subtle">
                            <Image src={card.icon} alt="" width={24} height={24} />
                          </div>
                          <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-accent opacity-50">
                            {card.num}
                          </p>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                          <p className="text-[26px] font-semibold leading-[1.2] text-text-brand">
                            {card.title}
                          </p>
                          <p className="text-base font-normal leading-[1.5] text-text-body">
                            {card.body}
                          </p>
                          <Link
                            href={card.href}
                            className="inline-flex items-center gap-2 rounded-full py-3 pr-5 text-base font-medium text-text-brand hover:underline"
                          >
                            {card.linkLabel}
                            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Transparent engaging product photo background on collapsed cards */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                      <Image
                        src={activePhoto.src}
                        alt=""
                        width={260}
                        height={420}
                        className="h-full w-full object-cover opacity-20 mix-blend-luminosity transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(56,25,50,0.82) 0%, rgba(56,25,50,0.92) 55%, rgba(42,18,38,0.97) 100%)",
                        }}
                      />
                    </div>
                    <div className="relative z-[1] flex w-full flex-1 flex-col items-start justify-between p-[14px]">
                      <div className="flex w-full flex-col gap-[28px]">
                        <div className="flex w-full items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-surface-base">
                            <Image src={card.icon} alt="" width={24} height={24} />
                          </div>
                          <p className="font-serif-display text-[56px] leading-[1.2] tracking-[-0.56px] text-text-on-brand">
                            {card.num}
                          </p>
                        </div>
                        <div className="flex w-full flex-col gap-[10px] text-text-on-brand">
                          <p className="text-[22px] font-semibold leading-[1.2]">{card.title}</p>
                          <p className="text-[15px] font-normal leading-[1.5]">{card.body}</p>
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7fd858] bg-[#7fd858]/15">
                        <Image src="/yumm-assets/icon-plus-milk.svg" alt="" width={20} height={20} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet cards with colorful dynamic carousel */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {CARDS.map((card) => {
            const activePhotoIndex = slideIdx % card.photos.length;
            const activePhoto = card.photos[activePhotoIndex]!;
            return (
              <div
                key={card.id}
                className="flex flex-col overflow-hidden rounded-[28px] bg-surface-card p-[10px] shadow-[0_12px_32px_rgba(36,16,31,0.08)]"
              >
                <div className="relative h-[190px] w-full overflow-hidden rounded-[20px] bg-surface-ink">
                  {card.photos.map((ph, idx) => (
                    <Image
                      key={ph.src}
                      src={ph.src}
                      alt={ph.tag}
                      width={452}
                      height={190}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                        idx === activePhotoIndex ? "scale-100 opacity-100" : "scale-105 opacity-0",
                      )}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24101f]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#24101f]/80 px-3 py-1 text-xs font-semibold text-[#c8f0b4] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7fd858]" />
                    {activePhoto.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-3 px-4 pb-3 pt-4">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[14px] bg-surface-subtle">
                      <Image src={card.icon} alt="" width={24} height={24} />
                    </div>
                    <p className="font-serif-display text-[40px] leading-[1.2] text-text-accent opacity-50">
                      {card.num}
                    </p>
                  </div>
                  <p className="text-[24px] font-semibold leading-[1.2] text-text-brand">{card.title}</p>
                  <p className="text-base font-normal leading-[1.5] text-text-body">{card.body}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 py-2 text-base font-medium text-text-brand hover:underline"
                  >
                    {card.linkLabel}
                    <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

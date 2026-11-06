import Image from "next/image";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Packaging QR",
  description:
    "A QR on the bag, box lid, tissue and sticker opens your WhatsApp. Your restaurant’s name leads, and YUMM branding is optional.",
};

function StickerQrMatrix({ seed = 0 }: { seed?: number }) {
  // 9x9 internal module pattern between the 3 finder patterns
  const dots: Array<[number, number]> = [
    [3, 0], [5, 0], [3, 1], [4, 1],
    [0, 3], [2, 3], [4, 3], [5, 3], [7, 3], [8, 3],
    [1, 4], [3, 4], [5, 4], [6, 4],
    [0, 5], [2, 5], [4, 5], [7, 5],
    [3, 6], [5, 6], [6, 6], [8, 6],
    [3, 7], [4, 7], [6, 7], [7, 7],
    [4, 8], [5, 8], [7, 8], [8, 8],
  ];
  return (
    <div
      style={{
        width: 140,
        height: 140,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        padding: 12,
        boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", color: "#0b1a33" }}
        fill="currentColor"
        aria-label="Scannable WhatsApp QR Code"
      >
        {/* Top-Left Finder Pattern */}
        <rect x="6" y="6" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="5.5" />
        <rect x="13" y="13" width="12" height="12" rx="3" />

        {/* Top-Right Finder Pattern */}
        <rect x="68" y="6" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="5.5" />
        <rect x="75" y="13" width="12" height="12" rx="3" />

        {/* Bottom-Left Finder Pattern */}
        <rect x="6" y="68" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="5.5" />
        <rect x="13" y="75" width="12" height="12" rx="3" />

        {/* Data Modules */}
        {dots.map(([gx, gy], idx) => {
          const shift = (idx + seed) % 2 === 0;
          const cx = 10 + gx * 9;
          const cy = 10 + gy * 9;
          if ((gx < 3 && gy < 3) || (gx > 5 && gy < 3) || (gx < 3 && gy > 5)) return null;
          return (
            <circle
              key={`${gx}-${gy}`}
              cx={cx}
              cy={cy}
              r={shift ? 3.3 : 2.7}
            />
          );
        })}
      </svg>
    </div>
  );
}

const STICKERS = [
  {
    lang: "Hindi",
    cutLabel: "Oval Die-Cut Seal",
    scriptBadge: "हि",
    partnerPill: false,
    brand: "Mughal Treat",
    regionalLine: "फिर ऑर्डर — स्कैन करें",
    regionalHex: "#f2c45a",
    subLabel: "SCAN TO REORDER",
    bottomNative: "WhatsApp · सीधा ऑर्डर",
    rewardCopy: "Scan & win rewards",
    bgHex: "#144734",
    badgeBgHex: "#0d3324",
    borderRadius: "999px",
    borderColor: "#e6d9c7",
    rotateDeg: "-1.5deg",
    seed: 1,
  },
  {
    lang: "Kannada",
    cutLabel: "Rounded Square Cut",
    scriptBadge: "ಕ",
    partnerPill: false,
    brand: "Golden China",
    regionalLine: "ರಿವಾರ್ಡ್‌ಗಾಗಿ ಸ್ಕ್ಯಾನ್",
    regionalHex: "#e5b567",
    subLabel: "SCAN FOR REWARDS",
    bottomNative: "ಮುಂದಿನ ಬಾರಿ ಬಹುಮಾನ",
    rewardCopy: "Scan & win rewards",
    bgHex: "#3d291a",
    badgeBgHex: "#26180e",
    borderRadius: "32px",
    borderColor: "#e6d9c7",
    rotateDeg: "1.5deg",
    seed: 2,
  },
  {
    lang: "Telugu",
    cutLabel: "Arch Tombstone Die-Cut",
    scriptBadge: "తె",
    partnerPill: true,
    brand: "Banner Food",
    regionalLine: "WhatsAppలో మళ్ళీ ఆర్డర్",
    regionalHex: "#63b3ed",
    subLabel: "REORDER ON WHATSAPP",
    bottomNative: "ప్రతి ఆర్డర్‌పై రివార్డ్స్",
    rewardCopy: "Scan & win rewards",
    bgHex: "#16293e",
    badgeBgHex: "#253e59",
    borderRadius: "150px 150px 18px 18px",
    borderColor: "#e6d9c7",
    rotateDeg: "-1deg",
    seed: 3,
  },
  {
    lang: "English + Hindi",
    cutLabel: "Capsule Stadium Seal",
    scriptBadge: "हि",
    partnerPill: false,
    brand: "The Third Place",
    regionalLine: "स्कैन · ऑर्डर · हो गया",
    regionalHex: "#f49ac2",
    subLabel: "SCAN · ORDER · DONE",
    bottomNative: "Instant WhatsApp Menu",
    rewardCopy: "Scan & win rewards",
    bgHex: "#4d2846",
    badgeBgHex: "#34182f",
    borderRadius: "999px",
    borderColor: "#e6d9c7",
    rotateDeg: "1.5deg",
    seed: 4,
  },
] as const;

const SETUP_STEPS = [
  {
    num: "01",
    title: "Safe zone",
    body: "Keep the QR clear of folds, seams and tape.",
  },
  {
    num: "02",
    title: "Same spot every box",
    body: "Staff place it the same way on every order.",
  },
  {
    num: "03",
    title: "Unique code per order",
    body: "Each parcel can carry its own code.",
  },
  {
    num: "04",
    title: "Print, pack, dispatch",
    body: "Stick it on as the order is packed.",
  },
] as const;

export default function PackagingPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:10497) */}
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">Packaging QR</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-4">
                <h1 className="font-serif-display text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Every parcel brings the next order
                </h1>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  A QR on the bag, box lid, tissue and sticker opens your WhatsApp. Your restaurant’s name leads, and YUMM branding is optional.
                </p>
              </div>

              <div className="flex flex-wrap items-start gap-4">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
                >
                  Join the waitlist
                  <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
                </Link>
                <Link
                  href="#stickers"
                  className="inline-flex items-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
                >
                  See the stickers
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-[32px] sm:h-[600px]">
            <Image
              src="/yumm-assets/packaging-hero.png"
              alt="Packaging with QR codes"
              width={520}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 02 Sticker preview (94:10508) — Variety of designs, die-cuts, restaurant branding, Scan & Win Rewards, Powered by YUMM */}
      <section
        id="stickers"
        className="scroll-mt-24 bg-surface-subtle px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
      >
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-20">
            <div className="flex flex-1 flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                  <p className="text-base font-medium text-text-brand">Stickers &amp; Die-Cuts</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
              </div>
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Speaks your guest’s language
              </h2>
            </div>

            <p className="max-w-[440px] text-xl font-normal leading-[1.5] text-text-body">
              Custom die-cuts in English, Hindi, Kannada or Telugu. Your restaurant branding leads at the top, with live reward callouts and subtle YUMM attribution below.
            </p>
          </div>

          {/* Reference Image 6 Studio Die-Cut Sticker Board */}
          <div
            className="flex w-full flex-col items-center gap-10 rounded-[32px] px-5 py-10 sm:px-10 sm:py-14"
            style={{
              backgroundColor: "#f7ecde",
              border: "1px solid #e2d0bc",
              backgroundImage:
                "linear-gradient(to right, rgba(56,25,50,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,25,50,0.045) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          >
            <p
              className="text-center font-bold uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                color: "#8a3d2b",
              }}
            >
              YOUR NAME · HINDI · KANNADA · TELUGU — SAME LAYOUT
            </p>

            <div className="grid w-full grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STICKERS.map((s) => (
                <div key={s.brand} className="flex flex-col items-center gap-5">
                  {/* Die-cut physical sticker with guaranteed inline color & shape */}
                  <div
                    className="group relative flex flex-col items-center justify-between text-center transition-transform duration-300 hover:-translate-y-1.5"
                    style={{
                      width: 264,
                      minHeight: 376,
                      backgroundColor: s.bgHex,
                      borderRadius: s.borderRadius,
                      border: `6px solid ${s.borderColor}`,
                      padding: "24px 20px 22px",
                      boxShadow: "0 20px 38px rgba(20, 14, 18, 0.28)",
                      transform: `rotate(${s.rotateDeg})`,
                    }}
                  >
                    {/* Top language / partner pill header */}
                    <div className="flex items-center justify-center gap-2">
                      {s.partnerPill && (
                        <span
                          style={{
                            borderRadius: 999,
                            border: "1px solid rgba(255,255,255,0.3)",
                            backgroundColor: "rgba(255,255,255,0.12)",
                            padding: "3px 10px",
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            color: "rgba(255,255,255,0.92)",
                            textTransform: "uppercase",
                          }}
                        >
                          PARTNER
                        </span>
                      )}
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          backgroundColor: s.badgeBgHex,
                          color: "#ffffff",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {s.scriptBadge}
                      </span>
                    </div>

                    {/* Restaurant Name + Regional Callout + English Sub-label */}
                    <div className="my-2 flex flex-col items-center gap-1">
                      <p
                        style={{
                          fontSize: 23,
                          fontWeight: 800,
                          lineHeight: 1.15,
                          letterSpacing: "-0.02em",
                          color: "#ffffff",
                          margin: 0,
                        }}
                      >
                        {s.brand}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: 1.35,
                          color: s.regionalHex,
                          margin: "2px 0 0",
                        }}
                      >
                        {s.regionalLine}
                      </p>
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.72)",
                          textTransform: "uppercase",
                          margin: "2px 0 0",
                        }}
                      >
                        {s.subLabel}
                      </p>
                    </div>

                    {/* Crisp White Scannable QR Code Matrix */}
                    <StickerQrMatrix seed={s.seed} />

                    {/* Bottom Native Text + Scan & Win Rewards + Powered by YUMM */}
                    <div className="mt-3 flex w-full flex-col items-center gap-1.5">
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.9)",
                          margin: 0,
                        }}
                      >
                        {s.bottomNative}
                      </p>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          borderRadius: 999,
                          backgroundColor: "rgba(0,0,0,0.28)",
                          padding: "4px 12px",
                          fontSize: 10,
                          fontWeight: 600,
                          color: "#c8f0b4",
                        }}
                      >
                        <span>★ {s.rewardCopy}</span>
                        <span style={{ color: "rgba(255,255,255,0.45)" }}>·</span>
                        <span style={{ color: "rgba(255,255,255,0.88)" }}>Powered by YUMM</span>
                      </div>
                    </div>
                  </div>

                  {/* Separate label cleanly below the sticker */}
                  <div className="flex flex-col items-center gap-0.5 pt-1 text-center">
                    <p className="text-base font-semibold leading-[1.4] text-text-brand">
                      {s.lang}
                    </p>
                    <p className="text-xs font-medium text-text-caption">{s.cutLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs font-normal leading-[1.5] text-text-caption">
            Example restaurant names &amp; die-cut shapes. Every sticker is customised with your logo, colours, reward offer and language.
          </p>
        </div>
      </section>

      {/* 03 Four surfaces (94:10544) */}
      <section className="bg-surface-base px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Where it goes</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Four surfaces, one scan
              </h2>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Each surface has a spot the guest sees when the parcel is in their hands.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {/* Surface 1: Bag */}
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card">
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src="/yumm-assets/packaging-surface-1.png"
                  alt=""
                  width={1370}
                  height={771}
                  className="pointer-events-none absolute left-[-140%] top-[-57.08%] h-[214.16%] w-[250%] max-w-none"
                />
              </div>
              <div className="flex flex-col gap-2 px-8 pb-10 pt-8">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  Bag
                </p>
                <p className="text-base font-normal leading-[1.5] text-text-body">
                  Front panel, at eye level when the guest holds it.
                </p>
              </div>
            </div>

            {/* Surface 2: Box lid */}
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card">
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src="/yumm-assets/packaging-surface-2.png"
                  alt=""
                  width={1096}
                  height={818}
                  className="pointer-events-none absolute left-[-54%] top-[-63.6%] h-[227.2%] w-[200%] max-w-none"
                />
              </div>
              <div className="flex flex-col gap-2 px-8 pb-10 pt-8">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  Box lid
                </p>
                <p className="text-base font-normal leading-[1.5] text-text-body">
                  Top of the lid, clear of tape and seals.
                </p>
              </div>
            </div>

            {/* Surface 3: Tissue */}
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card">
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src="/yumm-assets/packaging-surface-2.png"
                  alt=""
                  width={1370}
                  height={1022}
                  className="pointer-events-none absolute left-[-150%] top-[-92%] h-[284%] w-[250%] max-w-none"
                />
              </div>
              <div className="flex flex-col gap-2 px-8 pb-10 pt-8">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  Tissue
                </p>
                <p className="text-base font-normal leading-[1.5] text-text-body">
                  Printed corner, face up in the bag.
                </p>
              </div>
            </div>

            {/* Surface 4: Sticker */}
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card">
              <div className="relative h-[360px] w-full overflow-hidden">
                <Image
                  src="/yumm-assets/packaging-surface-4.png"
                  alt=""
                  width={913}
                  height={685}
                  className="pointer-events-none absolute left-[-63.33%] top-[-45.16%] h-[190.33%] w-[166.67%] max-w-none"
                />
              </div>
              <div className="flex flex-col gap-2 px-8 pb-10 pt-8">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  Sticker
                </p>
                <p className="text-base font-normal leading-[1.5] text-text-body">
                  Same spot on every box, inside the safe zone.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-[12px] border border-dashed border-surface-accent bg-surface-subtle px-5 py-4">
            <p className="text-base font-medium leading-[1.5] text-text-brand">
              Content needed: replace these lines with the placement guidance from the live /packaging page.
            </p>
          </div>
        </div>
      </section>

      {/* 04 Print, pack, dispatch (94:10575) */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="relative h-[420px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-[32px] sm:h-[600px]">
            <Image
              src="/yumm-assets/packaging-setup.png"
              alt="Applying QR sticker in kitchen"
              width={520}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                  <p className="text-base font-medium text-text-brand">Setup</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
              </div>
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Same spot, every box
              </h2>
            </div>

            <div className="flex w-full flex-col">
              {SETUP_STEPS.map((st) => (
                <div
                  key={st.num}
                  className="flex w-full items-start gap-6 border-t border-border-default py-6"
                >
                  <p className="w-[56px] shrink-0 font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                    {st.num}
                  </p>
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-xl font-semibold leading-[1.2] text-text-brand">
                      {st.title}
                    </p>
                    <p className="text-base font-normal leading-[1.5] text-text-body">
                      {st.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs font-normal leading-[1.5] text-text-caption">
              Before you print: content needed on printer or hardware for per order codes, who pays for stickers, and what data a code carries.
            </p>
          </div>
        </div>
      </section>

      {/* 05 One guest identity (94:10604) */}
      <section className="bg-surface-subtle">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-20 lg:pr-20">
          <div className="relative h-[420px] w-full shrink-0 lg:h-[763px] lg:w-[560px]">
            <Image
              src="/yumm-assets/packaging-one-guest.png"
              alt="Scanning QR code on parcel"
              width={560}
              height={763}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col items-start gap-10 px-5 pb-16 pt-8 sm:px-8 lg:px-0 lg:pb-32 lg:pt-[120px]">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                  <p className="text-base font-medium text-text-brand">One guest</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Stickers, offers and cards share one guest
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  A scan from a sticker lands in the same record as rewards and campaigns.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col">
              <Link
                href="/loyalty"
                className="flex w-full items-center justify-between gap-4 border-t border-border-default py-5 transition-colors hover:bg-surface-base/40"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold leading-[1.2] text-text-brand">
                    Loyalty and CRM
                  </p>
                  <p className="text-base font-normal leading-[1.5] text-text-body">
                    Points, cards and guest records
                  </p>
                </div>
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </Link>
              <Link
                href="/campaigns"
                className="flex w-full items-center justify-between gap-4 border-t border-border-default py-5 transition-colors hover:bg-surface-base/40"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold leading-[1.2] text-text-brand">
                    Campaigns
                  </p>
                  <p className="text-base font-normal leading-[1.5] text-text-body">
                    Offers sent to opted in guests
                  </p>
                </div>
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Page CTA (94:10623) */}
      <PageCTA heading="Put your QR on tonight’s orders?" />
    </div>
  );
}

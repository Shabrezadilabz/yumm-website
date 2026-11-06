import Image from "next/image";
import Link from "next/link";
import { CampaignsInteractive } from "@/components/CampaignsInteractive";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Campaigns",
  description:
    "Festival, payday and weekend offers, with AI posters in your brand colours. No design tool, no intern and no manual lists.",
};

const SCHEDULE = [
  {
    tag: "FESTIVAL",
    title: "Festive thali offer",
    status: "Scheduled · Fri 6 pm",
    img: "/yumm-assets/dish-thali.png",
  },
  {
    tag: "PAYDAY",
    title: "15% off combos",
    status: "Approved",
    img: "/yumm-assets/dish-biryani.png",
  },
  {
    tag: "WEEKEND",
    title: "20% off all rolls",
    status: "Waiting for your approval",
    img: "/yumm-assets/dish-rolls.png",
  },
] as const;

const MOMENTS = [
  {
    icon: "/yumm-assets/icon-wallet.svg",
    title: "Payday",
    body: "Month start combos when wallets are full.",
    bg: "/yumm-assets/dish-biryani.png",
  },
  {
    icon: "/yumm-assets/icon-clock.svg",
    title: "Weekend",
    body: "Saturday and Sunday specials, sent on Friday.",
    bg: "/yumm-assets/dish-rolls.png",
  },
  {
    icon: "/yumm-assets/icon-percent.svg",
    title: "Offers",
    body: "A discount on the dishes you choose.",
    bg: "/yumm-assets/dish-pizza.png",
  },
  {
    icon: "/yumm-assets/icon-gift.svg",
    title: "Buy one get one",
    body: "Two for one on a dish you pick.",
    bg: "/yumm-assets/dish-desserts.png",
  },
] as const;

const LOOP_PILLS = [
  { num: "01", label: "Choose the offer", active: false },
  { num: "02", label: "AI makes the poster", active: false },
  { num: "03", label: "You approve", active: true },
  { num: "04", label: "Send", active: false },
  { num: "05", label: "Track", active: false },
] as const;

export default function CampaignsPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:10832) */}
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">Campaigns</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-4">
                <h1 className="font-serif-display text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Offers that make themselves
                </h1>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  Festival, payday and weekend offers, with AI posters in your brand colours. No design tool, no intern and no manual lists.
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
                  href="#the-loop"
                  className="inline-flex items-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>

          {/* Right campaign schedule mock (94:10842) — with real poster thumbnails! */}
          <div className="flex w-full max-w-[480px] shrink-0 flex-col items-start gap-4 rounded-[24px] border border-border-default bg-surface-card p-6 shadow-[0_20px_48px_rgba(36,16,31,0.1)] sm:p-8">
            <div className="flex w-full items-center justify-between">
              <p className="text-base font-semibold text-text-brand">Campaigns</p>
              <p className="text-xs font-normal text-text-body">This month</p>
            </div>

            {SCHEDULE.map((item) => (
              <div
                key={item.tag}
                className="flex w-full items-center gap-4 rounded-[16px] bg-surface-base p-4"
              >
                <div className="relative h-[72px] w-[56px] shrink-0 overflow-hidden rounded-[8px] bg-surface-brand shadow-xs ring-1 ring-border-default">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={56}
                    height={72}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#381932]/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col items-start gap-1">
                  <p className="text-xs font-semibold text-text-caption">{item.tag}</p>
                  <p className="font-serif-display text-2xl leading-[1.2] text-text-brand">
                    {item.title}
                  </p>
                  <div className="rounded-full bg-surface-subtle px-3 py-1">
                    <p className="text-xs font-medium text-text-brand">{item.status}</p>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-xs font-normal text-text-caption">Example schedule</p>
          </div>
        </div>
      </section>

      {/* 02 Campaign types (94:10868) — with real background images! */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Moments</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
              Ready for the days guests order most
            </h2>
          </div>

          <div className="flex w-full flex-col gap-4 lg:flex-row">
            {/* Featured card: Festivals (94:10874) — with rich festive Thali background photo */}
            <div className="group relative flex min-h-[380px] w-full flex-col items-start justify-between overflow-hidden rounded-[24px] bg-surface-brand p-8 sm:p-10 lg:w-[552px] lg:shrink-0">
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <Image
                  src="/yumm-assets/order-hero-food.png"
                  alt=""
                  width={552}
                  height={416}
                  className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#381932] via-[#381932]/75 to-[#381932]/40" />
              </div>

              <div className="relative z-[1] flex w-full items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-[12px] bg-surface-base shadow-md">
                  <Image src="/yumm-assets/icon-star.svg" alt="" width={32} height={32} />
                </div>
                <span className="rounded-full bg-[#24101f]/80 px-3.5 py-1.5 text-xs font-semibold text-[#c8f0b4] backdrop-blur-md">
                  ● Auto-scheduled 7 days prior
                </span>
              </div>

              <div className="relative z-[1] flex flex-col gap-2">
                <p className="font-serif-display text-[56px] leading-[1.2] tracking-[-0.56px] text-text-on-brand">
                  Festivals
                </p>
                <p className="text-base font-normal leading-[1.5] text-text-on-brand-muted">
                  Diwali, Eid, Onam and Christmas offers, ready the week before.
                </p>
              </div>
            </div>

            {/* 2x2 grid (94:10880) — with dark plum readability scrim over dish photos */}
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {MOMENTS.map((m) => (
                <div
                  key={m.title}
                  className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[24px] px-6 pb-8 pt-6"
                  style={{
                    backgroundColor: "#24101f",
                    boxShadow: "0 14px 32px rgba(36,16,31,0.15)",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                    <Image
                      src={m.bg}
                      alt=""
                      width={280}
                      height={220}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(36,16,31,0.74) 0%, rgba(36,16,31,0.88) 50%, rgba(36,16,31,0.96) 100%)",
                      }}
                    />
                  </div>
                  <div
                    className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-[12px] shadow-md"
                    style={{ backgroundColor: "#fff3e6" }}
                  >
                    <Image src={m.icon} alt="" width={24} height={24} />
                  </div>
                  <div className="relative z-[1] flex flex-col gap-2">
                    <p
                      className="text-xl font-semibold leading-[1.2]"
                      style={{ color: "#fff3e6" }}
                    >
                      {m.title}
                    </p>
                    <p
                      className="text-base font-normal leading-[1.5]"
                      style={{ color: "#ebd5bf" }}
                    >
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 The loop (94:10907) — with real AI poster artwork inside the approval card! */}
      <section
        id="the-loop"
        className="scroll-mt-24 bg-surface-brand px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
      >
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                  <p className="text-base font-medium text-text-on-brand">How it runs</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                  Nothing goes out without your yes
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-on-brand-muted">
                  Five steps, and the one in the middle is yours.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              {LOOP_PILLS.map((p) => (
                <div
                  key={p.num}
                  className={`flex w-full items-center gap-4 rounded-[12px] px-4 py-3 ${
                    p.active
                      ? "bg-surface-base text-text-brand"
                      : "bg-surface-brand-soft text-text-on-brand"
                  }`}
                >
                  <p className="font-serif-display text-2xl leading-[1.2]">{p.num}</p>
                  <p className="text-base font-semibold leading-[1.5]">{p.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Approval card (94:10930) — with designed poster preview image */}
          <div className="flex w-full max-w-[440px] shrink-0 flex-col items-start gap-4 rounded-[24px] bg-surface-base p-6 shadow-2xl sm:p-8">
            <p className="text-xs font-semibold uppercase leading-[1.5] text-text-caption">
              WAITING FOR YOUR APPROVAL
            </p>
            <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] bg-surface-brand">
              <Image
                src="/yumm-assets/dish-rolls.png"
                alt="Weekend special 20% off all rolls poster"
                width={376}
                height={240}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#381932]/95 via-[#381932]/40 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full bg-[#fff3e6] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#381932]">
                  MANGO LEAF KITCHEN
                </span>
                <span className="rounded-full bg-[#7fd858] px-2.5 py-1 text-[10px] font-bold text-[#24101f]">
                  20% OFF
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                <p className="font-serif-display text-2xl leading-tight text-[#fff3e6]">
                  Weekend Roll Fest · Flat 20% Off
                </p>
                <p className="mt-1 text-xs text-[#dcc7d5]">
                  Order directly on WhatsApp · Free delivery &amp; 2x Bean Coins
                </p>
              </div>
            </div>
            <p className="font-serif-display text-2xl leading-[1.2] text-text-brand">
              Weekend special · 20% off all rolls
            </p>
            <p className="text-base font-normal leading-[1.5] text-text-body">
              Goes to 1,240 opted in guests on Friday at 6 pm
            </p>
            <div className="flex items-start gap-3">
              <button
                type="button"
                className="cursor-pointer rounded-full bg-surface-brand px-5 py-3 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
              >
                Approve
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-full border-[1.5px] border-border-brand bg-surface-card px-5 py-3 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
              >
                Edit
              </button>
            </div>
            <p className="text-xs font-normal text-text-caption">Example</p>
          </div>
        </div>
      </section>

      {/* 04 AI posters + 05 Automated loop */}
      <CampaignsInteractive />

      {/* 06 Page CTA (94:11008) */}
      <PageCTA heading="Want your next festival offer to run itself?" />
    </div>
  );
}

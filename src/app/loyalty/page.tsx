import Image from "next/image";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";
import { RewardCalculator } from "@/components/RewardCalculator";

export const metadata = {
  title: "Loyalty & CRM",
  description:
    "One dashboard for orders, reward claims, repeat orders and table redemptions, across delivery, takeaway and dine in.",
};

const DATA_CARDS = [
  {
    icon: "/yumm-assets/icon-shield.svg",
    title: "Who can see it",
    body: "Only you and the staff you invite. YUMM uses guest records only to run your orders, rewards and campaigns.",
    bg: "/yumm-assets/feature-card-2.png",
  },
  {
    icon: "/yumm-assets/icon-message.svg",
    title: "Consent and opt out",
    body: "Guests opt in when they first message you, and can stop messages at any time by replying STOP.",
    bg: "/yumm-assets/loyalty-redeem-chat.png",
  },
  {
    icon: "/yumm-assets/icon-clock.svg",
    title: "How long it’s kept",
    body: "Records stay while your account is active and are deleted 90 days after you leave, or sooner on request.",
    bg: "/yumm-assets/loyalty-redeem-table.png",
  },
] as const;

export default function LoyaltyPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:10628) */}
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">Loyalty and CRM</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-4">
                <h1 className="font-serif-display text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Every guest, one record
                </h1>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  One dashboard for orders, reward claims, repeat orders and table redemptions, across delivery, takeaway and dine in.
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
                  href="#reward-calculator"
                  className="inline-flex items-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
                >
                  Try the calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mock (94:10638) with subtle backdrop */}
          <div className="relative flex w-full max-w-[560px] shrink-0 flex-col items-start gap-6 overflow-hidden rounded-[24px] border border-border-default bg-surface-card p-6 shadow-[0_20px_48px_rgba(36,16,31,0.1)] sm:p-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/yumm-assets/dish-thali.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover ring-1 ring-border-brand"
                />
                <p className="text-base font-semibold text-text-brand">Mango Leaf Kitchen</p>
              </div>
              <div className="rounded-full bg-surface-base px-3 py-1">
                <p className="text-xs font-medium text-text-body">This month</p>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1 rounded-[16px] bg-surface-base p-4">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  12,480
                </p>
                <p className="text-xs font-normal text-text-body">Orders</p>
              </div>
              <div className="flex flex-col gap-1 rounded-[16px] bg-surface-base p-4">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  3,214
                </p>
                <p className="text-xs font-normal text-text-body">Guests</p>
              </div>
              <div className="flex flex-col gap-1 rounded-[16px] bg-surface-base p-4">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  891
                </p>
                <p className="text-xs font-normal text-text-body">Reward claims</p>
              </div>
              <div className="flex flex-col gap-1 rounded-[16px] bg-surface-base p-4">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  2,106
                </p>
                <p className="text-xs font-normal text-text-body">Repeat orders</p>
              </div>
              <div className="flex flex-col gap-1 rounded-[16px] bg-surface-base p-4">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  340
                </p>
                <p className="text-xs font-normal text-text-body">Dine in redemptions</p>
              </div>
              <div className="flex flex-col gap-1 rounded-[16px] bg-surface-subtle p-4 ring-1 ring-[#7fd858]/50">
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                  64%
                </p>
                <p className="text-xs font-semibold text-text-brand">Repeat rate</p>
              </div>
            </div>

            <p className="text-xs font-normal text-text-caption">Sample dashboard</p>
          </div>
        </div>
      </section>

      {/* 02 Digital card (94:10664) — with rich transparent card background & progress fill */}
      <section className="bg-surface-subtle px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left loyalty card (94:10665) */}
          <div className="relative flex w-full max-w-[440px] shrink-0 flex-col items-start gap-2 overflow-hidden rounded-[24px] bg-surface-brand p-8 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
              <Image
                src="/yumm-assets/feature-card-2.png"
                alt=""
                width={440}
                height={272}
                className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#381932]/90 via-[#381932]/85 to-[#2a1226]/95" />
            </div>

            <div className="relative z-[1] flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/yumm-assets/dish-thali.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-[#c8f0b4]"
                />
                <p className="text-base font-semibold text-text-on-brand">Mango Leaf Kitchen</p>
              </div>
              <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-[#c8f0b4]">
                Guest card
              </span>
            </div>
            <p className="relative z-[1] font-serif-display text-[72px] leading-[1.2] tracking-[-0.72px] text-text-on-brand">
              160 pts
            </p>
            <p className="relative z-[1] text-base font-normal text-text-on-brand-muted">
              Redeem in chat or at the table
            </p>
            <div className="relative z-[1] flex w-full flex-col gap-2 pt-4">
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-brand-soft">
                <div className="h-full w-[80%] rounded-full bg-[#7fd858]" />
              </div>
              <p className="text-xs font-medium text-[#c8f0b4]">
                40 pts to your next reward (Free Mango Lassi)
              </p>
            </div>
          </div>

          {/* Right copy (94:10674) */}
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Digital card</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  One card per guest, no app
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  Guests earn points after each paid order and keep one wallet across every way they order from you.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                {[
                  "Points after each paid order",
                  "One wallet for delivery, takeaway and dine in",
                  "Lives in WhatsApp, nothing to download",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={24} height={24} />
                    <p className="text-lg font-medium text-text-brand">{pt}</p>
                  </div>
                ))}
              </div>

              <div className="w-full rounded-[12px] border border-dashed border-surface-accent bg-surface-subtle px-5 py-4">
                <p className="text-base font-medium leading-[1.5] text-text-brand">
                  Content needed: name and define the points currency (plan §10 C).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Redeem both ways (94:10692) */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Redeem</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
              Points work in the chat and at the table
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {/* In the chat */}
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card shadow-sm">
              <div className="relative h-[320px] w-full">
                <Image
                  src="/yumm-assets/loyalty-redeem-chat.png"
                  alt="Redeem points in WhatsApp chat"
                  width={548}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-start gap-6 px-8 pb-10 pt-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px] bg-surface-subtle">
                  <Image src="/yumm-assets/icon-message.svg" alt="" width={32} height={32} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                    In the chat
                  </p>
                  <p className="text-base font-normal leading-[1.5] text-text-body">
                    Before paying by UPI, the guest applies points to the order in the same message.
                  </p>
                </div>
              </div>
            </div>

            {/* At the table */}
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card shadow-sm">
              <div className="relative h-[320px] w-full">
                <Image
                  src="/yumm-assets/loyalty-redeem-table.png"
                  alt="Redeem points at the table"
                  width={548}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-start gap-6 px-8 pb-10 pt-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px] bg-surface-subtle">
                  <Image src="/yumm-assets/icon-qr.svg" alt="" width={32} height={32} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-brand">
                    At the table
                  </p>
                  <p className="text-base font-normal leading-[1.5] text-text-body">
                    Dining in, the guest scans the table QR and redeems the same points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Reward calculator (94:10713) */}
      <section
        id="reward-calculator"
        className="scroll-mt-24 bg-surface-subtle px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
      >
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-20">
            <div className="flex flex-1 flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                  <p className="text-base font-medium text-text-brand">Calculator</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
              </div>
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                What will rewards cost you?
              </h2>
            </div>

            <p className="max-w-[440px] text-xl font-normal leading-[1.5] text-text-body">
              Set your numbers. Every output says what it is measured in.
            </p>
          </div>

          <RewardCalculator />
        </div>
      </section>

      {/* 05 Data and consent (94:10802) */}
      <section className="px-5 py-16 sm:px-8 lg:p-20">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Your data</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Your guests’ data stays yours
              </h2>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Clear rules on who sees guest records, how guests say yes or no, and how long anything is kept.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {DATA_CARDS.map((c) => (
              <div
                key={c.title}
                className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-[24px] px-8 pb-10 pt-8"
                style={{
                  backgroundColor: "#24101f",
                  boxShadow: "0 16px 36px rgba(36,16,31,0.16)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                  <Image
                    src={c.bg}
                    alt=""
                    width={360}
                    height={260}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(36,16,31,0.75) 0%, rgba(36,16,31,0.88) 48%, rgba(36,16,31,0.96) 100%)",
                    }}
                  />
                </div>
                <div
                  className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-[12px] shadow-md"
                  style={{ backgroundColor: "#fff3e6" }}
                >
                  <Image src={c.icon} alt="" width={24} height={24} />
                </div>
                <div className="relative z-[1] flex flex-col gap-2">
                  <p
                    className="text-2xl font-semibold leading-[1.2] tracking-[-0.12px]"
                    style={{ color: "#fff3e6" }}
                  >
                    {c.title}
                  </p>
                  <p
                    className="text-base font-normal leading-[1.5]"
                    style={{ color: "#ebd5bf" }}
                  >
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Page CTA (94:10827) */}
      <PageCTA heading="Want every guest on your list?" />
    </div>
  );
}

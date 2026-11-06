import Image from "next/image";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";
import { PricingCalculator } from "@/components/PricingCalculator";

export const metadata = {
  title: "Pricing and economics",
  description:
    "Aggregators charge 28 to 34% and keep the diner. See what direct orders could change for you, after every cost they add.",
};

export default function PricingPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:11179) */}
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Pricing and economics</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-4">
                <h1 className="font-serif-display text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Aggregators charge 28 to 34% and keep the diner
                </h1>
                <Link
                  href="#calculator"
                  className="text-xl font-normal leading-[1.5] text-text-body hover:underline"
                >
                  See what direct orders could change for you, after every cost they add.
                </Link>
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
                  href="#calculator"
                  className="inline-flex items-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
                >
                  Open the calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Right comparison card (94:11189) */}
          <div className="flex w-full max-w-[480px] shrink-0 flex-col items-start gap-4 rounded-[24px] border border-border-default bg-surface-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase leading-[1.5] text-text-caption">
              EXAMPLE · THE SAME ₹500 ORDER
            </p>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Marketplace app */}
              <div className="flex min-h-[284px] flex-col items-start justify-between rounded-[16px] bg-surface-base px-5 py-6">
                <div className="flex w-full flex-col gap-2">
                  <p className="text-base font-semibold text-text-brand">Marketplace app</p>
                  <div className="flex w-full items-start justify-between text-xs">
                    <span className="text-text-body">Commission at 32%</span>
                    <span className="font-semibold text-text-error">−₹160</span>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <p className="text-xs font-normal text-text-body">You keep</p>
                  <p className="font-serif-display text-[48px] leading-[1.2] tracking-[-0.48px] text-text-brand">
                    ₹340
                  </p>
                  <p className="text-xs font-semibold text-text-body">The guest: Theirs</p>
                </div>
              </div>

              {/* Direct on WhatsApp */}
              <div className="flex min-h-[284px] flex-col items-start justify-between rounded-[16px] bg-surface-brand px-5 py-6">
                <div className="flex w-full flex-col gap-2">
                  <p className="text-base font-semibold text-text-on-brand">Direct on WhatsApp</p>
                  <div className="flex w-full items-start justify-between text-xs">
                    <span className="text-text-on-brand-muted">Delivery</span>
                    <span className="font-semibold text-text-on-brand">−₹40</span>
                  </div>
                  <div className="flex w-full items-start justify-between text-xs">
                    <span className="text-text-on-brand-muted">Payment gateway</span>
                    <span className="font-semibold text-text-on-brand">−₹10</span>
                  </div>
                  <div className="flex w-full items-start justify-between text-xs">
                    <span className="text-text-on-brand-muted">Message and sticker</span>
                    <span className="font-semibold text-text-on-brand">−₹3</span>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <p className="text-xs font-normal text-text-on-brand-muted">You keep</p>
                  <p className="font-serif-display text-[48px] leading-[1.2] tracking-[-0.48px] text-text-on-brand">
                    ₹447
                  </p>
                  <p className="text-xs font-semibold text-text-on-brand">The guest: Yours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Calculator (94:11216) */}
      <PricingCalculator />

      {/* 04 Page CTA (94:11301) */}
      <PageCTA heading="Want to run these numbers with us?" />
    </div>
  );
}

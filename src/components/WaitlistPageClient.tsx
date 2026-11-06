"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WaitlistForm, type WaitlistStep } from "./WaitlistForm";

const NEXT_STEPS = [
  {
    num: "1",
    title: "Share four details",
    body: "Name, WhatsApp number, city and business type, under a minute.",
  },
  {
    num: "2",
    title: "Tell us about your orders (optional)",
    body: "Five quick questions so we can plan your setup.",
  },
  {
    num: "3",
    title: "We reach out on WhatsApp",
    body: "[Timing to confirm before launch] Bengaluru and Hyderabad first.",
  },
] as const;

export function WaitlistPageClient() {
  const [step, setStep] = useState<WaitlistStep>("form");

  // 09d All set (answers sent) — 94:11598
  if (step === "done_sent") {
    return (
      <section className="flex flex-col items-center gap-10 px-5 py-24 sm:px-8 lg:px-20 lg:py-40">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary">
            You’re all set
          </h1>
          <p className="max-w-[640px] text-xl font-normal leading-[1.5] text-text-body">
            Thanks for the answers. They help us set up your restaurant before launch. We’ll be in touch on WhatsApp.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
          >
            See pricing
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
          >
            Back to home
            <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
          </Link>
        </div>
      </section>
    );
  }

  // 09d2 On the list (questions skipped) — 94:11744
  if (step === "done_skipped") {
    return (
      <section className="flex flex-col items-center gap-10 px-5 py-24 sm:px-8 lg:px-20 lg:py-40">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary">
            You’re on the list
          </h1>
          <p className="max-w-[640px] text-xl font-normal leading-[1.5] text-text-body">
            Your spot is saved. We’ll be in touch on WhatsApp before launch.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
          >
            See pricing
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
          >
            Back to home
            <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
          </Link>
        </div>
      </section>
    );
  }

  // 09c You're on the list + Optional questions — 94:11543
  if (step === "questions") {
    return (
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start justify-center gap-6 lg:flex-row">
          {/* Left Success Card (94:11544) */}
          <div className="flex w-full flex-col items-center gap-4 rounded-[32px] bg-surface-brand p-8 text-center sm:p-10 lg:w-[580px] lg:shrink-0 lg:self-stretch">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-base">
              <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={32} height={32} />
            </div>
            <h1 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
              You’re on the list
            </h1>
            <p className="max-w-[460px] text-base font-normal leading-[1.5] text-colour-milk-200">
              We’ve sent a confirmation to your WhatsApp. Our team will reach out [timing to confirm]. Bengaluru and Hyderabad launch first.
            </p>
            <Link
              href="/#how-it-works"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-surface-base px-5 py-3 text-base font-medium text-text-brand transition-opacity hover:opacity-95"
            >
              See how it works
              <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
            </Link>
          </div>

          {/* Right Optional Questions Card (94:11550) */}
          <WaitlistForm variant="page" onStepChange={setStep} />
        </div>
      </section>
    );
  }

  // 09, 09a, 09b, 09e, 09f — Hero + short form (94:11396)
  return (
    <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-16">
      <div className="page-max flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
        {/* Left copy + What happens next (94:11397) */}
        <div className="flex flex-1 flex-col items-start gap-6 lg:pt-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
              <p className="text-base font-medium text-text-brand">
                Bengaluru and Hyderabad first
              </p>
            </div>
            <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
          </div>

          <div className="flex w-full flex-col items-start gap-10">
            <div className="flex w-full flex-col items-start gap-4">
              <h1 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Join the waitlist
              </h1>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Joining means we’ll set up WhatsApp ordering, packaging QR and rewards for your restaurant before launch, with launch offers for early kitchens. No onboarding fee, no subscription, no commission.
              </p>
            </div>

            {/* What happens next card (94:11403) */}
            <div className="flex w-full flex-col items-start gap-4 rounded-[28px] bg-surface-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.72px] text-text-accent">
                WHAT HAPPENS NEXT
              </p>

              {NEXT_STEPS.map((st) => (
                <div key={st.num} className="flex w-full items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[18px] bg-surface-subtle">
                    <span className="text-base font-medium text-text-brand">{st.num}</span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-xl font-semibold leading-[1.2] text-text-primary">
                      {st.title}
                    </p>
                    <p className="text-base font-normal leading-[1.5] text-text-body">{st.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Short Form (94:11423) */}
        <WaitlistForm variant="page" onStepChange={setStep} />
      </div>
    </section>
  );
}

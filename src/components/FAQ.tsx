"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

const ITEMS = [
  {
    q: "What does it cost?",
    a: "No onboarding fee, no subscription and no commission on orders. Campaign credits are optional and paid only when you broadcast a campaign. Delivery partner, payment gateway and printing costs may still apply, the pricing calculator lists them.",
  },
  {
    q: "How does YUMM make money?",
    a: "We charge only for optional campaign credits when you choose to broadcast to guests. Your order revenue and guest relationships stay yours — there is no take rate on the ticket.",
  },
  {
    q: "Whose WhatsApp number do guests message?",
    a: "Guests message your business on WhatsApp. The conversation shows your restaurant name and branding; YUMM powers the ordering and loyalty flows behind the scenes.",
  },
  {
    q: "How long does setup take?",
    a: "Most kitchens go live in a few days once menu, QR artwork and WhatsApp Business details are ready. Your onboarding specialist walks you through each step.",
  },
  {
    q: "Who delivers the order?",
    a: "You choose: your in-house fleet, a partner network, or a mix. Status updates can flow back to the same WhatsApp thread the guest used to order.",
  },
  {
    q: "What about guest data and consent?",
    a: "Guests opt in by messaging you on WhatsApp. You retain first-party contact and order history for remarketing, subject to your privacy policy and applicable law.",
  },
  {
    q: "Which cities are first?",
    a: "We are opening the waitlist for Bengaluru and Hyderabad first, then expanding to more cities based on partner readiness.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-surface-base px-4 py-20 sm:px-8 lg:px-20 lg:py-32">
      <div className="page-max flex flex-col gap-12 lg:flex-row lg:gap-20">
        <div className="max-w-[400px] shrink-0">
          <div className="flex flex-col items-start gap-2">
            <p className="flex items-center gap-2 text-base font-medium text-text-brand">
              <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
              Straight answers
            </p>
            <div className="h-[3px] w-[144px] rounded-sm bg-surface-brand" />
          </div>
          <h2 className="mt-6 font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-tight tracking-[-0.02em] text-text-brand">
            Questions owners ask
          </h2>
          <p className="mt-4 max-w-[340px] text-base leading-relaxed text-text-body">
            Anything else? Write to partners@yumm.in or call +91 94401 52021.
          </p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={cn(
                  "flex w-full flex-col gap-3 rounded-3xl border border-border-default px-7 py-6 text-left transition-colors",
                  isOpen ? "bg-surface-card" : "bg-surface-base hover:bg-surface-subtle/60",
                )}
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="text-xl font-semibold leading-snug text-text-brand">{item.q}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-[18px]",
                      isOpen ? "bg-surface-brand" : "bg-surface-subtle",
                    )}
                  >
                    <Image
                      src={isOpen ? "/yumm-assets/faq-minus.svg" : "/yumm-assets/faq-plus.svg"}
                      alt=""
                      width={18}
                      height={18}
                      className={isOpen ? "brightness-0 invert" : ""}
                    />
                  </span>
                </div>
                {isOpen ? <p className="text-base leading-relaxed text-text-body">{item.a}</p> : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function EconomicsTeaser() {
  const [gmv, setGmv] = useState(300000);
  const [comm, setComm] = useState(30);

  const aggregatorCut = Math.round((gmv * comm) / 100);

  return (
    <section id="economics" className="scroll-mt-24 bg-surface-base px-5 pb-16 pt-10 sm:px-8 lg:px-20 lg:pb-32 lg:pt-10">
      <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col items-start gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
              <p className="text-base font-medium text-text-brand">Pricing</p>
            </div>
            <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
          </div>

          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-4">
              <Link href="/calculator">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  See what you keep
                </h2>
              </Link>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Aggregators charge 28 to 34% and keep the diner. Put in your own numbers to see the difference, the full calculator also counts delivery, payment, WhatsApp message, printing and campaign costs, because no commission doesn’t mean no cost.
              </p>
            </div>

            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-full bg-surface-brand px-5 py-3 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
            >
              Open the pricing calculator
              <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={18} height={18} />
            </Link>
          </div>
        </div>

        {/* Right Calculator Card (94:10167) */}
        <div className="flex w-full flex-1 flex-col items-start gap-5 rounded-[32px] bg-surface-card p-6 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.72px] text-text-accent">
            YOUR MONTH
          </p>

          <div className="flex w-full flex-col gap-2">
            <p className="text-base font-medium text-text-primary">Monthly delivery sales (GMV)</p>
            <div className="flex h-[52px] w-full items-center justify-between gap-4 rounded-[12px] border border-border-default bg-surface-base px-4">
              <p className="text-xl font-semibold leading-[1.2] text-text-primary">
                ₹{gmv.toLocaleString("en-IN")}
              </p>
              <input
                type="range"
                min={50000}
                max={1000000}
                step={25000}
                value={gmv}
                onChange={(e) => setGmv(Number(e.target.value))}
                aria-label="Monthly delivery sales"
                className="w-[140px] cursor-pointer accent-surface-brand"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <p className="text-base font-medium text-text-primary">Aggregator commission</p>
            <div className="flex h-[52px] w-full items-center justify-between gap-4 rounded-[12px] border border-border-default bg-surface-base px-4">
              <p className="text-xl font-semibold leading-[1.2] text-text-primary">{comm}%</p>
              <input
                type="range"
                min={15}
                max={40}
                step={1}
                value={comm}
                onChange={(e) => setComm(Number(e.target.value))}
                aria-label="Aggregator commission"
                className="w-[140px] cursor-pointer accent-surface-brand"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col items-start gap-2 rounded-[20px] bg-surface-subtle p-5">
              <p className="text-base font-medium text-text-primary">Aggregator cut</p>
              <p className="font-serif-display text-[56px] leading-[1.2] tracking-[-0.56px] text-text-brand">
                ₹{aggregatorCut.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-[20px] bg-surface-brand p-5 text-text-on-brand">
              <p className="text-base font-medium">YUMM commission</p>
              <p className="font-serif-display text-[56px] leading-[1.2] tracking-[-0.56px]">₹0</p>
            </div>
          </div>

          <p className="text-base font-normal leading-[1.5] text-text-body">
            Commission only. Delivery fees, payment gateway charges, WhatsApp marketing messages, sticker printing and campaign credits are added on the full calculator.
          </p>
        </div>
      </div>
    </section>
  );
}

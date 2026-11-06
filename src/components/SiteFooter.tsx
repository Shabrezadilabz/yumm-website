import Link from "next/link";
import { YummLogo } from "./YummLogo";

export function SiteFooter() {
  return (
    <footer className="bg-surface-brand px-5 py-16 text-text-on-brand sm:px-8 lg:p-20">
      <div className="page-max flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-8">
          <div className="flex max-w-[320px] flex-col gap-4">
            <YummLogo variant="milk" href={null} />
            <p className="text-base font-normal leading-normal text-colour-milk-200">
              WhatsApp ordering, loyalty and campaigns for restaurants. Every order can lead to the next one.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.72px] text-text-on-brand">Product</p>
              <Link href="/ordering" className="text-base font-normal text-text-on-brand hover:underline">
                WhatsApp ordering
              </Link>
              <Link href="/packaging" className="text-base font-normal text-text-on-brand hover:underline">
                Packaging QR
              </Link>
              <Link href="/loyalty" className="text-base font-normal text-text-on-brand hover:underline">
                Loyalty &amp; CRM
              </Link>
              <Link href="/campaigns" className="text-base font-normal text-text-on-brand hover:underline">
                Campaigns
              </Link>
              <Link href="/delivery" className="text-base font-normal text-text-on-brand hover:underline">
                Delivery
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.72px] text-text-on-brand">Company</p>
              <Link href="/#how-it-works" className="text-base font-normal text-text-on-brand hover:underline">
                How it works
              </Link>
              <Link href="/pricing" className="text-base font-normal text-text-on-brand hover:underline">
                Pricing
              </Link>
              <Link href="/#faq" className="text-base font-normal text-text-on-brand hover:underline">
                FAQ
              </Link>
              <Link href="/waitlist" className="text-base font-normal text-text-on-brand hover:underline">
                Join the waitlist
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.72px] text-text-on-brand">Contact</p>
              <a href="mailto:partners@yumm.in" className="text-base font-normal text-text-on-brand hover:underline">
                partners@yumm.in
              </a>
              <a href="tel:+919440152021" className="text-base font-normal text-text-on-brand hover:underline">
                +91 94401 52021
              </a>
              <p className="text-base font-normal text-text-on-brand">Bengaluru · Hyderabad</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.72px] text-text-on-brand">Legal</p>
              <Link href="/privacy" className="text-base font-normal text-text-on-brand hover:underline">
                Privacy policy
              </Link>
              <Link href="/terms" className="text-base font-normal text-text-on-brand hover:underline">
                Terms of use
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-surface-brand-soft" />

        <div className="flex flex-col items-start justify-between gap-4 text-base font-normal text-colour-milk-200 sm:flex-row">
          <p>No onboarding fee · No subscription · No commission. Campaign credits are optional and paid per broadcast.</p>
          <p className="shrink-0">© 2026 YUMM</p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-surface-base px-5 pb-16 pt-8 sm:px-8 lg:px-20 lg:pb-24 lg:pt-12">
      <div className="page-max flex flex-col items-center gap-7">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
              <p className="text-base font-medium text-text-brand">
                For cloud kitchens, takeaway and dine in restaurants
              </p>
            </div>
            <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex max-w-[928px] flex-col items-center gap-4">
              <h1 className="font-serif-display text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Turn orders into regulars
              </h1>
              <p className="max-w-[620px] text-xl font-normal leading-[1.5] text-text-body">
                Guests scan the QR on your packaging, order and pay by UPI inside WhatsApp, and stay yours for rewards and the next order. No commission on the ticket.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/waitlist"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95 sm:w-auto"
              >
                Join the waitlist
                <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50 sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>

        {/* Hero visual · Pocket Diner (94:9988) */}
        <div className="relative w-full max-w-[1120px]">
          {/* Desktop 1120x560 stage */}
          <div className="relative hidden h-[560px] w-full overflow-hidden lg:block">
            <div className="absolute left-0 top-[220px] h-[340px] w-full rounded-[32px] bg-surface-subtle" aria-hidden />
            <div className="absolute left-[296px] top-[28px] h-[685px] w-[540px] shadow-[0px_16px_40px_0px_rgba(36,16,31,0.16)]">
              <Image
                src="/yumm-assets/hero-phones.png"
                alt="Guests browse restaurants and offers in WhatsApp"
                width={540}
                height={685}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            {/* Card · right in WhatsApp */}
            <div className="absolute left-[48px] top-[80px] flex w-[200px] flex-col items-center gap-4 rounded-[20px] bg-surface-card px-6 py-8 text-center shadow-[0px_12px_32px_0px_rgba(36,16,31,0.1)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-surface-subtle">
                <Image src="/yumm-assets/icon-whatsapp.svg" alt="" width={24} height={24} />
              </div>
              <p className="font-serif-display text-[32px] leading-[1.2] text-text-brand">
                RIGHT IN
                <br />
                WHATSAPP
              </p>
              <div className="rounded-full bg-surface-base px-3 py-2">
                <p className="text-xs font-semibold leading-[1.5] text-text-body">No app to install</p>
              </div>
            </div>

            {/* Card · scan the parcel */}
            <div className="absolute left-[904px] top-[24px] flex w-[184px] flex-col items-center gap-4 rounded-[20px] bg-surface-card px-6 py-8 text-center shadow-[0px_12px_32px_0px_rgba(36,16,31,0.1)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-surface-subtle">
                <Image src="/yumm-assets/icon-scan.svg" alt="" width={24} height={24} />
              </div>
              <p className="font-serif-display text-[32px] leading-[1.2] text-text-brand">
                SCAN THE
                <br />
                PARCEL
              </p>
            </div>

            {/* Card · keep every guest */}
            <div className="absolute left-[920px] top-[352px] flex w-[184px] flex-col items-center gap-4 rounded-[20px] bg-surface-card px-6 py-8 text-center shadow-[0px_12px_32px_0px_rgba(36,16,31,0.1)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-surface-subtle">
                <Image src="/yumm-assets/icon-percent.svg" alt="" width={24} height={24} />
              </div>
              <p className="font-serif-display text-[32px] leading-[1.2] text-text-brand">
                KEEP EVERY
                <br />
                GUEST
              </p>
            </div>

            {/* Stat 1: bottom-left (94:10015) */}
            <div className="absolute bottom-[14px] left-[48px] flex items-center gap-3 whitespace-nowrap">
              <p className="font-serif-display text-[72px] leading-[1.2] tracking-[-0.72px] text-text-brand">
                3x
              </p>
              <div className="text-base font-normal leading-[1.5] text-text-body">
                <p>more orders</p>
                <p>and presence</p>
              </div>
            </div>

            {/* Stat 2: middle-right (94:10016) */}
            <div className="absolute bottom-[238px] right-[25px] flex items-center gap-3 whitespace-nowrap">
              <p className="font-serif-display text-[72px] leading-[1.2] tracking-[-0.72px] text-text-brand">
                100%
              </p>
              <div className="text-base font-normal leading-[1.5] text-text-body">
                <p>of guest data</p>
                <p>stays with you</p>
              </div>
            </div>
          </div>

          {/* Mobile / Tablet stage (94:7087) */}
          <div className="flex flex-col gap-6 lg:hidden">
            <div className="relative h-[440px] w-full overflow-hidden">
              <div className="absolute left-0 right-0 top-[160px] h-[280px] rounded-[24px] bg-surface-subtle" aria-hidden />
              <div className="absolute left-1/2 top-[56px] w-[330px] -translate-x-1/2">
                <Image
                  src="/yumm-assets/hero-phones.png"
                  alt="Guests browse restaurants and offers in WhatsApp"
                  width={330}
                  height={419}
                  className="h-auto w-full drop-shadow-[0_16px_40px_rgba(36,16,31,0.16)]"
                  priority
                />
              </div>
              <div className="absolute left-0 top-[200px] flex w-[125px] flex-col items-center rounded-[16px] bg-surface-card px-3.5 py-5 text-center shadow-[0_12px_32px_rgba(36,16,31,0.1)]">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-surface-subtle">
                  <Image src="/yumm-assets/icon-whatsapp.svg" alt="" width={15} height={15} />
                </div>
                <p className="mt-2.5 font-serif-display text-[20px] leading-[1.2] text-text-brand">
                  RIGHT IN
                  <br />
                  WHATSAPP
                </p>
              </div>
              <div className="absolute right-0 top-[96px] flex w-[115px] flex-col items-center rounded-[16px] bg-surface-card px-3.5 py-5 text-center shadow-[0_12px_32px_rgba(36,16,31,0.1)]">
                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-surface-subtle">
                  <Image src="/yumm-assets/icon-scan.svg" alt="" width={15} height={15} />
                </div>
                <p className="mt-2.5 font-serif-display text-[20px] leading-[1.2] text-text-brand">
                  SCAN THE
                  <br />
                  PARCEL
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-border-default" />
            <div className="flex flex-col gap-4 px-5 sm:flex-row sm:justify-around">
              <div className="flex items-center gap-3">
                <p className="font-serif-display text-[64px] leading-[1.2] tracking-[-0.64px] text-text-brand">3x</p>
                <div className="text-base font-normal leading-[1.5] text-text-body">
                  <p>more orders</p>
                  <p>and presence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-serif-display text-[64px] leading-[1.2] tracking-[-0.64px] text-text-brand">100%</p>
                <div className="text-base font-normal leading-[1.5] text-text-body">
                  <p>of guest data</p>
                  <p>stays with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

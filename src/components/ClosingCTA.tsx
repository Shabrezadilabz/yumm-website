import { WaitlistForm } from "./WaitlistForm";

export function ClosingCTA() {
  return (
    <section id="waitlist-cta" className="scroll-mt-24 bg-surface-base px-5 pb-16 sm:px-8 lg:px-20 lg:pb-32">
      <div className="page-max">
        <div className="flex flex-col items-center gap-12 overflow-hidden rounded-[48px] bg-surface-brand px-6 py-12 sm:px-12 lg:flex-row lg:gap-14 lg:px-[72px] lg:py-20">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                <p className="text-base font-medium text-text-on-brand">
                  Launching in Bengaluru &amp; Hyderabad
                </p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
            </div>

            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                  Join the waitlist
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-colour-milk-200">
                  Four details, under a minute. Early restaurants get launch offers, and up to 3x more orders and presence starts with the next parcel.
                </p>
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap">
                <p className="font-serif-display text-[72px] leading-[1.2] tracking-[-0.72px] text-text-on-brand">
                  3x
                </p>
                <div className="text-base font-normal leading-[1.5] text-colour-milk-200">
                  <p>more orders</p>
                  <p>and presence</p>
                </div>
              </div>
            </div>
          </div>

          <WaitlistForm variant="home" />
        </div>
      </div>
    </section>
  );
}

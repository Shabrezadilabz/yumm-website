import Link from "next/link";

export function RestaurantProblem() {
  return (
    <section className="bg-surface-base px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
      <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="flex flex-1 flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">The leak</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                    The guest isn’t yours
                  </h2>
                  <p className="text-xl font-normal leading-[1.5] text-text-body">
                    On marketplace apps, every repeat order runs through someone else, and so does every guest.
                  </p>
                </div>

                <ul className="flex flex-col gap-3 py-2">
                  {[
                    "Commission on every delivery",
                    "Phone numbers you never see",
                    "Your guest, their promotion",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-base font-medium text-text-brand">
                      <span className="h-2 w-2 shrink-0 rounded-[4px] bg-surface-accent" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-base font-semibold text-text-brand hover:underline"
              >
                <span>See what commission costs you</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Receipt card (94:10043) */}
        <div className="flex w-full max-w-[480px] shrink-0 flex-col items-start gap-4 rounded-[16px] border border-border-default bg-surface-card p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase leading-[1.5] text-text-caption">
            EXAMPLE · ONE ₹500 DELIVERY ON A MARKETPLACE APP
          </p>
          <div className="flex w-full flex-col gap-[25px]">
            <div className="flex w-full flex-col gap-4">
              <div className="flex items-center justify-between gap-4 text-text-brand">
                <span className="text-base font-normal">Order value</span>
                <span className="font-serif-display text-[32px] leading-[1.2]">₹500</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-normal text-text-brand">Commission at 32%</span>
                <span className="font-serif-display text-[32px] leading-[1.2] text-text-error">
                  −₹160
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 text-base">
                <span className="font-normal text-text-brand">Guest’s phone number</span>
                <span className="font-medium text-text-body">Masked</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-base">
                <span className="font-normal text-text-brand">Their next order</span>
                <span className="font-medium text-text-body">Promoted elsewhere</span>
              </div>
            </div>

            <div className="h-px w-full bg-surface-brand" />

            <div className="flex w-full flex-col gap-1 text-text-brand">
              <p className="text-base font-semibold">You keep</p>
              <p className="font-serif-display text-[clamp(2.25rem,4vw,3rem)] font-normal leading-[1.2] tracking-[-0.48px]">
                ₹340 and no guest
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

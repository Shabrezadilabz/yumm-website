import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  backdropSrc?: string;
};

export function PageCTA({
  eyebrow = "Join the waitlist",
  heading,
  body = "Four details, under a minute. Early restaurants get launch offers.",
  buttonLabel = "Join the waitlist",
  buttonHref = "/waitlist",
  backdropSrc = "/yumm-assets/packaging-hero.png",
}: Props) {
  return (
    <section className="bg-surface-base px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
      <div className="page-max">
        <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[32px] bg-surface-brand px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
          {/* Transparent engaging background photo */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <Image
              src={backdropSrc}
              alt=""
              width={1120}
              height={500}
              className="h-full w-full object-cover opacity-18 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#381932]/90 via-[#381932]/85 to-[#381932]/95" />
          </div>

          <div className="relative z-[1] flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-on-brand">{eyebrow}</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="max-w-[720px] font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                {heading}
              </h2>
              {body ? (
                <p className="max-w-[560px] text-xl font-normal leading-[1.5] text-text-on-brand-muted">
                  {body}
                </p>
              ) : null}
            </div>
          </div>

          <Link
            href={buttonHref}
            className="relative z-[1] inline-flex items-center gap-3 rounded-full bg-surface-base px-7 py-4 text-base font-medium text-text-brand transition-opacity hover:opacity-95"
          >
            {buttonLabel}
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

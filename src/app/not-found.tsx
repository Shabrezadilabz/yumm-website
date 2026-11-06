import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-surface-base">
      {/* 01 Page not found (94:11709) */}
      <section className="flex flex-col items-center gap-10 px-5 py-24 sm:px-8 lg:px-20 lg:py-40">
        <p className="text-center font-serif-display text-[clamp(4rem,8vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-accent">
          404
        </p>
        <h1 className="text-center font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary">
          This page isn’t on the menu
        </h1>
        <p className="max-w-[640px] text-center text-xl font-normal leading-[1.5] text-text-body">
          The link may be old or mistyped. Head back home, or join the waitlist while you’re here.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
          >
            Back to home
            <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
          </Link>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
          >
            Join the waitlist
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

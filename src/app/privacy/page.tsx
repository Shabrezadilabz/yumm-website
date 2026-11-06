import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy policy",
  description: "Privacy policy for YUMM.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Privacy policy (94:11720) */}
      <section className="flex flex-col items-center px-5 py-20 sm:px-8 lg:px-20 lg:py-40">
        <article className="flex w-full max-w-[760px] flex-col items-start gap-6">
          <h1 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary">
            Privacy policy
          </h1>
          <p className="text-xs font-normal leading-[1.5] text-text-caption">
            Last updated: date needed
          </p>

          <div className="flex w-full flex-col items-start gap-2 rounded-[16px] border-[1.5px] border-dashed border-surface-accent bg-surface-subtle p-6 text-base">
            <p className="font-semibold leading-[1.2] text-text-primary">Content needed</p>
            <p className="font-normal leading-[1.5] text-text-body">
              Final privacy policy text from YUMM. Layout: H2 section titles (Title/24) with Body/M paragraphs, 760 wide column, 24 gap between blocks.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full py-3 pr-5 text-base font-medium text-text-brand hover:underline"
          >
            Back to home
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
          </Link>
        </article>
      </section>
    </div>
  );
}

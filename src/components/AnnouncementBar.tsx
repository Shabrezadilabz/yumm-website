import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-surface-brand px-3 py-2 text-center text-base text-text-on-brand sm:gap-3 sm:px-6">
      <p className="font-normal">
        No onboarding fee · No subscription · No commission. Join the waitlist for launch offers.
      </p>
      <Link href="/waitlist" className="font-medium underline-offset-2 hover:underline">
        Join now
      </Link>
    </div>
  );
}

import { WaitlistPageClient } from "@/components/WaitlistPageClient";

export const metadata = {
  title: "Join the waitlist",
  description:
    "Joining means we’ll set up WhatsApp ordering, packaging QR and rewards for your restaurant before launch, with launch offers for early kitchens.",
};

export default function WaitlistPage() {
  return (
    <div className="bg-surface-base">
      <WaitlistPageClient />
    </div>
  );
}

import { PageCTA } from "@/components/PageCTA";
import { PricingCalculator } from "@/components/PricingCalculator";

export const metadata = {
  title: "Pricing calculator",
  description:
    "Set your orders and how many move direct. See what you stop paying, what direct orders cost, and what is left.",
};

export default function CalculatorPage() {
  return (
    <div className="bg-surface-base">
      {/* 02 Calculator (94:11306) */}
      <PricingCalculator />

      {/* 03 Page CTA (94:11391) */}
      <PageCTA heading="Want to run these numbers with us?" />
    </div>
  );
}

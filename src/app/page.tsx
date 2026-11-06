import { ClosingCTA } from "@/components/ClosingCTA";
import { EconomicsTeaser } from "@/components/EconomicsTeaser";
import { FAQ } from "@/components/FAQ";
import { FeatureOverview } from "@/components/FeatureOverview";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { RestaurantProblem } from "@/components/RestaurantProblem";
import { TrustStrip } from "@/components/TrustStrip";
import { UseCases } from "@/components/UseCases";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <RestaurantProblem />
      <HowItWorks />
      <WhatsAppDemo />
      <FeatureOverview />
      <EconomicsTeaser />
      <UseCases />
      <FAQ />
      <ClosingCTA />
    </>
  );
}

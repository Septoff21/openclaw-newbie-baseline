import HeroSection from "@/components/HeroSection";
import TierSection from "@/components/TierSection";
import HowItWorks from "@/components/HowItWorks";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />
      <TierSection />
      <HowItWorks />
      <QuickLinks />
    </div>
  );
}

import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingPlans from "@/components/home/PricingPlans";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import YourGoToEmailVerificationTool from "@/components/home/YourGoToEmailVerificationTool";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <YourGoToEmailVerificationTool />
      <WhatWeDo />
      <HowItWorks />
      <WhyChooseUs />
      <PricingPlans />
    </main>
  );
}

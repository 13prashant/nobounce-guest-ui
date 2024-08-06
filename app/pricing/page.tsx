import PricingPlans from "@/components/pricing/PricingPlans";

export default function Pricing() {
  return (
    <section className="container">
      <h1 className="text-3xl md:text-7xl font-semibold mb-3 tracking-wide duration-300">
        Pricing <span className="text-secondary">Plans</span>
      </h1>
      <PricingPlans />
    </section>
  );
}

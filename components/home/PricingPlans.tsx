import { Check, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import pricingPlans from "./helpers";
import { cn } from "@/lib/utils";

export default function PricingPlans() {
  return (
    <section className="container">
      <h1 className="text-3xl font-semibold mb-16 text-center">
        Pricing Plans
      </h1>
      <div className="flex justify-around flex-wrap gap-10">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn("relative border rounded-md px-8 py-14 max-w-sm", {
              "border-primary border-2": plan.name === "Basic",
            })}
          >
            {plan.name === "Basic" && (
              <span className="absolute top-5 right-5 bg-secondary rounded-xl px-2 text-sm text-white">
                Best Seller
              </span>
            )}
            <h5 className="text-2xl font-semibold">{plan.name}</h5>
            <p className="text-muted-foreground my-2">{plan.description}</p>
            <div className="flex items-center gap-1 my-5">
              <h2 className="text-4xl font-semibold">{plan.price}</h2>
              <span>/month</span>
            </div>
            <Button className="w-full my-5">
              {plan.name === "Pro" ? "Contact Us" : "Get started"}{" "}
              <MoveRight className="ml-2" />
            </Button>
            <div className="flex flex-col gap-2 text-sm">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="rounded-full p-1 bg-primary/30">
                    <Check className="text-primary" size={10} />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

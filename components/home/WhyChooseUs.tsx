import Image from "next/image";
import { whyChooseUs } from "./helpers";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
  return (
    <section className="container text-center">
      <h1 className="text-3xl font-semibold mb-16">Why Choose Us?</h1>
      <div className="flex flex-col gap-10 duration-300 justify-center">
        {whyChooseUs.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex justify-center items-center gap-4 duration-300",
              {
                "md:flex-row-reverse": item.id % 2,
              }
            )}
          >
            <Image
              className="md:hidden"
              src={`/svg/${item.icon}.svg`}
              width={100}
              height={100}
              alt={item.title}
            />
            <Image
              className="hidden md:block"
              src={`/svg/${item.icon}.svg`}
              width={250}
              height={250}
              alt={item.title}
            />
            <div
              className={cn(
                "text-sm md:text-lg max-w-md text-left duration-300",
                {
                  "md:text-right": item.id % 2,
                }
              )}
            >
              <h4 className="font-semibold text-primary-foreground">
                {item.title}
              </h4>
              <p className="text-primary-foreground/70 text-xs md:text-sm duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

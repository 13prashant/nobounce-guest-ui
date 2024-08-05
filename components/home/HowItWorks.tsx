import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { howItWorks } from "./helpers";

export default function HowItWorks() {
  return (
    <section className="bg-muted">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 duration-300 text-center md:text-left">
        <Image
          src="/svg/how-it-works.svg"
          width={250}
          height={250}
          alt="Email verification tool"
        />
        <div className="max-w-4xl">
          <h1 className="text-3xl font-semibold mb-2">How It Works</h1>
          <p>Using Nobounce Mail is as easy as 1-2-3.</p>
          <div className="mt-5 flex flex-col gap-2 text-left">
            {howItWorks.map((item) => (
              <div key={item.id} className="flex gap-2">
                <CircleCheck className="w-10 text-primary" />
                <span className="text-muted-foreground">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

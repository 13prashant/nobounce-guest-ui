import { MoveRight } from "lucide-react";
import { AuroraBackground } from "../common/AuroraBackground";
import { Button } from "../ui/button";
import WobbleCard from "../common/WobbleCard";

export default function HeroSection() {
  return (
    <AuroraBackground>
      <div className="container">
        <div className="flex flex-col gap-4 justify-center items-center text-center max-w-5xl mx-auto">
          <p className="border py-1 pl-3 pr rounded-2xl">
            We are{" "}
            <span className="bg-primary rounded-2xl py-1 px-2 text-primary-foreground">
              Nobounce
            </span>
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide duration-300">
            where precision meets efficiency, high bounce rates,{" "}
            <span className="font-normal">
              and wasted marketing efforts are kicked out of the door!
            </span>
          </h1>
          <WobbleCard containerClassName="mt-5 bg-gradient-to-r from-accent to-primary">
            <div className="text-left flex flex-col gap-4 p-10">
              <p className="font-bold text-lg">
                Nobounce email validation service
              </p>
              <p className="text-accent-foreground">
                is set out to transform your email campaigns by ensuring you
                only send emails to valid, active addresses. <br /> Ready to say
                goodbye to invalid emails and hello to higher engagement and
                conversion rates? <br /> You are in the right place.
              </p>
              <Button size="lg" className="w-full md:w-fit duration-300 z-50">
                Get started <MoveRight className="ml-2" />
              </Button>
            </div>
          </WobbleCard>
        </div>
      </div>
    </AuroraBackground>
  );
}

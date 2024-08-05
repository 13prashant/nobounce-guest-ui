import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
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
          <div className="bg-accent p-10 rounded-md mt-5 text-left flex flex-col gap-4 bg-gradient-to-r from-accent to-primary w-full">
            <p className="font-bold text-lg">
              Nobounce email validation service
            </p>
            <p className="text-accent-foreground">
              is set out to transform your email campaigns by ensuring you only
              send emails to valid, active addresses. <br /> Ready to say
              goodbye to invalid emails and hello to higher engagement and
              conversion rates? <br /> You are in the right place.
            </p>
            <Button size="lg" className="w-full md:w-fit duration-300">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

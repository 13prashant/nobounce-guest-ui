import AboutUsSection from "@/components/about-us/AboutUsSection";
import { aboutUs } from "@/components/about-us/helpers";

export default function AboutUs() {
  const { ourStory, ourVision, ourValues } = aboutUs;

  return (
    <main>
      <AboutUsSection />
      <section className="container max-w-6xl">
        <div className="flex flex-col gap-4">
          <div className="border bg-primary p-10 rounded-md">
            <div className="flex gap-2 items-center text-left">
              <div className="text-primary-foreground/50 bg-primary rounded-md p-1">
                {ourStory.icon}
              </div>
              <h4 className="font-semibold text-primary-foreground">
                {ourStory.title}
              </h4>
            </div>
            <hr className="my-3" />
            <p className="text-primary-foreground/70">{ourStory.description}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full duration-300">
            <div className="border bg-primary p-10 rounded-md w-full">
              <div className="flex gap-2 items-center text-left">
                <div className="text-primary-foreground/50 bg-primary rounded-md p-1">
                  {ourVision.icon}
                </div>
                <h4 className="font-semibold text-primary-foreground">
                  {ourVision.title}
                </h4>
              </div>
              <hr className="my-3" />
              <p className="text-primary-foreground/70">
                {ourVision.description}
              </p>
            </div>

            <div className="border bg-gradient-to-r from-secondary to-primary p-10 rounded-md w-full">
              <div className="flex gap-2 items-center text-left">
                <div className="text-secondary-foreground/50 bg-primary rounded-md p-1">
                  {ourValues.icon}
                </div>
                <h4 className="font-semibold text-secondary-foreground">
                  {ourValues.title}
                </h4>
              </div>
              <hr className="my-3" />
              <p className="text-secondary-foreground/70">
                <strong>Accuracy: </strong>
                {ourValues.description.Accuracy}
              </p>
              <br />
              <p className="text-secondary-foreground/70">
                <strong>Customer Satisfaction: </strong>
                {ourValues.description["Customer Satisfaction"]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

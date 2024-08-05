import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 duration-300">
        <div className="max-w-2xl flex flex-col gap-10">
          <div className="text-center md:text-left duration-300">
            <h1 className="text-3xl md:text-7xl font-semibold mb-3 tracking-wide duration-300">
              Here at <br />
              <span className="text-secondary">Nobounce</span> Mail,
            </h1>
            <p className="text-muted-foreground md:text-lg">
              we believe that every email you send should reach its intended
              recipient. We started out with the mission to enhance email
              marketing efficiency, and specialize in providing email validation
              services that help businesses reduce bounce rates and improve
              deliverability.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/svg/about-us.svg"
            width={500}
            height={500}
            alt="Email verification tool"
          />
        </div>
      </div>
    </section>
  );
}

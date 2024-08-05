import {
  ADDRESS,
  EMAIL_ADDRESS,
  FACEBOOK_LINK,
  LINKEDIN_LINK,
  PHONE_NUMBER,
  TWITTER_LINK,
} from "@/lib/config";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main>
      <section className="container">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 duration-300">
          <div className="max-w-2xl flex flex-col gap-10">
            <div className="text-center md:text-left duration-300">
              <h1 className="text-3xl md:text-7xl font-semibold mb-3 tracking-wide duration-300">
                We would love to
                <br />
                <span className="text-secondary">here</span> from you.
              </h1>
              <p className="text-muted-foreground md:text-lg">
                If there are questions about our email services, or you need
                support with our email verification tool, or do you want to
                learn more about how we can help your business, so don’t
                hesitate to reach out.
              </p>

              <div className="flex flex-col gap-2 my-10">
                <div className="flex gap-4">
                  <Mail className="text-primary" />
                  {EMAIL_ADDRESS}
                </div>
                <div className="flex gap-4">
                  <Phone className="text-primary" />
                  {PHONE_NUMBER}
                </div>
                <div className="flex gap-4">
                  <MapPinHouse className="text-primary" />
                  {ADDRESS}
                </div>
              </div>

              <h5 className="text-sm md:text-xl mb-2 duration-300 font-semibold">
                Stay up to date with our social handles
              </h5>
              <div className="flex gap-4 justify-center md:justify-start duration-300">
                <Link
                  href={FACEBOOK_LINK}
                  className="hover:scale-105 duration-300"
                >
                  <Image
                    src="/svg/facebook.svg"
                    width={30}
                    height={30}
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href={TWITTER_LINK}
                  className="hover:scale-105 duration-300"
                >
                  <Image
                    src="/svg/twitter.svg"
                    width={30}
                    height={30}
                    alt="Twitter"
                  />
                </Link>
                <Link
                  href={LINKEDIN_LINK}
                  className="hover:scale-105 duration-300"
                >
                  <Image
                    src="/svg/linkedin.svg"
                    width={30}
                    height={30}
                    alt="Linkedin"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-10 md:mb-0 duration-300">
            <Image
              src="/svg/contact-us.svg"
              width={500}
              height={500}
              alt="Contact us"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary"></section>
    </main>
  );
}

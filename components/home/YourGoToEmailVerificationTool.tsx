import Image from "next/image";

export default function YourGoToEmailVerificationTool() {
  return (
    <section className="bg-muted">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 duration-300 text-center md:text-left">
        <Image
          src="/svg/email-verification-tool.svg"
          width={250}
          height={250}
          alt="Email verification tool"
        />
        <div className="max-w-4xl">
          <h1 className="text-3xl font-semibold mb-2">
            Why We Are Your Go-To Email Verification Tool
          </h1>
          <p className="text-muted-foreground">
            Nobounce Mail is your trusted partner in maintaining a great
            reputation with clients. <br /> Our email verification tool is
            designed to verify bulk email lists swiftly and accurately, reducing
            bounce rates and optimizing your email deliverability
          </p>
        </div>
      </div>
    </section>
  );
}

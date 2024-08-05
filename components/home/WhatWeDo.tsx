import { whatWeDo } from "./helpers";

export default function WhatWeDo() {
  return (
    <section className="container text-center">
      <h1 className="text-3xl font-semibold mb-2">What we do</h1>
      <p className="text-muted-foreground">
        At Nobunce Mail, we achieve the following
      </p>
      <div className="flex gap-4 flex-wrap duration-300 mt-10 justify-center">
        {whatWeDo.map((card) => (
          <div key={card.id} className="border p-8 rounded-md max-w-96">
            <div className="flex gap-2 justify-center items-center text-left">
              <div className="text-primary-foreground/50 bg-primary rounded-md p-1">
                {card.icon}
              </div>
              <h4 className="font-semibold text-primary-foreground">
                {card.title}
              </h4>
            </div>
            <hr className="my-3" />
            <p className="text-primary-foreground/70 text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

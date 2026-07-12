import Link from "next/link";

type Card = {
  image: string;
  title: string;
  text: string;
};

export default function ProgramCardsV2({
  eyebrow,
  heading,
  buttonLabel,
  buttonHref,
  cards,
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  buttonLabel: string;
  buttonHref: string;
  cards: Card[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-[var(--brand-dark)] py-24" : "bg-white py-24"}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
              {eyebrow}
            </p>
            <h2
              className={`mt-4 max-w-xl text-4xl font-extrabold leading-tight md:text-5xl ${
                dark ? "text-white" : "text-[var(--brand-dark)]"
              }`}
            >
              {heading}
            </h2>
          </div>

          <Link
            href={buttonHref}
            className="rounded-full bg-[var(--brand-orange)] px-8 py-4 font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            {buttonLabel}
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className={dark ? "bg-white/5 p-6" : "bg-[#fafafa] p-6"}>
                <h3
                  className={`text-lg font-extrabold ${
                    dark ? "text-white" : "text-[var(--brand-dark)]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    dark ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {card.text}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-orange)] transition hover:text-[var(--brand-teal)]"
                >
                  Read More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cards = [
  {
    title: "Restoring Mobility & Independence",
    text: "We relieve poverty and distress among people with physical disabilities in Nigeria by providing wheelchairs, mobility aids, and equipment — restoring freedom and a return to community life.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="22" r="9" />
        <circle cx="16" cy="22" r="2" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M16 10.5 V17 L24 22" />
        <path d="M16 17 H11" />
      </svg>
    ),
  },
  {
    title: "Building Skills for Self-Sufficiency",
    text: "We equip beneficiaries with essential life, social, and vocational skills — enabling them to be self-sufficient and integrated into society, rather than spend a life in an institutional setting.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 C18 6 10 12 10 20 C10 26 14 30 18 30 C22 30 26 26 26 20 C26 12 18 6 18 6Z" />
        <path d="M18 30 L18 18" />
        <path d="M18 22 L13 17" />
        <path d="M18 18 L23 13" />
      </svg>
    ),
  },
  {
    title: "Caring for Vulnerable Children",
    text: "Through the Focus on Disability Foundation Children's Home, we provide care, shelter, and a nurturing environment — developing physical, mental, emotional, and social skills.",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 30 C18 30 4 21 4 12.5 C4 7.5 8 5 12 5 C15 5 17 7 18 9 C19 7 21 5 24 5 C28 5 32 7.5 32 12.5 C32 21 18 30 18 30Z" />
      </svg>
    ),
  },
];

export default function ImpactCardsSection() {
  return (
    <section className={`bg-[#fafafa] py-24 ${montserrat.className}`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-bold text-[var(--brand-orange)]">
          What We Do
        </p>
        <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
          The Difference We Make
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-teal)]">
              {card.icon}
            </div>

            <h3 className="mt-6 text-xl font-extrabold text-[var(--brand-dark)]">
              {card.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

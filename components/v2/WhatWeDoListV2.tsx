import Link from "next/link";
import { Check } from "lucide-react";

const items = [
  {
    title: "Restoring Mobility & Independence",
    text: "Providing wheelchairs, mobility aids, and assistive equipment that restore freedom and a return to community life.",
  },
  {
    title: "Building Skills for Self-Sufficiency",
    text: "Equipping beneficiaries with life, social, and vocational skills so they can be self-sufficient and fully integrated into society.",
  },
  {
    title: "Caring for Vulnerable Children",
    text: "Through the FOD Foundation Children's Home, we provide care, shelter, and a nurturing environment for children with disabilities.",
  },
];

export default function WhatWeDoListV2() {
  return (
    <section className="bg-[#fafafa] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        {/* Left: heading + icon list */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            What We Do
          </p>
          <h2 className="mt-4 max-w-lg text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Delivering Support Where It&rsquo;s Needed Most
          </h2>

          <div className="mt-12 divide-y divide-gray-200">
            {items.map((item, i) => (
              <div key={item.title} className="flex gap-6 py-6">
                <span className="text-2xl font-extrabold text-gray-300">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-lg font-bold text-[var(--brand-dark)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                  <Link
                    href="/about"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-orange)] hover:text-[var(--brand-teal)]"
                  >
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dark trust card */}
        <div className="rounded-[28px] bg-[var(--brand-dark)] p-10 text-white lg:mt-24">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            Give With Confidence
          </p>
          <p className="mt-4 text-2xl font-extrabold leading-snug">
            Registered & Accountable
          </p>

          <ul className="mt-6 space-y-3 text-sm leading-6 text-white/75">
            {[
              "Nigeria Registration No. 55019",
              "UK Charity Commission No. 1157043",
              "No trustee receives remuneration or benefit",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-orange)]" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/donate"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-8 py-4 font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}

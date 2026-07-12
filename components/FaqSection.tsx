"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const faqs = [
  {
    q: "Is FOD Foundation a registered organization?",
    a: "Yes. Focus on Disability Foundation is a registered non-profit organization, operating across two arms: Focus on Disability Foundation (Nigeria) — Registration No. 55019 — and Focus on Disability Foundation (UK) / FODUK — Charity Commission Registration No. 1157043.",
  },
  {
    q: "Who do you serve?",
    a: "Children and adults living with physical and other disabilities in Nigeria, along with their families and caregivers.",
  },
  {
    q: "How do you select beneficiaries?",
    a: "Through community referrals, outreach assessments, and applications, prioritizing the most vulnerable and underserved.",
  },
  {
    q: "Can I donate items instead of money?",
    a: "Absolutely. We accept wheelchairs, crutches, hearing aids, learning materials, food items, and more. Contact us to arrange delivery.",
  },
  {
    q: "How do I know my donation is used properly?",
    a: "We publish reports on our programs and provide acknowledgment and updates to donors. Financial summaries are available on request.",
  },
  {
    q: "Can I volunteer from outside Nigeria?",
    a: "Yes — remote volunteers support us with fundraising, communications, design, and professional services.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`bg-white py-24 ${montserrat.className}`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-orange)]">
            <HelpCircle className="h-4 w-4" /> FAQ
          </p>
          <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-[#fafafa]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-[var(--brand-dark)]">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[var(--brand-orange)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-7 text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

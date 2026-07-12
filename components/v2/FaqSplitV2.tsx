"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";

const faqs = [
  {
    q: "Is FOD Foundation a registered organization?",
    a: "Yes. Focus on Disability Foundation is registered in Nigeria (No. 55019) and with the UK Charity Commission (No. 1157043).",
  },
  {
    q: "Who do you serve?",
    a: "Children and adults living with physical and other disabilities in Nigeria, along with their families and caregivers.",
  },
  {
    q: "Can I donate items instead of money?",
    a: "Absolutely. We accept wheelchairs, crutches, hearing aids, learning materials, and more. Contact us to arrange delivery.",
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

export default function FaqSplitV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left: image + badge */}
        <div className="relative">
          <img
            src="/images/gallery/gallery-6.jpg"
            alt="FOD Foundation beneficiary"
            className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-8 left-6 flex items-center gap-3 rounded-2xl bg-white p-5 shadow-xl">
            <ShieldCheck className="h-8 w-8 text-[var(--brand-teal)]" />
            <div>
              <p className="font-extrabold text-[var(--brand-dark)]">
                Registered Charity
              </p>
              <p className="text-xs text-gray-500">
                Answers rooted in transparency &amp; care
              </p>
            </div>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="pt-4">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Your Questions Answered With Transparency &amp; Care
          </h2>

          <div className="mt-10 space-y-4">
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
      </div>
    </section>
  );
}

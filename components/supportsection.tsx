"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Montserrat } from "next/font/google";
import DonationAmountPicker from "./DonationAmountPicker";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function SupportSection() {
  const [amount, setAmount] = useState("50");

  return (
    <section
      id="donate"
      className={`relative overflow-hidden bg-[var(--brand-teal-light)] py-24 ${montserrat.className}`}
    >
      {/* Background Shapes */}
      <div className="absolute left-0 top-0 opacity-20">
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20C60 60 60 160 20 200"
            stroke="var(--brand-teal)"
            strokeWidth="2"
          />
          <path
            d="M50 10C100 60 100 160 50 210"
            stroke="var(--brand-teal)"
            strokeWidth="2"
          />
          <path
            d="M90 0C150 60 150 160 90 220"
            stroke="var(--brand-teal)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-0 opacity-20">
        <svg
          width="260"
          height="260"
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240 20C180 60 180 180 240 240"
            stroke="var(--brand-teal)"
            strokeWidth="2"
          />
          <path
            d="M210 0C140 70 140 190 210 260"
            stroke="var(--brand-teal)"
            strokeWidth="2"
          />
          <path
            d="M180 0C100 80 100 180 180 260"
            stroke="var(--brand-teal)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--brand-orange)]">
              Get Involved
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] sm:text-5xl">
              Changing lives is what drives us.
            </h2>

            <div className="my-8 h-[3px] w-full max-w-72 border-b-2 border-dashed border-[var(--brand-orange)]" />

            <p className="max-w-lg text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
              Join us. Volunteer your time, donate your resources, or partner
              with us to build a Nigeria where no one is left behind because
              of a disability.
            </p>

            <ul className="mt-8 space-y-3 text-sm font-semibold text-gray-600">
              {[
                "Registered charity — Nigeria No. 55019 & UK Charity Commission No. 1157043",
                "No trustee receives any remuneration or benefit from the charity",
                "Detailed impact and financial reports available on request",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-[var(--brand-teal)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[var(--brand-teal)] transition hover:bg-[var(--brand-teal)] hover:text-white"
              >
                Get Involved
              </Link>

              <a
                href="#donate"
                className="rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--brand-orange-dark)]"
              >
                Make A Donation
              </a>
            </div>
          </div>

          {/* Donation Card */}
          <div className="rounded-[24px] bg-[#fafafa] p-6 shadow-sm sm:rounded-[32px] sm:p-10">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[var(--brand-dark)] sm:text-5xl">
                Make A Donation
              </h3>

              <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                Your gift puts a child in school, a wheelchair under someone
                who has crawled for years, and a skill in the hands of
                someone told they would never work.
              </p>
            </div>

            {/* Amount Picker */}
            <div className="mt-10">
              <DonationAmountPicker
                value={amount}
                onChange={setAmount}
                currency="£"
              />
            </div>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition hover:scale-[1.01] hover:bg-[var(--brand-orange-dark)]"
            >
              Donate Now
            </Link>

            <p className="mt-8 text-center text-sm leading-7 text-gray-500">
              By contributing, you agree to the{" "}
              <span className="font-semibold underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="font-semibold underline">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
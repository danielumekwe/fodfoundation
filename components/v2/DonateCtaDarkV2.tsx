"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const amounts = ["£10", "£25", "£50", "£100"];

export default function DonateCtaDarkV2() {
  const [active, setActive] = useState("£50");

  return (
    <section className="bg-[var(--brand-dark)] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left: message */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            Get Involved
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Your Kindness Can Change a Life Today
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/70">
            A wheelchair, a school fee, a hearing aid — every gift, however
            small, restores independence and dignity to someone who needs it
            most.
          </p>

          <ul className="mt-8 space-y-3 text-sm font-semibold text-white/75">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              Secure, simple giving
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              100% goes toward our programs
            </li>
          </ul>
        </div>

        {/* Right: donation card */}
        <div className="rounded-[28px] bg-white p-10 shadow-xl">
          <p className="text-sm font-bold text-[var(--brand-dark)]">
            How much would you like to donate?
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {amounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setActive(amount)}
                className={`rounded-full border px-4 py-3 text-sm font-bold transition ${
                  active === amount
                    ? "border-[var(--brand-orange)] bg-[var(--brand-orange)] text-white"
                    : "border-gray-200 text-[var(--brand-dark)] hover:border-[var(--brand-orange)]"
                }`}
              >
                {amount}
              </button>
            ))}
          </div>

          <Link
            href="/donate"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-8 py-4 font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            Donate Now
          </Link>

          <p className="mt-6 text-center text-xs leading-6 text-gray-400">
            You&rsquo;ll be taken to our secure donate page to complete your
            gift.
          </p>
        </div>
      </div>
    </section>
  );
}

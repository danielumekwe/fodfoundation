"use client";

import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative h-[780px] overflow-hidden">
      <img
        src="/hero-2.webp"
        alt="A child supported by Focus on Disability Foundation"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/85 via-[var(--brand-dark)]/25 to-[var(--brand-dark)]/10" />

      {/* Floating badge */}
      <div className="absolute right-6 top-32 z-20 hidden max-w-[230px] rounded-2xl bg-white p-5 shadow-xl sm:block md:right-16">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-[var(--brand-orange)]" />
          <span className="text-sm font-extrabold text-[var(--brand-dark)]">
            Registered Charity
          </span>
        </div>
        <p className="mt-2 text-xs leading-5 text-gray-500">
          Nigeria No. 55019 · UK Charity Commission No. 1157043
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-24">
        <div className="max-w-xl">
          <p className="mb-4 font-semibold text-[var(--brand-orange)]">
            Our Mission
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.1] text-white md:text-6xl">
            Turning Small Contributions Into Meaningful Impact
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/85">
            Empowering children and adults living with disabilities across
            Nigeria to live independent, dignified, and fulfilling lives.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-[var(--brand-orange)] px-8 py-4 font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
            >
              Donate Now
            </Link>

            <Link
              href="/about"
              className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative rotating badge */}
      <div className="absolute bottom-10 right-10 z-20 hidden h-28 w-28 items-center justify-center md:flex">
        <svg
          className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <path
            id="heroCirclePath"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            fill="none"
          />
          <text fontSize="7.2" fill="white" letterSpacing="2">
            <textPath href="#heroCirclePath">
              FOD FOUNDATION • REAL IMPACT •{" "}
            </textPath>
          </text>
        </svg>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-orange)]">
          <ArrowUpRight className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  );
}

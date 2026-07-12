"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Donate() {
  const [submitted, setSubmitted] = useState(false);
  const [donor, setDonor] = useState({ name: "", amount: "" });

  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-[360px] overflow-hidden">
          <img
            src="/images/about-banner.jpg"
            alt="Donate"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              Donate
            </h1>

            <div className="mt-4 text-sm font-semibold text-white">
              Home <span className="mx-2 text-white/60">»</span>
              <span className="text-[var(--brand-orange)]">Donate</span>
            </div>
          </div>
        </section>

        {/* Donate */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
                <Heart className="h-5 w-5" /> Make A Donation
              </p>

              <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
                Change A Life Today
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500">
                Your generosity helps us empower individuals living with
                disabilities through care, support, and rehabilitation
                through recreational activities.
              </p>
            </div>

            <div className="mt-12 bg-[#f6f4f2] p-8 md:p-10">
              {submitted ? (
                <div>
                  <h3 className="text-2xl font-extrabold text-[var(--brand-dark)]">
                    Thank you{donor.name ? `, ${donor.name}` : ""}!
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    To make an offline donation
                    {donor.amount ? ` of £${donor.amount}` : ""} toward this
                    cause, follow these steps:
                  </p>

                  <div className="mt-8 bg-white p-6 shadow-sm">
                    <h4 className="text-lg font-extrabold text-[var(--brand-dark)]">
                      Bank Transfer Details
                    </h4>

                    <dl className="mt-4 space-y-3 text-sm">
                      <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                        <dt className="font-semibold text-gray-500">
                          Account Name
                        </dt>
                        <dd className="font-bold text-[var(--brand-dark)]">
                          Focus on Disability Foundation UK
                        </dd>
                      </div>

                      <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                        <dt className="font-semibold text-gray-500">
                          Bank Name
                        </dt>
                        <dd className="font-bold text-[var(--brand-dark)]">
                          TSB
                        </dd>
                      </div>

                      <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                        <dt className="font-semibold text-gray-500">
                          Account Number
                        </dt>
                        <dd className="font-bold text-[var(--brand-dark)]">
                          20737160
                        </dd>
                      </div>

                      <div className="flex justify-between gap-4">
                        <dt className="font-semibold text-gray-500">
                          Sort Code
                        </dt>
                        <dd className="font-bold text-[var(--brand-dark)]">
                          30-90-62
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-6 border-l-4 border-[var(--brand-orange)] bg-white p-5">
                    <h4 className="text-sm font-extrabold uppercase tracking-wide text-[var(--brand-dark)]">
                      Important Notice
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      After making your donation, please send your payment
                      confirmation (screenshot or transaction receipt) to us
                      so we can acknowledge your support and keep proper
                      records.
                    </p>

                    <a
                      href="mailto:info@fodfoundation.org"
                      className="mt-2 inline-block text-sm font-bold text-[var(--brand-teal)] hover:underline"
                    >
                      info@fodfoundation.org
                    </a>
                  </div>

                  <div className="mt-8 text-center">
                    <h4 className="text-xl font-extrabold text-[var(--brand-dark)]">
                      Thank You for Your Support
                    </h4>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-600">
                      Every donation, no matter the size, brings us closer to
                      building an inclusive society where people with
                      disabilities can thrive, live independently, and reach
                      their full potential.
                    </p>

                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand-dark)]">
                      Together, we are making a difference.
                      <Heart className="h-4 w-4 text-[var(--brand-orange)]" />
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    setDonor({
                      name: String(data.get("name") || ""),
                      amount: String(data.get("amount") || ""),
                    });
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="amount"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Donation Amount (£)
                    </label>
                    <div className="flex overflow-hidden border border-gray-300 bg-white">
                      <div className="flex items-center justify-center bg-[var(--brand-orange)] px-5 text-lg font-bold text-white">
                        £
                      </div>
                      <input
                        id="amount"
                        name="amount"
                        type="number"
                        min="1"
                        step="1"
                        required
                        className="w-full bg-transparent px-4 py-3 text-sm outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--brand-orange-dark)]"
                  >
                    Continue To Donate
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

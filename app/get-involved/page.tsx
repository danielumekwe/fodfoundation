"use client";

import { useState } from "react";
import { HandHeart, Check, Handshake, PartyPopper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const volunteerWays = [
  "Community outreach and awareness campaigns",
  "Skills training and mentorship for beneficiaries",
  "Event planning and fundraising",
  "Medical and rehabilitation support (health professionals)",
  "Media, photography, and communications",
  "Administrative and professional pro-bono services (legal, accounting, IT)",
];

const partnerWays = [
  "Corporate Social Responsibility (CSR) sponsorship of programs",
  "In-kind donations (wheelchairs, devices, learning materials, food items)",
  "Joint advocacy and awareness campaigns",
  "Employment and internship opportunities for persons with disabilities",
];

export default function GetInvolved() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-[360px] overflow-hidden">
          <img
            src="/images/about-banner.jpg"
            alt="Get Involved"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              Get Involved
            </h1>

            <div className="mt-4 text-sm font-semibold text-white">
              Home <span className="mx-2 text-white/60">»</span>
              <span className="text-[var(--brand-orange)]">Get Involved</span>
            </div>
          </div>
        </section>

        {/* Become a Volunteer */}
        <section id="volunteer" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
                <HandHeart className="h-5 w-5" /> Become a Volunteer
              </p>

              <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
                Changing Lives Takes Many Hands
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500">
                Whether you can give a few hours a month or lead a project,
                there's a place for you at FOD Foundation.
              </p>

              <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">
                Ways To Volunteer
              </h3>

              <ul className="mt-6 space-y-4 text-sm font-semibold text-gray-500">
                {volunteerWays.map((way) => (
                  <li key={way} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {way}
                  </li>
                ))}
              </ul>
            </div>

            {/* Volunteer Sign-Up Form */}
            <div className="bg-[#f6f4f2] p-8 md:p-10">
              {submitted ? (
                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-[var(--brand-dark)]">
                    Thank you{name ? `, ${name}` : ""}!
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    We've received your volunteer sign-up and will be in
                    touch soon about how you can get involved.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    setName(String(data.get("name") || ""));
                    setSubmitted(true);
                  }}
                >
                  <h3 className="text-xl font-extrabold text-[var(--brand-dark)]">
                    Sign Up To Volunteer
                  </h3>

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Name
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
                      Email
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
                      Phone
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
                      htmlFor="location"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="skills"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Skills / Area Of Interest
                    </label>
                    <input
                      id="skills"
                      name="skills"
                      type="text"
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="availability"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Availability
                    </label>
                    <input
                      id="availability"
                      name="availability"
                      type="text"
                      placeholder="e.g. Weekends, 2 hours/week"
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--brand-orange-dark)]"
                  >
                    Sign Up To Volunteer
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Partner With Us */}
        <section id="partner" className="bg-[var(--brand-teal-light)] py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <Handshake className="h-5 w-5" /> Partner With Us
            </p>

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
              Partner With Focus on Disability Foundation
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600">
              We welcome partnerships with corporate organizations,
              government agencies, foundations, faith-based groups, schools,
              and international NGOs.
            </p>

            <div className="mx-auto mt-12 grid max-w-3xl gap-6 text-left sm:grid-cols-2">
              {partnerWays.map((way) => (
                <div key={way} className="flex items-start gap-3 bg-white p-6 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-orange)] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-6 text-gray-600">{way}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:info@fodfoundation.org"
              className="mt-10 inline-flex rounded-full bg-[var(--brand-dark)] px-9 py-4 text-sm font-bold text-white transition hover:bg-black"
            >
              Contact Our Partnerships Team: info@fodfoundation.org
            </a>
          </div>
        </section>

        {/* Fundraise For Us */}
        <section id="fundraise" className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <PartyPopper className="h-5 w-5" /> Fundraise For Us
            </p>

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
              Turn Your Celebration Into A Lifeline
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500">
              Turn your birthday, wedding, marathon, or community event into
              a lifeline for someone living with a disability. We'll support
              you with materials and guidance.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-[var(--brand-orange)] px-9 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
            >
              GET IN TOUCH TO FUNDRAISE
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

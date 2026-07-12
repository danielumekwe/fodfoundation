"use client";

import Link from "next/link";
import { Target, Check, Heart, BookOpen, Landmark, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const aboutImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-5.jpg",
];

const objectives = [
  {
    label: "Independence over institutionalization",
    text: "To enable children and adults with disabilities to be self-sufficient and integrated into society, rather than spending life in an institutional setting.",
  },
  {
    label: "Life and social skills",
    text: "To provide children and adults with disabilities with the life and social skills they need to thrive.",
  },
  {
    label: "Community education",
    text: "To educate families and communities about disability, breaking stigma and building acceptance and inclusion.",
  },
  {
    label: "Advocacy",
    text: "To champion the rights of persons with disabilities and push for inclusive policies at local, state, and national levels.",
  },
  {
    label: "Basic human needs",
    text: "To ensure vulnerable children — especially those with disabilities — have access to food, shelter, healthcare, and education.",
  },
];

const values = [
  {
    title: "Dignity",
    text: "Every human being deserves respect, regardless of ability.",
  },
  {
    title: "Inclusion",
    text: "Nothing about us without us; persons with disabilities belong at the center of society.",
  },
  {
    title: "Compassion",
    text: "We serve with empathy, humility, and love.",
  },
  {
    title: "Integrity",
    text: "We are transparent and accountable to our donors, partners, and beneficiaries.",
  },
  {
    title: "Empowerment",
    text: "We give people tools, not just handouts.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-[360px] overflow-hidden">
          <img
            src="/images/gallery/gallery-4.jpg"
            alt="About Us"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              About Us
            </h1>

            <div className="mt-4 text-sm font-semibold text-white">
              Home <span className="mx-2 text-white/60">»</span>
              <span className="text-[var(--brand-orange)]">About</span>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <div className="relative mx-auto h-[440px] w-full max-w-[520px]">
              <img
                src={aboutImages[0]}
                alt="Volunteers helping outdoors"
                className="absolute left-0 top-0 h-[260px] w-[300px] object-cover"
              />

              <img
                src={aboutImages[1]}
                alt="Children receiving support"
                className="absolute right-0 top-[100px] h-[260px] w-[230px] object-cover"
              />

              <img
                src={aboutImages[2]}
                alt="Community aid work"
                className="absolute bottom-0 left-[90px] h-[210px] w-[260px] object-cover"
              />
            </div>

            <div>
              <p className="mb-4 font-bold text-[var(--brand-orange)]">Who We Are</p>

              <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
                Focus on Disability Foundation
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500">
                Focus on Disability Foundation is a registered non-profit
                organization working to represent and uplift physically
                challenged people in Nigeria and across Africa. We are
                committed to enhancing the quality of life of people living
                with disabilities and giving them real choice about how they
                live their lives.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
                Across Nigeria, it is far too common to see persons with
                disabilities begging by the roadside — not because they lack
                ability, but because they lack opportunity. Government
                support is limited, social stigma is widespread, and access
                to education, healthcare, and employment remains out of reach
                for millions. FOD Foundation was established to bridge this
                gap.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#vision-mission"
                  className="bg-gray-100 px-8 py-4 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-gray-200"
                >
                  Vision
                </a>

                <a
                  href="#vision-mission"
                  className="bg-gray-100 px-8 py-4 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-gray-200"
                >
                  Mission
                </a>

                <a
                  href="#objectives"
                  className="bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
                >
                  Our Objectives
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision-mission" className="bg-[var(--brand-teal-light)] py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
            <div className="bg-white p-10 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[var(--brand-orange)]">
                Our Vision
              </p>

              <h3 className="text-2xl font-extrabold leading-tight text-[var(--brand-dark)]">
                A Nigeria — and an Africa — where disability is never a
                barrier to dignity.
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                A Nigeria — and an Africa — where every person living with a
                disability is empowered, included, and able to live a
                meaningful, self-sufficient life with dignity.
              </p>
            </div>

            <div className="bg-white p-10 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[var(--brand-orange)]">
                Our Mission
              </p>

              <h3 className="text-2xl font-extrabold leading-tight text-[var(--brand-dark)]">
                Empowering lives through skills, education, and advocacy.
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                To empower and make life meaningful for children and adults
                living with disabilities in Nigeria through skills
                development, education, advocacy, direct support, and
                community integration.
              </p>
            </div>
          </div>
        </section>

        {/* Our Objectives */}
        <section id="objectives" className="bg-[#f6f4f2]">
          <div className="grid min-h-[620px] lg:grid-cols-2">
            <div className="flex items-center justify-center px-6 py-20">
              <div className="max-w-xl">
                <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
                  <Target className="h-5 w-5" /> Our Objectives
                </p>

                <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
                  How We Work Toward Our Mission
                </h2>

                <ul className="mt-8 space-y-5 text-sm font-semibold text-gray-500">
                  {objectives.map((objective) => (
                    <li key={objective.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>
                        <span className="text-[var(--brand-dark)]">
                          {objective.label}:
                        </span>{" "}
                        {objective.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <img
                src="/images/gallery/gallery-3.jpg"
                alt="Focus on Disability Foundation community outreach"
                className="h-full min-h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <Heart className="h-5 w-5" /> Our Core Values
            </p>

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
              What Guides Everything We Do
            </h2>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <div key={value.title} className="bg-[var(--brand-teal-light)] p-6">
                  <h3 className="text-lg font-extrabold text-[var(--brand-dark)]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[var(--brand-dark)] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <BookOpen className="h-5 w-5" /> Our Story
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Our Founding Story
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/70">
              We're preparing the full story of how FOD Foundation began —
              our founders, the year we started, what inspired this work, and
              the milestones since. Check back soon.
            </p>
          </div>
        </section>

        {/* Registration & Structure */}
        <section className="bg-[var(--brand-teal-light)] py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <Landmark className="h-5 w-5" /> Our Registration
            </p>

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
              Two Arms, One Mission
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500">
              Focus on Disability Foundation operates across two registered
              arms working hand in hand, so that your support goes directly
              to relieving poverty and distress among people with
              disabilities in Nigeria.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 text-left shadow-sm">
                <h3 className="text-xl font-extrabold text-[var(--brand-dark)]">
                  Focus on Disability Foundation (Nigeria)
                </h3>
                <p className="mt-2 text-sm font-semibold text-[var(--brand-teal)]">
                  Registration No. 55019
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Delivers our programs on the ground across Nigeria.
                </p>
              </div>

              <div className="bg-white p-8 text-left shadow-sm">
                <h3 className="text-xl font-extrabold text-[var(--brand-dark)]">
                  Focus on Disability Foundation (UK) / FODUK
                </h3>
                <p className="mt-2 text-sm font-semibold text-[var(--brand-teal)]">
                  Charity Commission Registration No. 1157043
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Raises funds and mobilizes support internationally, with no
                  trustee receiving any remuneration or benefit from the
                  charity.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-sm leading-7 text-gray-500">
              Our work has drawn the support and attention of prominent
              voices and partners committed to disability rights in Nigeria,
              including public figures, philanthropists, and international
              representatives who have lauded and championed the
              Foundation's efforts.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <Users className="h-5 w-5" /> Our Team
            </p>

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
              The People Behind Focus on Disability Foundation
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500">
              Meet our founders and trustees, committed to enhancing the
              quality of life of people living with disabilities across
              Nigeria and the UK.
            </p>

            <Link
              href="/team"
              className="mt-10 inline-flex rounded-full bg-[var(--brand-orange)] px-9 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
            >
              MEET THE TEAM
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

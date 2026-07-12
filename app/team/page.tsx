"use client";

import { Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const team = [
  {
    image: "/images/team/abiodun-paseda.jpg",
    name: "Mr. Abiodun Paseda",
    role: "Founder",
  },
  {
    image: "/images/team/esther-paseda.jpg",
    name: "Mrs Esther Adeola Sunmola Paseda",
    role: "Co-Founder",
  },
  {
    image: "/images/team/nina-windor.jpg",
    name: "Nina Rogers Windor",
    role: "Trustee (UK)",
  },
  {
    image: "/images/team/chris-florance.jpg",
    name: "Chris Florance",
    role: "Secretary (UK)",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-[360px] overflow-hidden">
          <img
            src="/images/about-banner.jpg"
            alt="Our Team"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              Our Team
            </h1>

            <div className="mt-4 text-sm font-semibold text-white">
              Home <span className="mx-2 text-white/60">»</span>
              <span className="text-[var(--brand-orange)]">Our Team</span>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
              <Users className="h-5 w-5" /> Meet Our Team
            </p>

            <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
              The People Behind Focus on Disability Foundation
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500">
              Our founders and trustees are committed to enhancing the
              quality of life of people living with disabilities across
              Nigeria and the UK, and giving them real choice about how they
              live their lives.
            </p>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[260px] w-full object-cover"
                  />

                  <h3 className="mt-6 text-xl font-extrabold text-[var(--brand-dark)]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[var(--brand-orange)]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

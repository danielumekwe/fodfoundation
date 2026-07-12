"use client";

import { Users, Accessibility, Package, MapPin, BookOpen, Handshake } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const stats = [
  {
    icon: Users,
    value: "2,500+",
    title: "Children & Adults with Disabilities Empowered",
    text: "Providing life-changing support through education, healthcare assistance, advocacy, rehabilitation, and community inclusion.",
  },
  {
    icon: Accessibility,
    value: "850+",
    title: "Wheelchairs & Mobility Aids Distributed",
    text: "Improving independence by providing wheelchairs, crutches, walkers, white canes, and other essential mobility equipment.",
  },
  {
    icon: Package,
    value: "1,400+",
    title: "Assistive Devices & Essential Equipment Provided",
    text: "Delivering learning tools, assistive technology, adaptive equipment, and daily living aids to individuals and institutions.",
  },
  {
    icon: MapPin,
    value: "45+",
    title: "Communities Across Nigeria Reached",
    text: "Expanding disability awareness, advocacy, outreach, and inclusive community programs throughout Nigeria.",
  },
  {
    icon: BookOpen,
    value: "1,800+",
    title: "Families Educated & Empowered",
    text: "Supporting parents and caregivers with training, counseling, disability awareness, and resources to help loved ones thrive.",
  },
  {
    icon: Handshake,
    value: "320+",
    title: "Volunteers, Donors & Partners Mobilized",
    text: "Building a growing network of compassionate individuals and organizations committed to creating lasting change.",
  },
];

export default function ImpactCounterSection() {
  return (
    <section
      className={`relative overflow-hidden bg-[var(--brand-dark)] py-24 ${montserrat.className}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-orange)]">
            Impact At A Glance
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Changing Lives, One Ability at a Time
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70">
            Every life we touch represents renewed hope, restored dignity,
            and greater independence. Through partnerships, compassionate
            volunteers, and generous supporters, Focus on Disability
            Foundation continues to empower individuals with disabilities,
            strengthen families, and build more inclusive communities across
            Nigeria. Every number below represents a life transformed.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(({ icon: Icon, value, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-teal)]">
                <Icon className="h-7 w-7 text-white" />
              </div>

              <p className="mt-5 text-5xl font-extrabold leading-none text-[var(--brand-orange)]">
                {value}
              </p>

              <p className="mt-4 text-base font-bold leading-6 text-white">
                {title}
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

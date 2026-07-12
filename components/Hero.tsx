"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/slide1.jpg",
    tagline: "Our Mission",
    headline: "Every Ability Deserves Opportunity",
    subheadline:
      "Empowering children and adults living with disabilities across Nigeria to live independent, dignified, and fulfilling lives.",
  },
  {
    image: "/slide2.jpg",
    tagline: "Our Vision",
    headline: "Breaking Stigma, Building Inclusion",
    subheadline:
      "A Nigeria where every person living with a disability is empowered, included, and able to live a meaningful, self-sufficient life with dignity.",
  },
  {
    image: "/slide3.jpg",
    tagline: "Our Approach",
    headline: "Independence Over Institutionalization",
    subheadline:
      "Through skills development, education, advocacy, and direct support, we help people with disabilities thrive — not just survive.",
  },
];

const causes = [
  {
    image: "/images/gallery/gallery-3.jpg",
    title: "Disability Support & Empowerment",
    text: "Providing life-changing support for children and adults with disabilities through advocacy, rehabilitation, assistive devices, and community-based inclusion programs.",
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    title: "Education & Skills Development",
    text: "Helping children stay in school and empowering young people and adults with education, vocational training, digital skills, and opportunities for independent living.",
  },
  {
    image: "/images/gallery/gallery-6.jpg",
    title: "Healthcare & Mobility Assistance",
    text: "Improving quality of life by providing wheelchairs, white canes, hearing aids, therapy support, medical outreach, and essential assistive equipment.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      {/* Hero Slider */}
      <div className="relative h-[850px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-[var(--brand-orange)] font-medium mb-4">
              {slides[current].tagline}
            </p>

            <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight">
              {slides[current].headline}
            </h1>

            <p className="mt-6 text-lg text-white/90">
              {slides[current].subheadline}
            </p>

            <div className="flex gap-4 mt-10">
              <Link
                href="/donate"
                className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-dark)] text-white px-8 py-4 rounded-full font-semibold transition"
              >
                DONATE NOW
              </Link>

              <button className="bg-[var(--brand-teal)] hover:bg-[var(--brand-teal-dark)] text-white px-8 py-4 rounded-full font-semibold transition">
                BECOME A VOLUNTEER
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "/images/team/abiodun-paseda.jpg",
                  "/images/team/esther-paseda.jpg",
                  "/images/team/nina-windor.jpg",
                  "/images/team/chris-florance.jpg",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="FOD Foundation team member"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <Link
                href="/team"
                className="text-sm font-semibold text-white/90 hover:text-[var(--brand-orange)]"
              >
                Meet the team behind FOD Foundation →
              </Link>
            </div>
          </div>
        </div>

        {/* Transparent Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 pointer-events-none">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl text-white backdrop-blur-md transition hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-4xl text-white backdrop-blur-md transition hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-[var(--brand-orange)]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Cards */}
      <div className="relative z-40 max-w-7xl mx-auto px-6">
        <div className="-mt-40 bg-white shadow-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {causes.map((item, index) => (
              <div key={index} className="group bg-gray-100 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="bg-[var(--brand-dark)] text-white p-6">
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>

                  <p className="text-sm leading-6 text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


const slides = [
  {
    image: "/slide1.jpg",
    tagline: "Our Mission",
    headline: ["Every Ability", "Deserves", "Opportunity"],
    accent: "Opportunity",
    subheadline:
      "Empowering children and adults living with disabilities across Nigeria to live independent, dignified, and fulfilling lives.",
  },
  {
    image: "/slide2.jpg",
    tagline: "Our Vision",
    headline: ["Breaking Stigma,", "Building", "Inclusion"],
    accent: "Inclusion",
    subheadline:
      "A Nigeria where every person living with a disability is empowered, included, and able to live a meaningful, self-sufficient life with dignity.",
  },
  {
    image: "/slide3.jpg",
    tagline: "Our Approach",
    headline: ["Independence", "Over", "Institutions"],
    accent: "Institutions",
    subheadline:
      "Through skills development, education, advocacy, and direct support, we help people with disabilities thrive — not just survive.",
  },
];

const tornEdge =
  "polygon(0% 0%, 100% 0%, 100.0% 45%, 98.3% 20%, 96.7% 60%, 95.0% 60%, 93.3% 35%, 91.7% 70%, 90.0% 80%, 88.3% 55%, 86.7% 60%, 85.0% 65%, 83.3% 55%, 81.7% 55%, 80.0% 35%, 78.3% 40%, 76.7% 60%, 75.0% 65%, 73.3% 60%, 71.7% 20%, 70.0% 60%, 68.3% 40%, 66.7% 45%, 65.0% 60%, 63.3% 80%, 61.7% 35%, 60.0% 70%, 58.3% 35%, 56.7% 40%, 55.0% 55%, 53.3% 25%, 51.7% 65%, 50.0% 45%, 48.3% 25%, 46.7% 60%, 45.0% 60%, 43.3% 70%, 41.7% 35%, 40.0% 60%, 38.3% 60%, 36.7% 20%, 35.0% 35%, 33.3% 60%, 31.7% 45%, 30.0% 70%, 28.3% 60%, 26.7% 25%, 25.0% 40%, 23.3% 40%, 21.7% 35%, 20.0% 20%, 18.3% 60%, 16.7% 40%, 15.0% 55%, 13.3% 20%, 11.7% 45%, 10.0% 45%, 8.3% 70%, 6.7% 80%, 5.0% 55%, 3.3% 45%, 1.7% 60%, 0.0% 35%)";

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
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative">
      {/* Hero Slider */}
      <div className="relative min-h-[760px] overflow-hidden bg-[var(--brand-dark)] lg:h-[800px]">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.image}
              alt={s.headline.join(" ")}
              className="absolute inset-0 h-full w-full object-cover object-[75%_center] grayscale"
            />
            {/* Dark teal wash, strongest on the text side */}
            <div className="absolute inset-0 bg-[#06201e]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06201e] via-[#06201e]/85 to-transparent" />
          </div>
        ))}

        {/* Torn paper edge under the navbar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[84px] z-20 h-6 bg-white md:top-[124px] lg:top-[140px]"
          style={{ clipPath: tornEdge }}
        />

        {/* Brush-stroke corners */}
        <svg
          aria-hidden="true"
          viewBox="0 0 120 400"
          className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-64 text-[var(--brand-orange)] md:block"
          fill="currentColor"
        >
          <path d="M0 400V210l14 40 6-26 10 48 8-20 12 56-14 10 24 30 16-8 30 40z" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 120 400"
          className="pointer-events-none absolute left-0 top-44 z-20 hidden h-56 text-[var(--brand-orange)] md:block"
          fill="currentColor"
        >
          <path d="M0 0l18 70-8 14 22 48-14 10 18 60-12 8 16 80H0z" />
        </svg>

        {/* Content */}
        <div className="relative z-30 mx-auto flex h-full min-h-[760px] max-w-7xl items-center px-6 pb-24 pt-48 lg:px-10">
          <div className="max-w-2xl" key={current}>
            <p
              className="flex items-center gap-3 text-xl font-semibold italic text-[var(--brand-orange)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8.5c-.8-1.6-3.6-1.6-3.6.8 0 1.8 2.2 3 3.6 4 1.4-1 3.6-2.2 3.6-4 0-2.4-2.8-2.4-3.6-.8z" />
                <path d="M3 17h4l3 2h6l5-3a1.6 1.6 0 0 0-2-2.4L15 15" />
              </svg>
              {slide.tagline}
            </p>

            <h1
              className="mt-4 text-5xl font-extrabold leading-[1.1] text-white md:text-7xl"
            >
              {slide.headline.map((line) =>
                line === slide.accent ? (
                  <span key={line} className="block">
                    <span
                      className="relative inline-block italic text-[var(--brand-orange)]"
                    >
                      {line}
                      <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[var(--brand-orange)]" />
                    </span>
                  </span>
                ) : (
                  <span key={line} className="block">
                    {line}
                  </span>
                )
              )}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/85">
              {slide.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Discover More <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--brand-orange-dark)]"
              >
                Donate Now <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Arrows, stacked on the right */}
        <div className="absolute right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-4 md:right-12">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b3a36] text-2xl text-white transition hover:bg-[var(--brand-teal)]"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-orange)] text-2xl text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

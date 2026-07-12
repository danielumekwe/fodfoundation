"use client";

import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const testimonials = [
  {
    id: 1,
    quote:
      "This initiative brings people together in a powerful way. It fosters dialogue, builds trust, and turns shared voices into meaningful community impact.",
    name: "Kiss Kington",
    role: "Journalist, London",
    image:
      "https://alonethemes.com/wp-content/uploads/2026/01/avatar-testi.jpg",
  },
  {
    id: 2,
    quote:
      "Their campaigns inspired real engagement in our community. The impact created lasting awareness and positive participation.",
    name: "Sarah Williams",
    role: "Community Leader",
    image:
      "https://alonethemes.com/wp-content/uploads/2020/09/avatar-3.png",
  },
  {
    id: 3,
    quote:
      "A meaningful platform that empowers voices and creates opportunities for people to connect and drive positive change.",
    name: "John Carter",
    role: "Social Advocate",
    image:
      "https://alonethemes.com/wp-content/uploads/2020/09/avatar-3.png",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  return (
    <section
      className={`bg-[var(--brand-teal-light)] py-24 ${montserrat.className}`}
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Quote */}
          <h2 className="text-3xl font-extrabold leading-[1.5] text-[var(--brand-dark)] md:text-5xl">
            “{testimonials[active].quote}”
          </h2>

          {/* User */}
          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="relative h-24 w-24 overflow-hidden rounded-full">
              <Image
                src={testimonials[active].image}
                alt={testimonials[active].name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="text-left">
              <h3 className="text-3xl font-extrabold text-[var(--brand-dark)]">
                {testimonials[active].name}
              </h3>

              <p className="mt-1 text-xl text-[#6b7280]">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-[4px] rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-14 bg-[var(--brand-orange)]"
                    : "w-6 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
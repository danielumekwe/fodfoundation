"use client";

import { Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const photos = [
  { image: "/images/gallery/gallery-1.jpg", alt: "Foundation outreach event" },
  { image: "/images/gallery/gallery-2.jpg", alt: "Foundation outreach event" },
  { image: "/images/gallery/gallery-3.jpg", alt: "Community support programme" },
  { image: "/images/gallery/gallery-4.jpg", alt: "Foundation volunteers at work" },
  { image: "/images/gallery/gallery-5.jpg", alt: "Beneficiaries at a foundation event" },
  { image: "/images/gallery/gallery-6.jpg", alt: "Foundation community event" },
];

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-[360px] overflow-hidden">
          <img
            src="/images/about-banner.jpg"
            alt="Gallery"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              Gallery
            </h1>

            <div className="mt-4 text-sm font-semibold text-white">
              Home <span className="mx-2 text-white/60">»</span>
              <span className="text-[var(--brand-orange)]">Gallery</span>
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
                <Camera className="h-5 w-5" /> Our Moments
              </p>

              <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
                Highlights From Our Work
              </h2>
            </div>

            <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group mb-6 overflow-hidden break-inside-avoid"
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="w-full object-cover transition duration-500 group-hover:scale-110"
                  />
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

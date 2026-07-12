"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function StoryBannerV2() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[560px] overflow-hidden">
      <img
        src="/images/gallery/gallery-4.jpg"
        alt="FOD Foundation team supporting a beneficiary"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--brand-dark)]/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
          Watch Our Story
        </span>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Together We&rsquo;re Changing Lives
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/85">
          Through the collective support of donors, volunteers, and partners,
          we provide education, healthcare, mobility assistance, and
          disability support — creating hope, dignity, and independence.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Watch our story video"
          className="group relative mt-10 flex h-28 w-28 items-center justify-center"
        >
          <svg
            className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <path
              id="storyCirclePath"
              d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
              fill="none"
            />
            <text fontSize="7.5" fill="white" letterSpacing="2">
              <textPath href="#storyCirclePath">
                WATCH OUR STORY • WATCH OUR STORY •{" "}
              </textPath>
            </text>
          </svg>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-orange)] transition group-hover:bg-[var(--brand-orange-dark)]">
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </span>
        </button>
      </div>

      {/* Video lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 px-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/Vok_2ns87QY?autoplay=1"
                title="Birds Eye view of FODFOUNDATION HOME"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

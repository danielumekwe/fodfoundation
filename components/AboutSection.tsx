import Link from "next/link";
import { Montserrat } from "next/font/google";
import { ArrowUpRight, Play } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const VIDEO_URL = "https://www.youtube.com/watch?v=Vok_2ns87QY";

export default function AboutSection() {
  return (
    <section
      className={`relative overflow-hidden bg-white px-6 py-20 md:py-28 ${montserrat.className}`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy */}
        <div>
          <p className="flex items-center gap-3 text-lg font-semibold italic text-[var(--brand-orange)]">
            <span
              aria-hidden="true"
              className="h-0.5 w-16 bg-[var(--brand-orange)]"
            />
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Welcome to Focus on Disability Foundation
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Focus on Disability Foundation (FOD Foundation) is a non-profit
            organization committed to enhancing the quality of life of
            children and adults living with disabilities in Nigeria. We
            believe that disability is not inability — and that with the
            right support, training, and opportunities, every person can
            live a self-sufficient life, fully integrated into their
            community.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-teal)] px-8 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-teal-dark)]"
            >
              Discover Now <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              Watch Now
            </a>

          </div>
        </div>
        {/* Right: single image */}
        <div className="relative mx-auto w-full max-w-[620px]">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border-2 border-[var(--brand-orange)]/70"
          />
          <img
            src="/images/home1.jpg"
            alt="FOD Foundation team with children and adults supported by the foundation"
            className="relative aspect-[4/3] w-full rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

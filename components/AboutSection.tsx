import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function AboutSection() {
  return (
    <section className={`bg-white px-6 py-20 md:py-24 ${montserrat.className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: video + overlapping mission callout + team card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/Vok_2ns87QY"
                title="Birds Eye view of FODFOUNDATION HOME"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 hidden max-w-[220px] rounded-xl bg-[var(--brand-dark)] p-5 shadow-xl sm:block md:-right-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-orange)]">
              Our Mission
            </p>
            <p className="mt-2 text-sm leading-6 text-white/90">
              Empowering people with disabilities through skills, education,
              advocacy, and direct support.
            </p>
          </div>

          <div className="mt-14 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:mt-10">
            <img
              src="/images/team/abiodun-paseda.jpg"
              alt="Mr. Abiodun Paseda"
              className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-[var(--brand-dark)]">
                Mr. Abiodun Paseda
              </p>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
            <Link
              href="/team"
              className="ml-auto text-sm font-bold text-[var(--brand-orange)] hover:text-[var(--brand-teal)]"
            >
              More →
            </Link>
          </div>
        </div>

        {/* Right: copy */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
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

          <p className="mt-4 text-base leading-8 text-gray-600">
            There are an estimated{" "}
            <strong className="text-[var(--brand-dark)]">
              22 million or more people living with disabilities in Nigeria
            </strong>{" "}
            — yet disability remains one of the most neglected dimensions of
            equal rights in our society. Too many are excluded from
            education, employment, healthcare, and public life. Too many are
            left to survive on the streets. We exist to change that story.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full bg-[var(--brand-orange)] px-8 py-4 font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            READ MORE ABOUT US →
          </Link>
        </div>
      </div>
    </section>
  );
}

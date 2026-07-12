import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Mission Driven Organization",
    text: "Every program we run is built around one goal — restoring dignity, independence, and opportunity to people living with disabilities.",
  },
  {
    title: "Transparent, Trusted, and Impactful",
    text: "Registered in Nigeria and the UK, with clear reporting on exactly how every donation is used.",
  },
];

export default function AboutSplitV2() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div className="relative h-[460px]">
          <img
            src="/images/gallery/gallery-1.jpg"
            alt="FOD Foundation community outreach"
            className="absolute left-0 top-0 h-[300px] w-[70%] rounded-2xl object-cover shadow-lg"
          />
          <img
            src="/images/gallery/gallery-5.jpg"
            alt="FOD Foundation program participants"
            className="absolute bottom-0 right-0 h-[230px] w-[55%] rounded-2xl border-4 border-white object-cover shadow-lg"
          />

          {/* Founder mini-card, overlapping collage */}
          <div className="absolute -bottom-8 left-4 flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-xl sm:left-10">
            <img
              src="/images/team/abiodun-paseda.jpg"
              alt="Mr. Abiodun Paseda"
              className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-[var(--brand-dark)]">
                Mr. Abiodun Paseda
              </p>
              <p className="text-sm text-gray-500">Founder, FOD Foundation</p>
            </div>
            <Link
              href="/team"
              className="ml-2 text-sm font-bold text-[var(--brand-orange)] hover:text-[var(--brand-teal)]"
            >
              More →
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="pt-8 lg:pt-0">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Growing Together to Create Lasting Impact
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Focus on Disability Foundation is a non-profit committed to
            enhancing the quality of life of children and adults living with
            disabilities in Nigeria — because disability is not inability.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--brand-teal)]" />
                <div>
                  <p className="font-bold text-[var(--brand-dark)]">
                    {f.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[var(--brand-orange)] px-8 py-4 font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}

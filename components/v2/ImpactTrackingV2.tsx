import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const helps = [
  {
    title: "Buys Assistive Devices",
    text: "Wheelchairs, crutches, hearing aids, and white canes that restore independence.",
  },
  {
    title: "Funds Vocational Training",
    text: "Life, social, and job skills that help people become self-sufficient.",
  },
  {
    title: "Supports the Children's Home",
    text: "Care, shelter, and a nurturing environment for vulnerable children with disabilities.",
  },
];

export default function ImpactTrackingV2() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div className="relative h-[440px] order-2 lg:order-1">
          <img
            src="/images/gallery/gallery-2.jpg"
            alt="FOD Foundation beneficiaries"
            className="absolute left-0 top-4 h-[85%] w-[75%] rounded-2xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-6 right-0 rounded-2xl bg-[var(--brand-teal)] px-6 py-5 text-white shadow-xl sm:right-4">
            <p className="text-3xl font-extrabold leading-none">2,500+</p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              Lives Empowered
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            How Your Donation Helps
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Every Contribution Creates Lasting Change
          </h2>

          <div className="mt-8 space-y-6">
            {helps.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--brand-orange)]" />
                <div>
                  <p className="font-bold text-[var(--brand-dark)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full border-2 border-[var(--brand-teal)] px-8 py-4 font-bold text-[var(--brand-teal)] transition hover:bg-[var(--brand-teal)] hover:text-white"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}

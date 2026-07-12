import { Lock, Users, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Lock,
    title: "Transparent Giving",
    text: "Clear reporting on how every donation is used, with financial summaries available on request.",
  },
  {
    icon: Users,
    title: "Community-Led Programs",
    text: "Beneficiaries are identified through community referrals and outreach — support goes where it's needed most.",
  },
  {
    icon: MapPin,
    title: "Nationwide Reach",
    text: "Programs spanning disability support, education, healthcare, and advocacy across Nigeria.",
  },
];

const stats = [
  { value: "2,500+", label: "Lives Empowered" },
  { value: "850+", label: "Mobility Aids Distributed" },
  { value: "45+", label: "Communities Reached" },
];

export default function StatsHighlightV2() {
  return (
    <section className="bg-[#fafafa] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + icon items */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand-orange)]">
            Our Impact
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Highlights of Our Impactful Work
          </h2>

          <div className="mt-10 space-y-8">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[var(--brand-dark)]">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dark stats card */}
        <div className="rounded-[28px] bg-[var(--brand-dark)] p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="text-4xl font-extrabold text-[var(--brand-orange)]">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

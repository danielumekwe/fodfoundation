"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HandHeart, Play, X } from "lucide-react";

const VIDEO_ID = "Vok_2ns87QY";

// Ragged vertical edge: x wobbles around `base` percent, top to bottom.
const wobble = [0, 3, -2, 4, -3, 2, -4, 3, -1, 4, -3, 2, -2, 4, -3, 1, -4, 3, -2, 0];
function edge(base: number, dir: 1 | -1) {
  return wobble.map((w, i) => ({
    x: base + dir * w * 0.6,
    y: (i * 100) / (wobble.length - 1),
  }));
}
const pts = (p: { x: number; y: number }[]) =>
  p.map(({ x, y }) => `${x.toFixed(1)}% ${y.toFixed(1)}%`).join(", ");

// Left panel: ragged right edge. Right panel: ragged left edge.
const leftClip = `polygon(0% 0%, ${pts(edge(96, 1))}, 0% 100%)`;
const rightClip = `polygon(100% 0%, ${pts(edge(4, 1))}, 100% 100%)`;

function Panel({
  side,
  image,
  tone,
  title,
  eyebrow,
  cta,
}: {
  side: "left" | "right";
  image: string;
  tone: string;
  title: string;
  eyebrow: string;
  cta: { href: string; label: string; className: string };
}) {
  const clip = side === "left" ? leftClip : rightClip;
  const pos = side === "left" ? "md:left-0" : "md:right-0";
  const body = (
    <PanelBody image={image} tone={tone} title={title} eyebrow={eyebrow} cta={cta} />
  );

  return (
    <>
      {/* Orange torn-edge outline sits just behind the panel */}
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 hidden w-[calc(36%+8px)] bg-[var(--brand-orange)] md:block ${pos}`}
        style={{ clipPath: clip }}
      />
      <div className="md:hidden">{body}</div>
      <div
        className={`absolute inset-y-0 hidden w-[36%] md:block ${pos}`}
        style={{ clipPath: clip }}
      >
        {body}
      </div>
    </>
  );
}

function PanelBody({
  image,
  tone,
  title,
  eyebrow,
  cta,
}: {
  image: string;
  tone: string;
  title: string;
  eyebrow: string;
  cta: { href: string; label: string; className: string };
}) {
  return (
    <div className={`relative flex h-full min-h-[300px] items-center justify-center px-8 py-14 text-center ${tone}`}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
      />
      <div className="relative">
        <HandHeart size={52} strokeWidth={1.5} className="mx-auto text-white" aria-hidden="true" />
        <p className="mt-4 text-sm text-white/90">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold text-white lg:text-4xl">{title}</h2>
        <Link
          href={cta.href}
          className={`mt-6 inline-flex rounded-full px-9 py-4 text-sm font-bold transition ${cta.className}`}
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}

export default function ActionBanner() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section className="relative bg-[var(--brand-dark)] md:h-[480px]">
      {/* Center photo with play button */}
      <div className="relative hidden h-full md:block">
        <img
          src="/slide2.jpg"
          alt="Children supported by FOD Foundation"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-white/10" />
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand-orange)] text-[var(--brand-dark)] transition hover:scale-105"
        >
          <span className="absolute inset-2 rounded-full border border-dashed border-[var(--brand-dark)]" />
          <Play size={24} fill="currentColor" aria-hidden="true" />
        </button>
      </div>

      <Panel
        side="left"
        image="/images/gallery/gallery-5.jpg"
        tone="bg-[#10191a]"
        eyebrow="Every Ability Deserves Opportunity"
        title="Become A Volunteer?"
        cta={{
          href: "/get-involved",
          label: "Join Us Now",
          className: "bg-[var(--brand-teal)] text-white hover:bg-[var(--brand-teal-dark)]",
        }}
      />
      <Panel
        side="right"
        image="/slide3.jpg"
        tone="bg-[var(--brand-teal-dark)]"
        eyebrow="Your Gift Changes A Life"
        title="Make A Donation To Us?"
        cta={{
          href: "/donate",
          label: "Donate Now",
          className: "bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange-dark)]",
        }}
      />

      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="FOD Foundation video"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPlaying(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setPlaying(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 text-white hover:text-[var(--brand-orange)]"
            >
              <X size={32} />
            </button>
            <div className="relative w-full overflow-hidden rounded-2xl pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
                title="Birds Eye view of FODFOUNDATION HOME"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

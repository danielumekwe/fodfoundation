"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const addresses = [
  {
    label: "United Kingdom",
    lines: ["61 Rathbone Rd, Birmingham,", "Smethwick B67 5JF, United Kingdom"],
  },
  {
    label: "Nigeria",
    lines: ["6–7 Hassan Lasisi Street, Latogun,", "Ijebu Ode, Ogun State, Nigeria"],
  },
];

const phones = ["+44 7925 799373", "+234 811 985 8522", "+234 813 591 2837"];

const socials = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Tumblr",
    path: "M14.563 24c-5.093 0-8.9-2.596-8.9-8.996v-6.32H2.5V4.836c3.393-.965 4.858-3.797 5.03-6.5H11.71v5.976h4.777v4.404H11.71v6.033c0 2.026.994 2.744 2.594 2.744h2.36V24h-2.101z",
  },
  {
    label: "TikTok",
    path: "M16.6 5.82c-1.05-1.15-1.63-2.65-1.63-4.22h-3.16v13.6c0 1.65-1.34 3-3 3s-3-1.35-3-3 1.34-3 3-3c.3 0 .59.05.86.14V9.24a6.16 6.16 0 0 0-.86-.06 6.14 6.14 0 1 0 6.14 6.14V8.4a8.94 8.94 0 0 0 5.17 1.64V6.88a5.6 5.6 0 0 1-3.52-1.06z",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        {/* Page Banner */}
        <section className="relative h-[360px] overflow-hidden">
          <img
            src="/images/about-banner.jpg"
            alt="Contact Us"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[var(--brand-dark)]/75" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-extrabold text-white md:text-6xl">
              Contact Us
            </h1>

            <p className="mt-4 max-w-xl px-6 text-sm font-medium text-white/80">
              &ldquo;We can&apos;t help everyone, but everyone can help someone.&rdquo;
            </p>

            <div className="mt-4 text-sm font-semibold text-white">
              Home <span className="mx-2 text-white/60">»</span>
              <span className="text-[var(--brand-orange)]">Contact Us</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            {/* Info */}
            <div>
              <p className="mb-4 inline-flex items-center gap-2 font-bold text-[var(--brand-orange)]">
                <MapPin className="h-5 w-5" /> Get In Touch
              </p>

              <h2 className="max-w-lg text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
                We Would Love to Hear from You
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">
                    Email
                  </h3>
                  <a
                    href="mailto:info@fodfoundation.org"
                    className="mt-2 block text-sm text-gray-500 hover:text-[var(--brand-orange)]"
                  >
                    info@fodfoundation.org
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">
                    Phone
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-sm text-gray-500 hover:text-[var(--brand-orange)]"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {addresses.map((address) => (
                    <div key={address.label}>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">
                        {address.label}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {address.lines.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">
                    Follow Us
                  </h3>
                  <div className="mt-3 flex gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[var(--brand-dark)] transition hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#f6f4f2] p-8 md:p-10">
              {sent ? (
                <p className="text-lg font-semibold text-[var(--brand-dark)]">
                  Thank you for reaching out — we&apos;ll get back to you soon.
                </p>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-[var(--brand-dark)]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--brand-orange)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-[var(--brand-orange)] px-9 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import { Menu, X, Search, Mail, Phone, Headset, HeartHandshake, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/team", label: "Our Team" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/gallery", label: "Our Work" },
  { href: "https://blog.fodfoundation.org", label: "Blog", external: true },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 bg-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Top bar */}
      <div className="hidden md:block mx-6 xl:mx-12 rounded-b-3xl bg-[#06201e] text-sm text-white">
        <div className="flex items-center justify-between gap-6 px-8 py-3">
          <div className="flex items-center gap-8">
            <a
              href="mailto:info@fodfoundation.org"
              className="flex items-center gap-2 hover:text-[var(--brand-orange)] transition"
            >
              <Mail size={16} className="text-[var(--brand-orange)]" aria-hidden="true" />
              info@fodfoundation.org
            </a>
            <a
              href="tel:+2348135912837"
              className="hidden lg:flex items-center gap-2 hover:text-[var(--brand-orange)] transition"
            >
              <Phone size={16} className="text-[var(--brand-orange)]" aria-hidden="true" />
              +234 813 591 2837
            </a>
          </div>

          <Link
            href="/get-involved"
            className="hidden lg:flex items-center gap-2 font-semibold hover:text-[var(--brand-orange)] transition"
          >
            <HeartHandshake size={18} className="text-[var(--brand-orange)]" aria-hidden="true" />
            Are You Ready To Help Them? Let&apos;s Become A Volunteer!
          </Link>

          <a
            href="https://blog.fodfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[var(--brand-orange)] transition"
          >
            Read Our Blog
          </a>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 px-6 xl:px-12 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/fodfoundation.png"
            alt="Focus on Disability Foundation"
            className="h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav — orange pill */}
        <div className="hidden lg:flex relative h-[70px] items-center justify-between gap-8 rounded-full bg-[var(--brand-orange)] px-10 justify-self-center w-full max-w-[1000px]">
          <nav className="flex items-center gap-7 font-semibold text-[#06201e] text-[15px]">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.href === "/"
                      ? "border-b-2 border-[#06201e] pb-0.5"
                      : "transition hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <a
            href="tel:+2348135912837"
            className="hidden xl:flex items-center gap-3 text-[#06201e] relative pl-8"
          >
            {/* Notches */}
            <span aria-hidden="true" className="absolute left-0 -top-[19px] h-6 w-6 rounded-full bg-white" />
            <span aria-hidden="true" className="absolute left-0 -bottom-[19px] h-6 w-6 rounded-full bg-white" />
            <Headset size={34} strokeWidth={1.5} aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-xs">Call Us Now</span>
              <span className="block text-base font-bold">+234 813 591 2837</span>
            </span>
          </a>
        </div>

        {/* Right group: search + Donate */}
        <div className="hidden lg:flex items-center gap-5">
          <Search
            size={22}
            strokeWidth={2}
            className="text-black"
            aria-hidden="true"
          />
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-orange)] px-7 py-4 text-sm font-bold text-white hover:bg-[var(--brand-orange-dark)] transition"
          >
            Donate Now <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden col-start-3 justify-self-end"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={32} strokeWidth={1.8} />
          ) : (
            <Menu size={32} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[88px] md:top-[132px] bg-white z-40"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-black hover:text-[var(--brand-orange)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-semibold text-black hover:text-[var(--brand-orange)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/donate"
              className="rounded-full bg-[var(--brand-orange)] px-8 py-3 text-2xl font-semibold text-white hover:bg-[var(--brand-orange-dark)] transition"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
      `}</style>
    </header>
  );
}

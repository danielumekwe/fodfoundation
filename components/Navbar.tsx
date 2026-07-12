"use client";

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
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
    <header className="absolute top-0 left-0 w-full z-50 bg-white">
      <div
        className="max-w-[1800px] mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 px-8 py-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/fodfoundation.png"
            alt="Focus on Disability Foundation"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 font-semibold text-black">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--brand-orange)]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/"
                    ? "border-b-2 border-[var(--brand-orange)] pb-1"
                    : "transition hover:text-[var(--brand-orange)]"
                }
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right group: search + Donate */}
        <div className="hidden lg:flex items-center gap-5">
          <Search
            size={20}
            strokeWidth={2}
            className="text-black/70"
            aria-hidden="true"
          />
          <Link
            href="/donate"
            className="rounded-full bg-[var(--brand-orange)] px-6 py-2.5 text-white hover:bg-[var(--brand-orange-dark)] transition"
          >
            Donate
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
          className="lg:hidden fixed inset-0 top-[72px] bg-white z-40"
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

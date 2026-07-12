"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [notifyFailed, setNotifyFailed] = useState(false);

  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-texture" aria-hidden="true" />
        <div className="cta-inner">
          <h2 className="cta-heading">Together We Can<br />Change Lives</h2>
          <div className="cta-divider" aria-hidden="true" />
          <p className="cta-body">
            Your support — through volunteering, donations, or partnership —
            helps us restore dignity, independence, and opportunity to people
            living with disabilities across Nigeria.
          </p>
          <a href="/donate" className="cta-btn">Get Involved Today</a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">

          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="Focus on Disability Foundation home">
              <img src="/fodlogo.png" alt="Focus on Disability Foundation" className="footer-logo-mark" />
            </a>
            <p className="footer-tagline">
              Focus on Disability Foundation is a non-profit organization
              empowering children and adults living with disabilities in
              Nigeria to live self-sufficient, dignified lives — through
              skills training, education, advocacy, and direct support.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Tumblr" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.563 24c-5.093 0-8.9-2.596-8.9-8.996v-6.32H2.5V4.836c3.393-.965 4.858-3.797 5.03-6.5H11.71v5.976h4.777v4.404H11.71v6.033c0 2.026.994 2.744 2.594 2.744h2.36V24h-2.101z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82c-1.05-1.15-1.63-2.65-1.63-4.22h-3.16v13.6c0 1.65-1.34 3-3 3s-3-1.35-3-3 1.34-3 3-3c.3 0 .59.05.86.14V9.24a6.16 6.16 0 0 0-.86-.06 6.14 6.14 0 1 0 6.14 6.14V8.4a8.94 8.94 0 0 0 5.17 1.64V6.88a5.6 5.6 0 0 1-3.52-1.06z"/>
                </svg>
              </a>
            </div>

            {subscribed ? (
              <div>
                <p className="footer-newsletter-thanks">
                  <CheckCircle2 className="footer-newsletter-thanks-icon" aria-hidden="true" />
                  Thanks for subscribing — watch your inbox for stories of
                  impact.
                </p>
                {notifyFailed && (
                  <p className="footer-newsletter-error">
                    We couldn&rsquo;t confirm your subscription automatically —
                    please email info@fodfoundation.org to be added.
                  </p>
                )}
              </div>
            ) : (
              <form
                className="footer-newsletter"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSending(true);
                  try {
                    const res = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    setNotifyFailed(!res.ok);
                  } catch {
                    setNotifyFailed(true);
                  } finally {
                    setSending(false);
                    setSubscribed(true);
                  }
                }}
              >
                <p className="footer-newsletter-label">
                  Get stories of impact in your inbox.
                </p>
                <div className="footer-newsletter-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-label="Email address"
                    className="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="footer-newsletter-btn"
                  >
                    {sending ? "…" : "Subscribe"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="https://blog.fodfoundation.org" target="_blank" rel="noopener noreferrer">Blog</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get Involved</h4>
            <ul className="footer-links">
              <li><a href="/get-involved">Volunteer</a></li>
              <li><a href="/get-involved#partner">Partner With Us</a></li>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us.</h4>
            <address className="footer-address">
              61 Rathbone Rd, Birmingham,<br />Smethwick B67 5JF, United Kingdom
            </address>
            <ul className="footer-contact-list">
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
                <a href="mailto:info@fodfoundation.org">info@fodfoundation.org</a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+447925799373">+44 7925 799373</a>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+2348135912837">+234 813 591 2837</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Focus on Disability Foundation. All rights reserved.</p>
          <nav className="footer-bottom-links" aria-label="Footer legal">
            <a href="#">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');

        /* ════════════════════════════════
           CTA BANNER
        ════════════════════════════════ */
        .cta-banner {
          position: relative;
          background: var(--brand-dark);
          overflow: hidden;
          padding: 64px 40px;
        }

        .cta-texture {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(ellipse 12px 28px at 6% 30%, rgba(244,117,61,0.18) 0%, transparent 100%),
            radial-gradient(ellipse 10px 24px at 9% 65%, rgba(31,138,130,0.15) 0%, transparent 100%),
            radial-gradient(ellipse 14px 32px at 92% 20%, rgba(244,117,61,0.15) 0%, transparent 100%),
            radial-gradient(ellipse 10px 22px at 88% 55%, rgba(31,138,130,0.13) 0%, transparent 100%),
            radial-gradient(ellipse 12px 28px at 95% 80%, rgba(244,117,61,0.10) 0%, transparent 100%),
            radial-gradient(ellipse 8px 20px at 3% 85%, rgba(31,138,130,0.10) 0%, transparent 100%);
        }

        .cta-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto;
          align-items: center;
          gap: 32px 0;
        }

        .cta-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.15;
          grid-column: 1;
        }

        .cta-divider {
          grid-column: 2;
          width: 1px;
          height: 80px;
          margin: 0 48px;
          background: repeating-linear-gradient(
            to bottom,
            rgba(244,117,61,0.5) 0 5px,
            transparent 5px 10px
          );
        }

        .cta-body {
          grid-column: 3;
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.72);
          line-height: 1.7;
          margin: 0;
        }

        .cta-btn {
          grid-column: 4;
          display: inline-block;
          padding: 16px 32px;
          background: var(--brand-orange);
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          margin-left: 48px;
          box-shadow: 0 4px 24px rgba(244,117,61,0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          background: var(--brand-orange-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(244,117,61,0.45);
        }

        /* ════════════════════════════════
           FOOTER
        ════════════════════════════════ */
        .footer {
          background: #ffffff;
          font-family: 'Montserrat', sans-serif;
          padding: 70px 40px 0;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding-bottom: 60px;
        }

        .footer-logo {
          font-family: 'Montserrat', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: var(--brand-dark);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          line-height: 1;
        }
        .footer-logo-mark {
          height: 76px;
          width: 76px;
        }

        .footer-tagline {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0 0 24px;
          max-width: 280px;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(22,25,28,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-dark);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .social-link:hover {
          background: var(--brand-teal);
          border-color: var(--brand-teal);
          color: #fff;
        }

        .footer-newsletter {
          margin-top: 28px;
          max-width: 320px;
        }

        .footer-newsletter-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--brand-dark);
          margin: 0 0 10px;
        }

        .footer-newsletter-row {
          display: flex;
          border: 1.5px solid rgba(22,25,28,0.15);
          border-radius: 999px;
          overflow: hidden;
        }

        .footer-newsletter-input {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          padding: 10px 16px;
          font-size: 13px;
          font-family: 'Montserrat', sans-serif;
          color: var(--brand-dark);
          outline: none;
        }

        .footer-newsletter-btn {
          border: none;
          background: var(--brand-orange);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 18px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .footer-newsletter-btn:hover {
          background: var(--brand-orange-dark);
        }

        .footer-newsletter-thanks {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 28px;
          max-width: 300px;
          font-size: 13px;
          font-weight: 600;
          color: var(--brand-teal-dark);
          line-height: 1.6;
        }
        .footer-newsletter-thanks-icon {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          margin-top: 2px;
        }

        .footer-newsletter-error {
          margin-top: 10px;
          max-width: 300px;
          font-size: 12px;
          font-weight: 600;
          color: var(--brand-orange-dark);
          line-height: 1.6;
        }

        .footer-col-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-dark);
          margin: 0 0 20px;
          letter-spacing: 0.01em;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          font-size: 14px;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--brand-teal);
        }

        .footer-address {
          font-style: normal;
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-contact-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
        }
        .footer-contact-list svg {
          flex-shrink: 0;
          color: var(--brand-teal);
        }
        .footer-contact-list a {
          font-size: 14px;
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-list a:hover {
          color: var(--brand-teal);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(22,25,28,0.1);
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copy {
          font-size: 13px;
          color: #9ca3af;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-bottom-links a {
          font-size: 13px;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover {
          color: var(--brand-orange);
        }
        .footer-bottom-links span {
          color: rgba(22,25,28,0.15);
          font-size: 13px;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .cta-inner {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
          }
          .cta-heading  { grid-column: 1; grid-row: 1; }
          .cta-divider  { display: none; }
          .cta-body     { grid-column: 2; grid-row: 1; }
          .cta-btn      { grid-column: 1 / -1; grid-row: 2; margin: 0; justify-self: start; }

          .footer-inner { grid-template-columns: 1fr 1fr; gap: 40px 32px; }
        }

        @media (max-width: 600px) {
          .cta-banner { padding: 48px 24px; }
          .cta-inner  { grid-template-columns: 1fr; }
          .cta-body   { grid-column: 1; grid-row: 2; }
          .cta-btn    { grid-row: 3; }

          .footer { padding: 50px 24px 0; }
          .footer-inner { grid-template-columns: 1fr; gap: 36px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const issues = [
  { label: "Community\nVoices", color: "#1F8A82" },
  { label: "Policy\nChange", color: "#F4753D" },
  { label: "Collective\nAction", color: "#146560" },
  { label: "Public\nAwareness", color: "#D9581E" },
  { label: "Social\nEquity", color: "#3AA89F" },
  { label: "Civic\nParticipation", color: "#F79767" },
  { label: "Youth\nPower", color: "#0F5C57" },
];

const COUNT = issues.length;
const RADIUS = 430;

export default function KeyIssuesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ki-section ${montserrat.className}`}
    >
      <div className="ki-bg" />

      <div className="ki-orbit">
        {/* Large Ash Ring */}
        <div className={`ki-ring ${visible ? "ki-ring--on" : ""}`} />

        {/* Rotating Orbit */}
        <div className="ki-rotation">
          {issues.map((issue, i) => {
            const angleDeg = (360 / COUNT) * i;
            const rad = (angleDeg * Math.PI) / 180;

            const x = Math.cos(rad) * RADIUS;
            const y = Math.sin(rad) * RADIUS;

            return (
              <div
                key={issue.label}
                className={`ki-bubble ${
                  visible ? "ki-bubble--on" : ""
                }`}
                style={
                  {
                    "--bc": issue.color,
                    "--tx": `${x}px`,
                    "--ty": `${y}px`,
                    transitionDelay: `${0.05 + i * 0.07}s`,
                  } as React.CSSProperties
                }
              >
                <span>{issue.label}</span>
              </div>
            );
          })}
        </div>

        {/* Center Content */}
        <div className={`ki-center ${visible ? "ki-center--on" : ""}`}>
          <p className="ki-eyebrow">About Us</p>

          <h2>
            Key Issues We
            <br />
            Address Together
          </h2>

          <div className="ki-divider" />

          <p className="ki-body">
            Addressing critical challenges through community engagement,
            collective action together.
          </p>

          <a href="#work" className="ki-cta">
            Explore Our Work
          </a>
        </div>
      </div>

      <style jsx>{`
        .ki-section {
          position: relative;
          width: 100%;
          min-height: 120vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f7f7f7;
          padding: 120px 20px;
        }

        .ki-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(244,117,61,0.10), transparent 45%),
            radial-gradient(circle at 80% 80%, rgba(31,138,130,0.10), transparent 45%);
        }

        /* BIG FULL WIDTH ORBIT AREA */
        .ki-orbit {
          position: relative;
          width: 100%;
          max-width: 1800px;
          height: 1200px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* BIGGER ASH RING */
        .ki-ring {
          position: absolute;
          width: 920px;
          height: 920px;
          border-radius: 50%;
          border: 2px dashed rgba(31, 138, 130, 0.35);

          opacity: 0;
          transform: scale(0.85);

          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .ki-ring--on {
          opacity: 1;
          transform: scale(1);
        }

        /* ROTATION */
        .ki-rotation {
          position: absolute;
          inset: 0;
          animation: orbitRotate 45s linear infinite;
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* BIGGER FLOATING CIRCLES */
        .ki-bubble {
          position: absolute;
          top: 50%;
          left: 50%;

          width: 170px;
          height: 170px;

          border-radius: 50%;
          background: var(--bc);

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
          white-space: pre-line;

          color: white;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.45;

          box-shadow: 0 15px 40px rgba(0,0,0,0.18);

          opacity: 0;

          transform: translate(-50%, -50%) scale(0.4);

          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .ki-bubble--on {
          opacity: 1;

          transform:
            translate(-50%, -50%)
            translate(var(--tx), var(--ty))
            scale(1);
        }

        .ki-bubble:hover {
          transform:
            translate(-50%, -50%)
            translate(var(--tx), var(--ty))
            scale(1.08);

          filter: brightness(1.05);
        }

        /* CENTER CONTENT */
        .ki-center {
          position: absolute;
          width: 420px;

          text-align: center;
          z-index: 5;

          opacity: 0;
          transform: translateY(20px);

          transition:
            opacity 0.8s ease 0.3s,
            transform 0.8s ease 0.3s;
        }

        .ki-center--on {
          opacity: 1;
          transform: translateY(0);
        }

        .ki-eyebrow {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;

          color: var(--brand-orange);
          margin-bottom: 16px;
        }

        .ki-center h2 {
          font-size: clamp(42px, 5vw, 72px);
          font-weight: 800;
          line-height: 1.08;

          color: var(--brand-dark);

          margin: 0;
        }

        .ki-divider {
          width: 90px;
          height: 3px;

          margin: 28px auto;

          background: repeating-linear-gradient(
            90deg,
            var(--brand-orange) 0 6px,
            transparent 6px 12px
          );
        }

        .ki-body {
          font-size: 19px;
          line-height: 2;

          color: #5b6169;

          margin-bottom: 34px;
        }

        .ki-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 18px 40px;

          border-radius: 999px;

          background: var(--brand-orange);
          color: white;

          text-decoration: none;

          font-size: 15px;
          font-weight: 700;

          transition: all 0.3s ease;

          box-shadow: 0 10px 28px rgba(244,117,61,.35);
        }

        .ki-cta:hover {
          background: var(--brand-orange-dark);
          transform: translateY(-3px);
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .ki-orbit {
            height: 950px;
          }

          .ki-ring {
            width: 650px;
            height: 650px;
          }

          .ki-bubble {
            width: 120px;
            height: 120px;
            font-size: 13px;
          }

          .ki-center {
            width: 320px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .ki-section {
            min-height: auto;
            padding: 100px 20px;
          }

          .ki-orbit {
            height: 700px;
          }

          .ki-ring {
            width: 360px;
            height: 360px;
          }

          .ki-bubble {
            width: 80px;
            height: 80px;
            font-size: 9px;
          }

          .ki-center {
            width: 220px;
          }

          .ki-center h2 {
            font-size: 28px;
          }

          .ki-body {
            font-size: 13px;
            line-height: 1.7;
          }

          .ki-cta {
            padding: 12px 24px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
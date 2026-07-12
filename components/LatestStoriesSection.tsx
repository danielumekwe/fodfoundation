"use client";

const posts = [
  {
    tags: ["Environment", "Vaccine"],
    date: "May 14, 2025",
    title: "Sees Boom In Younger Volunteers Following...",
    excerpt: "In the wake of the pandemic, a surprising and ...",
    image: "/story-1.jpg",
    href: "#",
  },
  {
    tags: ["Helping", "Sports"],
    date: "May 11, 2025",
    title: "Breaking Barriers: Empowering Women I...",
    excerpt: "Women in sports continue to challenge stereotypes, redefine leadership, ...",
    image: "/story-2.jpg",
    href: "#",
  },
  {
    tags: ["Activity", "Helping"],
    date: "May 3, 2025",
    title: "Summit To Focus On Responsible Use Of AI...",
    excerpt: "As artificial intelligence becomes more integrated into the nonprofit ...",
    image: "/story-3.jpg",
    href: "#",
  },
];

export default function LatestStoriesSection() {
  return (
    <section className="ls-section">
      <div className="ls-header">
        <p className="ls-eyebrow">Latest New</p>
        <h2 className="ls-heading">Our Latest Stories Here</h2>
        <div className="ls-divider" aria-hidden="true" />
        <p className="ls-subheading">
          Sharing real stories that inspire hope and positive community change.
        </p>
      </div>

      <div className="ls-grid">
        {posts.map((post) => (
          <a key={post.title} href={post.href} className="ls-card">
            <div className="ls-img-wrap">
              <div
                className="ls-img"
                style={{ backgroundImage: `url(${post.image})` }}
                role="img"
                aria-label={post.title}
              />
              <div className="ls-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="ls-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="ls-body">
              <p className="ls-date">{post.date}</p>
              <h3 className="ls-title">{post.title}</h3>
              <p className="ls-excerpt">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');

        .ls-section {
          background: #f7f7f7;
          padding: 90px 40px 100px;
          font-family: 'Montserrat', sans-serif;
        }

        .ls-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 60px;
        }

        .ls-eyebrow {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--brand-orange);
          margin: 0 0 10px;
        }

        .ls-heading {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          color: var(--brand-dark);
          margin: 0 0 18px;
          line-height: 1.1;
          font-family: 'Montserrat', sans-serif;
        }

        .ls-divider {
          width: 160px;
          height: 2px;
          margin: 0 auto 22px;
          background: repeating-linear-gradient(
            90deg,
            var(--brand-orange) 0 6px,
            transparent 6px 11px
          );
        }

        .ls-subheading {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        .ls-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ls-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.3s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.3s ease;
        }

        .ls-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .ls-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 12px;
          margin: 12px 12px 0;
          width: calc(100% - 24px);
        }

        .ls-img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-color: #e5e7eb;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
          border-radius: 12px;
        }

        .ls-card:hover .ls-img {
          transform: scale(1.04);
        }

        .ls-tags {
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .ls-tag {
          background: var(--brand-teal);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 50px;
          line-height: 1;
        }

        .ls-body {
          padding: 20px 22px 26px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .ls-date {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
          margin: 0;
        }

        .ls-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--brand-dark);
          line-height: 1.3;
          margin: 0;
          transition: color 0.2s;
        }

        .ls-card:hover .ls-title {
          color: var(--brand-orange);
        }

        .ls-excerpt {
          font-size: 13.5px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 900px) {
          .ls-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 580px) {
          .ls-section { padding: 60px 20px 70px; }
          .ls-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
import { Montserrat } from "next/font/google";
import { ArrowRight } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const BLOG_URL = "https://fodfoundation.blogspot.com";
const BLOG_HOME_URL = "https://blog.fodfoundation.org";
const FALLBACK_IMAGES = ["/slide2.jpg", "/slide3.jpg", "/images/gallery/gallery-5.jpg"];

type Post = {
  title: string;
  href: string;
  date: string;
  author: string;
  category: string;
  image: string;
};

type FeedEntry = {
  title?: { $t?: string };
  published?: { $t?: string };
  author?: { name?: { $t?: string } }[];
  category?: { term?: string }[];
  content?: { $t?: string };
  media$thumbnail?: { url?: string };
  link?: { rel: string; href: string }[];
};

// Reads the latest posts from the Blogger feed; returns [] if the blog is unreachable.
async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `${BLOG_URL}/feeds/posts/default?alt=json&max-results=3`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const entries: FeedEntry[] = data?.feed?.entry ?? [];

    return entries.map((entry, i) => {
      const inlineImg = entry.content?.$t?.match(/<img[^>]+src="([^"]+)"/)?.[1];
      const thumb = entry.media$thumbnail?.url?.replace(/\/s\d+[^/]*\//, "/s800/");
      return {
        title: entry.title?.$t ?? "Untitled",
        href: entry.link?.find((l) => l.rel === "alternate")?.href ?? BLOG_URL,
        date: entry.published?.$t
          ? new Date(entry.published.$t).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "",
        author: entry.author?.[0]?.name?.$t ?? "FOD Foundation",
        category: entry.category?.[0]?.term ?? "News",
        image: inlineImg ?? thumb ?? FALLBACK_IMAGES[i % FALLBACK_IMAGES.length],
      };
    });
  } catch {
    return [];
  }
}

export default async function BlogSection() {
  const posts = await getPosts();

  return (
    <section className={`bg-[var(--brand-teal-light)] py-24 ${montserrat.className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-lg font-semibold italic text-[var(--brand-teal)]">
            From Our Blog
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-[var(--brand-dark)] md:text-5xl">
            Our Latest <span className="text-[var(--brand-orange)]">News</span> &amp;
            Articles You Like
          </h2>
        </div>

        {posts.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.href}
                className="flex flex-col rounded-[28px] bg-white p-5 shadow-sm transition hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[280px] w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--brand-dark)] px-5 py-2 text-sm font-semibold text-white">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-3 pt-6">
                  <p className="text-sm text-gray-500">
                    {post.author}
                    {post.date && <span> · {post.date}</span>}
                  </p>
                  <h3 className="mt-3 flex-1 text-xl font-bold leading-snug text-[var(--brand-dark)]">
                    {post.title}
                  </h3>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--brand-dark)] underline underline-offset-4 hover:text-[var(--brand-orange)]"
                  >
                    Read More
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-teal)] text-white">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-xl text-center text-gray-600">
            Stories and updates from the foundation are published on our blog.
          </p>
        )}

        <div className="mt-12 text-center">
          <a
            href={BLOG_HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold text-white transition hover:bg-[var(--brand-orange-dark)]"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}

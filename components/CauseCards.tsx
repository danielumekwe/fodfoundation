"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const causes = [
  {
    image: "/images/gallery/gallery-6.jpg",
    tag: "Mobility",
    title: "Restoring Mobility & Independence",
    text: "Wheelchairs, white canes, and mobility aids that give children and adults their freedom, dignity, and a return to community life.",
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    tag: "Skills",
    title: "Building Skills for Self-Sufficiency",
    text: "Life, social, and vocational skills that help people with disabilities earn a living and take control of their futures.",
  },
  {
    image: "/images/gallery/gallery-1.jpg",
    tag: "Care",
    title: "Caring for Vulnerable Children",
    text: "Care, shelter, and a nurturing home for vulnerable children with disabilities, so they can reach their full potential.",
  },
  {
    image: "/slide3.jpg",
    tag: "Awareness",
    title: "Educating Families & Communities",
    text: "Challenging stigma and myths so that people with disabilities are welcomed, not hidden away.",
  },
  {
    image: "/images/gallery/gallery-5.jpg",
    tag: "Education",
    title: "Educational Materials & Aids",
    text: "School materials and assistive learning tools that remove the practical barriers keeping children out of the classroom.",
  },
  {
    image: "/slide2.jpg",
    tag: "Advocacy",
    title: "Campaigning for Change",
    text: "Working with partners in Nigeria and abroad for equal rights and fuller implementation of disability-protection laws.",
  },
];

export default function CauseCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          className="cause-swiper !pb-14"
        >
          {causes.map((item) => (
            <SwiperSlide key={item.title} className="!h-auto">
              <div className="group flex h-full flex-col rounded-[28px] bg-gray-100 p-2.5 transition hover:shadow-xl">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--brand-orange)] px-5 py-2 text-sm font-semibold text-white">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-2.5 flex flex-1 flex-col rounded-[22px] bg-white p-6">
                  <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                  <Link
                    href="/donate"
                    className="mt-6 inline-flex self-start rounded-full bg-[var(--brand-teal)] px-7 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-teal-dark)]"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

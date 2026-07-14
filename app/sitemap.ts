import { MetadataRoute } from "next";

const siteUrl = "https://fodfoundation.org";

const pages = [
  "",
  "about",
  "contact",
  "donate",
  "gallery",
  "get-involved",
  "home-2",
  "team",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: `${siteUrl}/${page}`,
    lastModified,
  }));
}

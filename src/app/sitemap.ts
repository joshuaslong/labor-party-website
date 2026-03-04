import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";

const BASE_URL = "https://votelabor.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogSlugs, platformSlugs] = await Promise.all([
    client.fetch<{ slug: string; publishedAt: string }[]>(
      `*[_type == "blogPost"] | order(publishedAt desc) { "slug": slug.current, publishedAt }`
    ),
    client.fetch<{ slug: string }[]>(
      `*[_type == "platformSection"] { "slug": slug.current }`
    ),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/platform`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/join`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.9 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const platformRoutes: MetadataRoute.Sitemap = platformSlugs.map((section) => ({
    url: `${BASE_URL}/platform/${section.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...platformRoutes, ...blogRoutes];
}

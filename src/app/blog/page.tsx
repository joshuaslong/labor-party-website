import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { allBlogPostsQuery, allCategoriesQuery } from "@/lib/sanity/queries";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BlogList } from "@/components/features/BlogList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, policy analysis, and updates from the Labor Party.",
};

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  author: string;
  featuredImage?: { asset: { _ref: string }; alt?: string };
  category?: { title: string; slug: string };
}

interface Category {
  _id: string;
  title: string;
  slug: string;
}

async function getData() {
  const [posts, categories] = await Promise.all([
    client.fetch<Post[]>(allBlogPostsQuery, {}, { next: { tags: ["blog-index"] } }),
    client.fetch<Category[]>(allCategoriesQuery, {}, { next: { tags: ["blog-index"] } }),
  ]);
  return { posts, categories };
}

export default async function BlogPage() {
  const { posts, categories } = await getData();

  return (
    <Section>
      <Reveal>
        <h1 className={styles.title}>Blog</h1>
      </Reveal>
      <BlogList posts={posts} categories={categories} />
    </Section>
  );
}

"use client";

import { useState } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { BlogCard } from "./BlogCard";
import styles from "./BlogList.module.css";

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  author: string;
  featuredImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  category?: {
    title: string;
    slug: string;
  };
}

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) => p.category?.slug === activeCategory)
    : posts;

  return (
    <div>
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className={styles.grid}>
        {filtered.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className={styles.empty}>No posts in this category yet.</p>
        )}
      </div>
    </div>
  );
}

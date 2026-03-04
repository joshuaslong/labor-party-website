"use client";

import styles from "./CategoryFilter.module.css";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface CategoryFilterProps {
  categories: Category[];
  active: string | null;
  onChange: (slug: string | null) => void;
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filters} role="group" aria-label="Filter by category">
      <button
        className={`${styles.pill} ${active === null ? styles.active : ""}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat._id}
          className={`${styles.pill} ${active === cat.slug ? styles.active : ""}`}
          onClick={() => onChange(cat.slug)}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}

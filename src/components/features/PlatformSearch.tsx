"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Card } from "@/components/ui/Card";
import styles from "./PlatformSearch.module.css";

interface PlatformItem {
  _id: string;
  title: string;
  slug: string;
  summary: string;
}

interface PlatformSearchProps {
  sections: PlatformItem[];
}

export function PlatformSearch({ sections }: PlatformSearchProps) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(sections, {
        keys: ["title", "summary"],
        threshold: 0.4,
        includeScore: true,
      }),
    [sections]
  );

  const results = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : sections;

  return (
    <div>
      <div className={styles.searchWrap}>
        <input
          type="search"
          placeholder="Search the platform..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
          aria-label="Search platform sections"
        />
        {query && (
          <span className={styles.count}>
            {results.length} {results.length === 1 ? "section" : "sections"}
          </span>
        )}
      </div>

      <div className={styles.grid}>
        {results.map((section) => (
          <Card key={section._id} href={`/platform/${section.slug}`}>
            <h3 className={styles.cardTitle}>{section.title}</h3>
            <p className={styles.cardSummary}>{section.summary}</p>
          </Card>
        ))}
        {results.length === 0 && (
          <p className={styles.noResults}>
            No sections match your search. Try a different term.
          </p>
        )}
      </div>
    </div>
  );
}

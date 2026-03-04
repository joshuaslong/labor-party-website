"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./StickyComparison.module.css";

interface ComparisonItem {
  them: string;
  us: string;
}

interface StickyComparisonProps {
  items: ComparisonItem[];
}

function ComparisonRow({
  item,
  index,
  total,
  progress,
}: {
  item: ComparisonItem;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const activePoint = start + segmentSize * 0.3;
  const end = start + segmentSize;

  const opacity = useTransform(progress, [start, activePoint, end], [0, 1, 1]);
  const y = useTransform(progress, [start, activePoint], [30, 0]);

  return (
    <motion.div className={styles.row} style={{ opacity, y }}>
      <div className={styles.themCell}>
        <span className={styles.strikethrough}>{item.them}</span>
      </div>
      <div className={styles.usCell}>
        {item.us}
      </div>
    </motion.div>
  );
}

export function StickyComparison({ items }: StickyComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className={styles.container} style={{ height: `${(items.length + 1) * 50}vh` }}>
      <div className={styles.sticky}>
        <div className={styles.header}>
          <div className={styles.headerThem}>Both Parties</div>
          <div className={styles.headerUs}>The Labor Party</div>
        </div>
        <div className={styles.rows}>
          {items.map((item, i) => (
            <ComparisonRow
              key={i}
              item={item}
              index={i}
              total={items.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

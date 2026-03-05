"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./StackingCards.module.css";

interface StackingCard {
  title: string;
  summary: string;
  href: string;
}

interface StackingCardsProps {
  items: StackingCard[];
}

function Card({
  item,
  index,
  total,
  progress,
}: {
  item: StackingCard;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const midpoint = start + segmentSize * 0.5;
  const end = (index + 1) * segmentSize;

  // Card enters: scales from 0.95 → 1, fades in
  const scale = useTransform(progress, [start, midpoint, end], [0.95, 1, 0.97]);
  const opacity = useTransform(progress, [start, midpoint, end], [0.3, 1, 0.7]);
  const y = useTransform(progress, [start, midpoint], [40, 0]);

  return (
    <motion.a
      href={item.href}
      className={styles.card}
      style={{
        scale,
        opacity,
        y,
        zIndex: index + 1,
        top: `${56 + index * 8}px`,
      }}
    >
      <div className={styles.cardNumber}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardSummary}>{item.summary}</p>
      </div>
      <div className={styles.cardArrow} aria-hidden="true">
        &#8594;
      </div>
    </motion.a>
  );
}

export function StackingCards({ items }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ height: `${(items.length + 1) * 60}vh` }}
    >
      <div className={styles.sticky}>
        {items.map((item, i) => (
          <Card
            key={item.href}
            item={item}
            index={i}
            total={items.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

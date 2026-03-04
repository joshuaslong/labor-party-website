"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./FullBleedDivider.module.css";

interface FullBleedDividerProps {
  imageSrc: string;
  alt: string;
  height?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export function FullBleedDivider({
  imageSrc,
  alt,
  height = "50vh",
  overlay = true,
  children,
}: FullBleedDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={styles.container} style={{ height }} role="img" aria-label={alt}>
      <motion.div
        className={styles.imageLayer}
        style={{
          backgroundImage: `url(${imageSrc})`,
          y: bgY,
        }}
      />
      {overlay && <div className={styles.overlay} />}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}

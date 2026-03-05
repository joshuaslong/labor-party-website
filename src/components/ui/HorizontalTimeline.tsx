"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./HorizontalTimeline.module.css";

interface TimelineNode {
  date: string;
  title: string;
  description: string;
}

interface HorizontalTimelineProps {
  nodes: TimelineNode[];
}

export function HorizontalTimeline({ nodes }: HorizontalTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll → horizontal translation
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["0%", `-${(nodes.length - 1) * 25}%`]
  );

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ height: `${nodes.length * 50}vh` }}
    >
      <div className={styles.sticky}>
        <div className={styles.track}>
          <motion.div className={styles.rail} style={{ x }}>
            {nodes.map((node, i) => (
              <div key={i} className={styles.node}>
                <div className={styles.diamond} />
                <div className={styles.date}>{node.date}</div>
                <h3 className={styles.title}>{node.title}</h3>
                <p className={styles.description}>{node.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Timeline track line */}
        <div className={styles.line} />
      </div>
    </div>
  );
}

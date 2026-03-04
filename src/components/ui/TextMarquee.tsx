"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./TextMarquee.module.css";

interface TextMarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
}

export function TextMarquee({
  items,
  speed = 40,
  separator = "\u00A0\u00A0\u2022\u00A0\u00A0",
}: TextMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const text = items.join(separator) + separator;
  const duration = text.length / speed;

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div
        ref={trackRef}
        className={styles.track}
        style={{
          animationDuration: prefersReducedMotion ? "0s" : `${duration}s`,
          animationPlayState: prefersReducedMotion ? "paused" : "running",
        }}
      >
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}

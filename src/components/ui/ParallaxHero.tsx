"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import styles from "./ParallaxHero.module.css";

interface ParallaxHeroProps {
  children: React.ReactNode;
}

export function ParallaxHero({ children }: ParallaxHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bisonY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bisonScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const bisonOpacity = useTransform(scrollYProgress, [0, 0.8], [0.12, 0.04]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Bison watermark — top right */}
      <motion.div
        className={styles.bisonLayer}
        style={{ y: bisonY, scale: bisonScale, opacity: bisonOpacity }}
      >
        <Image
          src="/images/Bison3.svg"
          alt=""
          width={900}
          height={720}
          priority
          aria-hidden="true"
          className={styles.bisonImage}
        />
      </motion.div>

      {/* Content — pinned to bottom of hero */}
      <motion.div className={styles.content} style={{ y: contentY }}>
        {children}
      </motion.div>
    </section>
  );
}

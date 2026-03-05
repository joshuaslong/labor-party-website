"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import styles from "./StickyJoinCTA.module.css";

export function StickyJoinCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDismissed(sessionStorage.getItem("cta-dismissed") === "true");
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past 600px (roughly past hero)
    setVisible(latest > 600);
  });

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("cta-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <motion.div
      className={styles.bar}
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <p className={styles.text}>
          <strong>Join the movement.</strong> Political power for working people.
        </p>
        <div className={styles.actions}>
          <a
            href="https://members.votelabor.org"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Member
          </a>
          <button
            className={styles.dismiss}
            onClick={handleDismiss}
            aria-label="Dismiss"
          >
            &#10005;
          </button>
        </div>
      </div>
    </motion.div>
  );
}

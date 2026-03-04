"use client";

import CountUp from "react-countup";
import styles from "./AnimatedCounter.module.css";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

interface AnimatedCounterProps {
  stats: Stat[];
}

export function AnimatedCounter({ stats }: AnimatedCounterProps) {
  return (
    <div className={styles.grid}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.stat}>
          <span className={styles.value}>
            <CountUp
              end={stat.value}
              prefix={stat.prefix || ""}
              suffix={stat.suffix || ""}
              decimals={stat.decimals || 0}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
              scrollSpyDelay={i * 150}
            />
          </span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

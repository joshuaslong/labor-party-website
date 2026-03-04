import styles from "./Section.module.css";

interface SectionProps {
  bg?: "default" | "alt" | "accent";
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ bg = "default", children, className = "", id }: SectionProps) {
  return (
    <section
      className={`${styles.section} ${styles[bg]} ${className}`.trim()}
      id={id}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

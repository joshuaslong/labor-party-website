import styles from "./Divider.module.css";

interface DividerProps {
  variant?: "diamond" | "heavy" | "accent";
}

export function Divider({ variant = "diamond" }: DividerProps) {
  if (variant === "heavy") {
    return <div className={styles.heavy} role="separator" />;
  }

  if (variant === "accent") {
    return <div className={styles.accentRule} role="separator" />;
  }

  return (
    <div className={styles.divider} role="separator">
      <div className={styles.mark} />
    </div>
  );
}

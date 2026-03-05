import styles from "./ValuePropCard.module.css";

interface ValuePropCardProps {
  number: number;
  title: string;
  description: string;
}

export function ValuePropCard({ number, title, description }: ValuePropCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.ordinal}>
        {String(number).padStart(2, "0")}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

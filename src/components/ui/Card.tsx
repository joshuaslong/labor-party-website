import Link from "next/link";
import styles from "./Card.module.css";

interface CardProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ href, children, className = "" }: CardProps) {
  const classes = `${styles.card} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={`${classes} ${styles.linked}`}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

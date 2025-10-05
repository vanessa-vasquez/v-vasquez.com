import styles from "./Badge.module.css";

interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return (
    <div className={styles.badgeContainer}>
      <span className={styles.badgeLabel}>{label}</span>
    </div>
  );
};

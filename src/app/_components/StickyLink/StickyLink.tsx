import styles from "./StickyLink.module.css";

export default function StickyLink({ link }: { link: string }) {
  return (
    <a
      href={link}
      className={styles.linkText}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Check out this asset (opens in new tab)"
    >
      {link}
    </a>
  );
}

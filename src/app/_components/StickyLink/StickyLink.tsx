import styles from "./StickyLink.module.css";

export default function StickyLink({ link }: { link: string }) {
  return (
    <a
      href={link}
      className={styles.linkText}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  );
}

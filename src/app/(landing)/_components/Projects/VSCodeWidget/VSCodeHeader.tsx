import { Search } from "@icons";
import styles from "./VSCodeHeader.module.css";

export function VSCodeHeader() {
  return (
    <div className={styles.vsCodeSearchBar}>
      <div className={styles.vsCodeButtons}>
        <div className={styles.vsCodeButton}></div>
        <div className={styles.vsCodeButton}></div>
        <div className={styles.vsCodeButton}></div>
      </div>
      <div className={styles.vsCodeFinder}>
        <Search />
        <span>vanessa&apos;s projects</span>
      </div>
    </div>
  );
}

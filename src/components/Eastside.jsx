import styles from "./Eastside.module.css";

export default function Eastside({ children }) {
  return (
    <div className={styles.sixthblock}>
      <b className={styles.text}>EASTSIDE</b>
      <div className={styles.sixth}>{children}</div>
    </div>
  );
}

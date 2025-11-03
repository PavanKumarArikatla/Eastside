import styles from "./WinterStyles.module.css";

export default function WinterStyles() {
  return (
    <div className={styles.fifth}>
      <div>
        <img src="./Jackets.png" alt="Jackets" />
        <br></br>
        <b>Jackets</b>
      </div>

      <div>
        <img src="./Hoodie.png" alt="Hoodie" />
        <br></br>
        <b>Hoodies</b>
      </div>
    </div>
  );
}

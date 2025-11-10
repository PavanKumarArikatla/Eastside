import { Link } from "react-router-dom";
import styles from "./WinterStyles.module.css";

export default function WinterStyles() {
  return (
    <div className={styles.fifth}>
      <Link to="beauty">
        <div>
          <img src="./Jackets.png" alt="Jackets" />
          <b>Jackets</b>
        </div>
      </Link>

      <Link to="more">
        <div>
          <img src="./Hoodie.png" alt="Hoodie" />
          <b>Hoodies</b>
        </div>
      </Link>
    </div>
  );
}

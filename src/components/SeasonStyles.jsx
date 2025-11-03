import { Link } from "react-router-dom";
import styles from "./SeasonStyles.module.css";

export default function SeasonStyles({ season }) {
  return (
    <>
      {season === "Summer" ? (
        <div className={styles.firstblock}>
          <p>STYLISH SUMMER SALE</p>
          <strong>WOMENS</strong>
          <br></br>

          <Link to="/men">
            <button className={styles.button}>Explore Now</button>
          </Link>
        </div>
      ) : (
        <Link to="/women">
          <div className={styles.secondblock}>
            <p>
              <b>WINTER</b> is Coming
            </p>
            <span>Starting at just $49.99</span>
          </div>
        </Link>
      )}
    </>
  );
}

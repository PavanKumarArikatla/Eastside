import styles from "./CollectionStyles.module.css";
import { Link } from "react-router-dom";

function CollectionStyles() {
  return (
    <div>
      {/* how to style ui depends on ui screen size? */}
      <div className={styles.firstblock}>
        <div className={styles.firstimage}>
          <Link to="/women">
            <span className={styles.span}>
              <strong>Women</strong> Collection
            </span>
          </Link>
        </div>

        <div className={styles.secondblock}>
          <div className={styles.secondimage}>
            <Link to="/men">
              <span className={styles.span}>
                <strong>Men</strong> Collection
              </span>
            </Link>
          </div>

          <div className={styles.thirdblock}>
            <div className={styles.thirdimage}>
              <Link to="/kids">
                <span className={styles.span}>
                  <strong>Kids</strong> Collection
                </span>
              </Link>
            </div>

            <div className={styles.fourthimage}>
              <Link to="/beauty">
                <span className={styles.span}>
                  <strong>Beauty</strong>& More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.imagefirst}>
          <Link to="/women">
            <div className={styles.some}>
              <strong>Women </strong> Collection
            </div>
          </Link>
        </div>
        <div className={styles.imagesecond}>
          <Link to="/men">
            <div className={styles.some}>
              <strong>Men </strong> Collection
            </div>
          </Link>
        </div>
        <div className={styles.imagethird}>
          <Link to="/kids">
            <div className={styles.some}>
              <strong>Kids </strong> Collection
            </div>
          </Link>
        </div>
        <div className={styles.imagefourth}>
          <Link to="/beauty">
            <div className={styles.some}>
              <strong>Beauty </strong>& More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CollectionStyles;

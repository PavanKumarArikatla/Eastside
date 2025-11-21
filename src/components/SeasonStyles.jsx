import { Link } from "react-router-dom";
import styles from "./SeasonStyles.module.css";
import { useContext, useEffect, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";

export default function SeasonStyles({ season }) {
  const { summerstyles, winterstyles } = useContext(StylesContext);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!summerstyles) return;

    const interval = setInterval(() => {
      setIndex((index) => (index === summerstyles.length - 1 ? 0 : index + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [summerstyles, winterstyles]);
  return (
    <div>
      {summerstyles?.length > 0 || winterstyles?.length > 0 ? (
        <>
          {season === "Summer" ? (
            <div className={`${styles.slider} ${styles.summerborder}`}>
              <div
                className={styles.sliderInner}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {summerstyles.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Slide ${i}`}
                    className={styles.image}
                  />
                ))}
              </div>
              <div className={styles.season}>
                <p>STYLISH SUMMER SALE</p>
                <strong>WOMENS</strong>
                <br></br>
                <Link to="/men">
                  <button className={styles.button}>Explore Now</button>
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/women">
              <div className={`${styles.slider} ${styles.winterborder}`}>
                <div
                  className={styles.sliderInner}
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {winterstyles.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Slide ${i}`}
                      className={styles.image}
                    />
                  ))}
                </div>
                <div className={styles.season}>
                  <p>
                    <b>WINTER</b> is Coming
                  </p>
                  <span className={styles.span}>Starting at just $49.99</span>
                </div>
              </div>
            </Link>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

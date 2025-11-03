import { useContext } from "react";
import Card from "../reusedComponents/Card";
import styles from "./TrendyLimited.module.css";
import { StylesContext } from "../contexts/StylesContext";

export default function TrendyLimited({ style, products }) {
  const { addItems } = useContext(StylesContext);

  return (
    <div className={styles.mainthird}>
      <div className={styles.maintitle}>
        {style == "trendyProducts" ? (
          <b>OUR TRENDY PRODUCTS</b>
        ) : (
          <b>LIMITED EDITION</b>
        )}
      </div>
      <div className={styles.thirdblock}>
        {products?.map((card) => (
          <Card
            card={card}
            // image={card.image}
            addItems={addItems}
            // style={card.style}
            // price={card.price}
            key={card.style}
          />
        ))}
      </div>
    </div>
  );
}

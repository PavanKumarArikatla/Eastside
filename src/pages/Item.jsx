import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./Item.module.css";

export default function Item({ item }) {
  const { deleteItem } = useContext(StylesContext);

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.style} />
      <div className={styles.details}>
        <b>{item.brand}</b>
        <p>{item.type}</p>
        <p>
          $
          {Number((item.price - item.price * (item.discount / 100)).toFixed(2))}{" "}
          <b className={styles.amount}> ${item.price}</b>
        </p>
        <ul>
          <li>XS</li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>

        <div className={styles.quantityButton}>
          <form>
            <select className={styles.select}>
              <option>Qty:1</option>
              <option>Qty:2</option>
              <option>Qty:3</option>
              <option>Qty:4</option>
              <option>Qty:5</option>
            </select>
          </form>
          <button
            className={styles.deleteButton}
            onClick={() => deleteItem(item.id)}
          >
            Delete &#10006;
          </button>
        </div>
      </div>
    </div>
  );
}

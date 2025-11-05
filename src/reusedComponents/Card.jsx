import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useEffect } from "react";

export default function Card({ card, addItems }) {
  return (
    <div className={styles.card}>
      <div>
        <Link to="/item" state={card}>
          <img src={card.image} alt={card.style} />
        </Link>
        <b>{card.style}</b>
        <pre>${card.price}</pre>
        <button className={styles.button} onClick={() => addItems(card)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

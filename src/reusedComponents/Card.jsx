import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ card, addItems }) {
  // const {image, style, price, onClick} = useContext(CardsContext)
  return (
    <div className={styles.third}>
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

import { useLocation } from "react-router-dom";
import styles from "./ItemDetails.module.css";
import AppNavigation from "../reusedComponents/AppNavigation";

import AddItemOrderButton from "../reusedComponents/AddItemOrderButton";

export default function ItemDetails() {
  //  receiving props through <Link>
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <AppNavigation />

      <div className={styles.item}>
        <div className={styles.images}>
          <img src={item.image} alt={item.style} />
          <img src={item.image} alt={item.style} />
        </div>

        <div className={styles.details}>
          <strong>{item.brand}</strong>
          {item.type}
          <hr></hr>

          <pre>
            $
            {Number(
              (item.price - item.price * (item.discount / 100)).toFixed(2)
            )}{" "}
            <small className="text-stone-400">
              <span className="line-through"> ${item.price}</span>
            </small>{" "}
            <small>({item.discount}% off)</small>
          </pre>

          <small className="text-teal-700">Inclusive of all taxes</small>
          <ul className={styles.list}>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
          <br></br>
          <AddItemOrderButton>Add to bag</AddItemOrderButton>
        </div>
      </div>
    </>
  );
}

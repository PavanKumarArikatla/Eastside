import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
  const navigate = useNavigate();
  const { count, search, setSearch, handleChange } = useContext(StylesContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (search) navigate("/search");
  }
  return (
    <div className={styles.nav}>
      <NavLink to="/">
        <img src="logo.jpg" alt="Eastside" />
      </NavLink>
      <p>
        <NavLink to="/men">Men</NavLink>
      </p>
      <p>
        <NavLink to="/women">Women</NavLink>
      </p>
      <p>
        <NavLink to="/kids">Kids</NavLink>
      </p>
      <p>
        <NavLink to="/beauty">Beauty</NavLink>
      </p>
      <p>
        <NavLink to="/more">More</NavLink>
      </p>

      {/* when ever we type someting in the input element, component will re render(wasted renders) */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </form>
      <NavLink to="/login">
        <li>
          <i className="fa-regular fa-user"></i>
        </li>
      </NavLink>

      <NavLink to="/wishlist">
        <li>
          <i className="fa-regular fa-heart"></i>
        </li>
      </NavLink>

      <NavLink to="/cart">
        <li>
          <i className="fa-solid fa-cart-shopping"></i>({count})
        </li>
      </NavLink>
    </div>
  );
}

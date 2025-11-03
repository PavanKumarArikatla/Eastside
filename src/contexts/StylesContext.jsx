import { createContext } from "react";
import { useState, useEffect } from "react";

export const StylesContext = createContext();

export default function CardProvider({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allStyles, setAllStyles] = useState([]);
  // 1 dummy cart item
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "./MensPage/Shirts.jpg",
      style: "Shirts",
      price: "58.99",
      type: "BULLMER Trendy Printed Cotton Blend Crew Neck",
      brand: "Bear Brown",
      return: "Non returnable",
      discount: "20",
    },
  ]);
  const count = cartItems.length;
  const {
    mensStyles,
    womenStyles,
    trendyProducts,
    limitedEditionProducts,
    eastsideProducts,
  } = allStyles;

  function filterProducts(products) {
    return products.filter((item) =>
      Object.values(item)
        .toString()
        .toLocaleLowerCase()
        .includes(search.toString().toLocaleLowerCase())
    );
  }

  const mens = search && mensStyles && filterProducts(mensStyles);
  const women = search && womenStyles && filterProducts(womenStyles);
  const trendy = search && trendyProducts && filterProducts(trendyProducts);
  const limitedEdition =
    search && limitedEditionProducts && filterProducts(limitedEditionProducts);
  const eastside =
    search && eastsideProducts && filterProducts(eastsideProducts);

  const searchResults = [
    ...mens,
    ...women,
    ...trendy,
    ...limitedEdition,
    ...eastside,
  ];

  function addItems(card) {
    setCartItems((cartItems) => [...cartItems, card]);
  }

  function deleteItem(id) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  useEffect(function () {
    setLoading(true);
    async function getAllStyles() {
      const res = await fetch("http://localhost:3001/data");
      const styles = await res.json();
      setAllStyles(styles);
      setLoading(false);
    }
    getAllStyles();
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <StylesContext.Provider
      value={{
        mensStyles,
        womenStyles,
        trendyProducts,
        limitedEditionProducts,
        eastsideProducts,
        searchResults,
        cartItems,
        addItems,
        deleteItem,
        loading,
        count,
        search,
        setSearch,
        handleChange,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
}

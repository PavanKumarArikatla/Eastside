import { useContext } from "react";
import BackButton from "../reusedComponents/BackButton";
import Shopping from "../reusedComponents/Shopping";
import { StylesContext } from "../contexts/StylesContext";
import Item from "./Item";

export default function Wishlist() {
  const { wishlist } = useContext(StylesContext);
  return (
    <div className="homecontainer">
      <BackButton />

      {wishlist ? (
        wishlist.map((item) => <Item item={item} key={item.id} />)
      ) : (
        <>Your wishlist is empty</>
      )}
    </div>
  );
}

import { useContext } from "react";
import Card from "../../reusedComponents/Card";
import AppNavigation from "../../reusedComponents/AppNavigation";
import Shopping from "../../reusedComponents/Shopping";
import { StylesContext } from "../../contexts/StylesContext";

export default function Kids() {
  const { trendyProducts, loading, addItems } = useContext(StylesContext);
  return (
    <div className="homecontainer">
      <Shopping>
        {loading
          ? "Loading..."
          : trendyProducts?.map((card) => (
              <Card card={card} addItems={addItems} key={card.style} />
            ))}
      </Shopping>
    </div>
  );
}

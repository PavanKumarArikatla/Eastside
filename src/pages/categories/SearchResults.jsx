import { useContext } from "react";
import Card from "../../reusedComponents/Card";
import AppNavigation from "../../reusedComponents/AppNavigation";
import Shopping from "../../reusedComponents/Shopping";
import { StylesContext } from "../../contexts/StylesContext";

export default function SearchResults() {
  const { searchResults, addItems } = useContext(StylesContext);
  return (
    <div className="homecontainer">
      <AppNavigation />

      {searchResults ? (
        <Shopping>
          {searchResults.map((card) => (
            <Card card={card} addItems={addItems} key={card.style} />
          ))}
        </Shopping>
      ) : (
        <div className="text-center">Search for an item</div>
      )}
      {/* <Shopping>
        {searchResults ? (
          searchResults.map((card) => (
            <Card card={card} addItems={addItems} key={card.style} />
          ))
        ) : (
          <div className="text-center">Search for an item</div>
        )}
      </Shopping> */}
    </div>
  );
}

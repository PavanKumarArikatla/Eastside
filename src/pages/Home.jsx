import { useContext } from "react";
import SeasonStyles from "../components/SeasonStyles";
import CollectionStyles from "../components/CollectionStyles";
import TrendyLimited from "../components/TrendyLimited";
import WinterStyles from "../components/WinterStyles";
import Eastside from "../components/Eastside";
import Footer from "../components/Footer";
import { StylesContext } from "../contexts/StylesContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { trendyProducts, limitedEditionProducts, eastsideProducts } =
    useContext(StylesContext);
  return (
    <div>
      <div className="homecontainer">
        <SeasonStyles season="Summer" />

        <CollectionStyles />

        <TrendyLimited style="trendyProducts" products={trendyProducts} />

        <SeasonStyles />

        <WinterStyles season="Winter" />

        <TrendyLimited products={limitedEditionProducts} />

        <Eastside>
          {eastsideProducts?.map((pic) => (
            <Link to="men">
              <img src={pic.image} alt="" key={pic.id} />
            </Link>
          ))}
        </Eastside>
      </div>

      <Footer />
    </div>
  );
}

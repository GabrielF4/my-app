import "./App.css";
import PriceCalculator from "./priceCalculator/PriceCalculator";
import BrandSearch from "./brandSearch/BrandSearch";

function App() {
    return (
        <div className="appContainer">
            <div className="brandSearchContainer">
                <BrandSearch />
            </div>
            <div className="priceCalcContainer">
                <PriceCalculator />
            </div>
        </div>
    );
}

export default App;

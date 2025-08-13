import { useState } from "react";
import "./App.css";
import PriceCalculator from "./PriceCalculator";
import BrandSearch from "./BrandSearch";

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

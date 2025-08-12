import { useState } from "react";
import "./App.css";
import PriceCalculator from "./PriceCalculator";
import BrandSearch from "./BrandSearch";

function App() {
    return (
        <div className="appContainer">
            <PriceCalculator />
            <BrandSearch />
        </div>
    );
}

export default App;

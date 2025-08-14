import { useState } from "react";
import "./App.css";
import PriceCalculator from "./priceCalculator/PriceCalculator";
import BrandSearch from "./brandSearch/BrandSearch";

function App() {
    const [activeTab, setActiveTab] = useState("brandSearch");

    const renderTabContent = () => {
        switch (activeTab) {
            case "brandSearch":
                return <BrandSearch />;
            case "priceCalc":
                return <PriceCalculator />;
            default:
                return <BrandSearch />;
        }
    };

    return (
        <>
            <nav className="nav-bar">
                <div
                    className="tab"
                    onClick={() => setActiveTab("brandSearch")}
                >
                    Märkessökning
                </div>
                <div className="tab" onClick={() => setActiveTab("priceCalc")}>
                    Prissättning
                </div>
            </nav>
            <div className="appContainer">{renderTabContent()}</div>
        </>
    );
}

export default App;

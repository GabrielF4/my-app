import { useState, useEffect } from "react";
import "./App.css";
import PriceCalculator from "./priceCalculator/PriceCalculator";
import BrandSearch from "./brandSearch/BrandSearch";
import logo from "../assets/logo.png";

function App() {
    //State for active tab
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem("activeTab") || "brandSearch";
    });

    //Get active tab from local storage on load
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    //Render content based on the activeTab state
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
            <header>
                <img
                    src={logo}
                    alt="Svenska Röda Korset Logotyp"
                    className="logo"
                />
            </header>
            <main>
                <>
                    <nav className="nav-bar">
                        <div
                            className="tab"
                            onClick={() => setActiveTab("brandSearch")}
                        >
                            Märkessökning
                        </div>
                        <div
                            className="tab"
                            onClick={() => setActiveTab("priceCalc")}
                        >
                            Prissättning
                        </div>
                    </nav>
                    <div className="appContainer">{renderTabContent()}</div>
                </>
            </main>
            <footer>
                Obs! This is a private project and isn't made by the red cross
                brand.
            </footer>
        </>
    );
}

export default App;

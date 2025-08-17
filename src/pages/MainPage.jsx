import { useState, useEffect } from "react";
import "./mainPage.css";
import PriceCalculator from "../components/priceCalculator/PriceCalculator";
import BrandSearch from "../components/brandSearch/BrandSearch";

function MainPage() {
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
            <nav className="nav-bar">
                {/*Brand-search tab*/}
                <div
                    className="tab"
                    onClick={() => setActiveTab("brandSearch")}
                >
                    Märkessökning
                </div>
                {/*Price-calculation tab*/}
                <div className="tab" onClick={() => setActiveTab("priceCalc")}>
                    Prissättning
                </div>
            </nav>
            <div className="appContainer">
                {
                    //Depending on which tab is clicked the matching component is loaded
                    renderTabContent()
                }
            </div>
        </>
    );
}

export default MainPage;

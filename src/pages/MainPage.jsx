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
            <div className="mobile-load">
                <nav className="nav-bar">
                    {/*Brand-search tab*/}
                    <div
                        className="tab"
                        onClick={() => setActiveTab("brandSearch")}
                    >
                        Märkessökning
                    </div>
                    {/*Price-calculation tab*/}
                    <div
                        className="tab"
                        onClick={() => setActiveTab("priceCalc")}
                    >
                        Prissättning
                    </div>
                    <div className="tab" onClick={() => console.log("Admin")}>
                        Admin
                    </div>
                </nav>
                <div className="appContainer">
                    {
                        //Depending on which tab is clicked the matching component is loaded
                        renderTabContent()
                    }
                </div>
            </div>
            <div className="desktop-load">
                <nav className="nav-bar">
                    {/*Prissättning tab*/}
                    <div
                        className="tab"
                        onClick={() => console.log("Prissättning")}
                    >
                        Prissätting
                    </div>
                    {/*Admin tab*/}
                    <div className="tab" onClick={() => console.log("Admin")}>
                        Admin
                    </div>
                </nav>
                <div className="desktop-screen">
                    <div className="brand-section">
                        <BrandSearch />
                    </div>
                    <div className="calc-section">
                        <PriceCalculator />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;

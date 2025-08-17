import { useState, useEffect } from "react";
import "./PriceCalculator.css";
import CategorySelecttion from "./priceCalcSections/CategorySelection.jsx";
import PriceValueSection from "./priceCalcSections/PriceValueSection.jsx";
import {
    data_barn,
    data_dam,
    data_herr,
    data_sport,
} from "../../utils/price_lists.js";

//Returns the price list from price_lists.js matching the right category type
function getPriceList(categoryType) {
    switch (categoryType) {
        case "Herr":
            return data_herr;
        case "Dam":
            return data_dam;
        case "Barn":
            return data_barn;
        case "Sport":
            return data_sport;
        default:
            return [];
    }
}

//Returns price as a number based on the user input and the matching price list
function getPrice(priceList, clothing, priceLevel) {
    const match = priceList.find((obj) => obj["type"] === clothing);
    return match ? match[priceLevel] : undefined;
}

//Returns a full list of clothing types based on what category the user clicked on
function ClothingList({ categoryType }) {
    const priceList = getPriceList(categoryType);

    return (
        <>
            <option key="-" value="-">
                --{categoryType !== "" ? categoryType : "Välj Kategori"}--
            </option>
            {priceList.map((item, index) => (
                <option key={index} value={item.type}>
                    {item.type}
                </option>
            ))}
        </>
    );
}

//Big component with lots of shet
function PriceCalculator() {
    //Look at all these states..
    const [categoryType, setCategoryType] = useState("");
    const [clothing, setClothing] = useState("");
    const [priceLevel, setpriceLevel] = useState("");
    const [price, setPrice] = useState(0);
    const [addCost, setAddCost] = useState("");

    //Event for when you click submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const priceList = getPriceList(categoryType);

        let updatedPriceLevel = "";

        if (priceLevel === "lux") {
            updatedPriceLevel = "high";
            setAddCost(" (+ 20-80)");
        } else {
            updatedPriceLevel = priceLevel;
            setAddCost("");
        }

        setPrice(getPrice(priceList, clothing, updatedPriceLevel) - discount);
    };

    return (
        <div className="priceCalcWrapper">
            <form onSubmit={handleSubmit}>
                <CategorySelecttion
                    setCategory={setCategoryType}
                    category={categoryType}
                />
                <div className="section clothingSection">
                    <div className="sectionLabel">
                        Klädesplagg:{" "}
                        <span className="selectionLabel">{clothing}</span>
                    </div>
                    <div className="selectionSection rowFlex">
                        <select
                            value={clothing}
                            onChange={(e) => setClothing(e.target.value)}
                        >
                            <ClothingList categoryType={categoryType} />
                        </select>
                    </div>
                </div>
                <PriceValueSection
                    setPriceLevel={setpriceLevel}
                    priceLevel={priceLevel}
                />
                <button type="submit" className="submitBtn">
                    Submit
                </button>
            </form>
            <div className="priceDisplay selectionLabel">
                {price}
                <span className="luxText">{addCost}</span> kr
            </div>
        </div>
    );
}

export default PriceCalculator;

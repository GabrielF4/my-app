import CategorySelecttion from "./CategorySelection.jsx";
import PriceValueSection from "./PriceValueSection.jsx";
import "./PriceCalculator.css";
import {
    data_barn,
    data_dam,
    data_herr,
    data_sport,
} from "../../utils/price_lists.js";
import { useState } from "react";

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

function getPrice(priceList, clothing, priceLevel) {
    const match = priceList.find((obj) => obj["type"] === clothing);
    return match ? match[priceLevel] : undefined;
}

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

function PriceCalculator() {
    const [categoryType, setCategoryType] = useState("");
    const [clothing, setClothing] = useState("");
    const [priceLevel, setpriceLevel] = useState("");
    const [price, setPrice] = useState(0);
    const [discountReason, setDiscountReason] = useState("");
    const [discount, setDiscount] = useState(0);
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
                <CategorySelecttion onCategoryChange={setCategoryType} />
                <div className="section clothingSection">
                    <div className="sectionLabel">Klädesplagg: </div>
                    <div className="selectionSection rowFlex">
                        <select
                            value={clothing}
                            onChange={(e) => setClothing(e.target.value)}
                        >
                            <ClothingList categoryType={categoryType} />
                        </select>
                        <div className="selectionLabel">{clothing}</div>
                    </div>
                </div>
                <PriceValueSection onPriceLevelChange={setpriceLevel} />
                <div className="section">
                    <div className="sectionLabel">Avdrag: </div>
                    <div className="selectionSection rowFlex">
                        <select
                            value={discountReason}
                            onChange={(e) => {
                                setDiscountReason(e.target.value);
                                setDiscount(e.target.value === "" ? 0 : 10);
                            }}
                        >
                            <option value="">--Avdrag--</option>
                            <option value="Fläck">Fläck</option>
                            <option value="Hål">Hål</option>
                            <option value="Slitet">Slitet</option>
                        </select>
                        <div className="selectionLabel">-{discount} kr</div>
                    </div>
                </div>
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

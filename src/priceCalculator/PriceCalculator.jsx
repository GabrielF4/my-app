import CategorySelecttion from "./CategorySelection.jsx";
import PriceValueSection from "./PriceValueSection.jsx";
import "./PriceCalculator.css";
import { data_barn, data_dam, data_herr, data_sport } from "./price_lists.js";
import { useState } from "react";

function PriceCalculator() {
    const [categoryType, setCategoryType] = useState("");
    const [clothing, setClothing] = useState("");
    const [priceLevel, setpriceLevel] = useState("");
    const [price, setPrice] = useState(0);
    const [discountReason, setDiscountReason] = useState("");
    const [discount, setDiscount] = useState(0);

    //Event for when you click submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setPrice(130 - discount);
    };

    return (
        <div className="priceCalcWrapper">
            <form onSubmit={handleSubmit}>
                <CategorySelecttion onCategoryChange={setCategoryType} />
                <div className="section clothingSection">
                    <div className="sectiondiv">Klädesplagg: </div>
                    <div className="selectionSection rowFlex">
                        <select
                            value={clothing}
                            onChange={(e) => setClothing(e.target.value)}
                        >
                            <option value="">--Välj klädesplagg--</option>
                            <option value="Byxor">Byxor</option>
                            <option value="T-shirt">T-Shirt</option>
                            <option value="Skjorta">Skjorta</option>
                        </select>
                        <div className="clothingSelection">{clothing}</div>
                    </div>
                </div>
                <PriceValueSection onPriceLevelChange={setpriceLevel} />
                <div className="section">
                    <div className="sectiondiv">Avdrag: </div>
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
                    </div>
                </div>
                <button type="submit" className="submitBtn">
                    Submit
                </button>
            </form>
            <div className="priceDisplay">{price} kr</div>
        </div>
    );
}

export default PriceCalculator;

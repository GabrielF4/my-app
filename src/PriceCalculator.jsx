import "./PriceCalculator.css";
import { data_barn, data_dam, data_herr, data_sport } from "./price_lists.js";
import { useState } from "react";

function PriceCalculator() {
    const [categoryType, setCategoryType] = useState("");
    const [clothing, setClothing] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState(0);
    const [discountReason, setDiscountReason] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPrice(130 - discount);
    };

    const categorySelect = (a) => {
        setCategoryType(a);
    };

    return (
        <div className="priceCalcWrapper">
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <div className="sectiondiv">Typ:</div>
                    <div className="btnSection">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => categorySelect("Herr")}
                        >
                            Herr
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => categorySelect("Dam")}
                        >
                            Dam
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => categorySelect("Barn")}
                        >
                            Barn
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => categorySelect("Sport")}
                        >
                            Sport
                        </button>
                        <div className="typeSelection">{categoryType}</div>
                    </div>
                </div>
                <div className="section">
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
                <div className="section">
                    <div className="sectiondiv">Värde: </div>
                    <div className="btnSection">
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setRating("low")}
                        >
                            Låg
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setRating("mid")}
                        >
                            Meddel
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setRating("high")}
                        >
                            Hög
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setRating("lux")}
                        >
                            Exklusiv
                        </button>
                        <div className="ratingSelection">{rating}</div>
                    </div>
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

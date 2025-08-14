import "./PriceCalculator.css";
import { ratingPrices, brands } from "./data.js";
import { useState } from "react";

function PriceCalculator() {
    const [type, setType] = useState("");
    const [clothing, setClothing] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const priceDisplay = document.querySelector(".priceDisplay");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `This will display price\nType: ${type}\nClothing: ${clothing}\nRating: ${rating}`
        );
        setPrice(ratingPrices[`${rating}`] ? ratingPrices[`${rating}`] : "??");
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
                            onClick={() => setType("Herr")}
                        >
                            Herr
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setType("Dam")}
                        >
                            Dam
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setType("Barn")}
                        >
                            Barn
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => setType("Sport")}
                        >
                            Sport
                        </button>
                        <div className="typeSelection">{type}</div>
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
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
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

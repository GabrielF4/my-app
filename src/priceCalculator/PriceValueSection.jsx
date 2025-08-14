import { useState } from "react";
import "./PriceCalculator.css";

function PriceValueSection({ onPriceLevelChange }) {
    const [priceLevel, setPriceLevel] = useState("");

    const priceLevelSelect = (a) => {
        onPriceLevelChange(a);
        setPriceLevel(a);
    };

    return (
        <div className="section">
            <div className="sectiondiv">Värde: </div>
            <div className="btnSection">
                <button
                    type="button"
                    className="btn"
                    onClick={() => priceLevelSelect("low")}
                >
                    Låg
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => priceLevelSelect("mid")}
                >
                    Meddel
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => priceLevelSelect("high")}
                >
                    Hög
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => priceLevelSelect("lux")}
                >
                    Exklusiv
                </button>
                <div className="selectionLabel">{priceLevel}</div>
            </div>
        </div>
    );
}

export default PriceValueSection;

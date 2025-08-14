import { useState } from "react";
import "./PriceCalculator.css";

function CategorySelecttion({ onCategoryChange }) {
    const [categoryType, setCategoryType] = useState("");

    //Event for when you select a category
    const categorySelect = (a) => {
        onCategoryChange(a);
        setCategoryType(a);
    };

    return (
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
                <div className="selectionLabel">{categoryType}</div>
            </div>
        </div>
    );
}

export default CategorySelecttion;

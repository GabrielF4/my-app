import { useState } from "react";
import "../PriceCalculator.css";
import Button from "../../Button/Button.jsx";

function CategorySelecttion({ setCategory, category }) {
    return (
        <div className="section">
            <div className="sectionLabel">
                Kategori: <span className="selectionLabel">{category}</span>
            </div>
            <div className="btnSection">
                <Button onClick={() => setCategory("Herr")}>Herr</Button>
                <Button onClick={() => setCategory("Dam")}>Dam</Button>
                <Button onClick={() => setCategory("Barn")}>Barn</Button>
                <Button onClick={() => setCategory("Sport")}>Sport</Button>
            </div>
        </div>
    );
}

export default CategorySelecttion;

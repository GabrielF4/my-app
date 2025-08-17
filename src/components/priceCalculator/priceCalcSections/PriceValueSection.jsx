import { useState } from "react";
import "../PriceCalculator.css";
import Button from "../../Button/Button";

function PriceValueSection({ setPriceLevel, priceLevel }) {
    return (
        <div className="section">
            <div className="sectionLabel">
                Värde: <span className="selectionLabel">{priceLevel}</span>
            </div>
            <div className="btnSection">
                <Button onClick={() => setPriceLevel("low")}>Låg</Button>
                <Button onClick={() => setPriceLevel("mid")}>Medel</Button>
                <Button onClick={() => setPriceLevel("high")}>Hög</Button>
                <Button
                    onClick={() => setPriceLevel("lux")}
                    variant="btn luxBtn"
                >
                    Exklusiv
                </Button>
            </div>
        </div>
    );
}

export default PriceValueSection;

import { useState } from "react";
import "./searchField.css";
import { brands } from "./data.js";

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const data = Array.from(brands);

    const filteredData = data.filter((item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function searchTradera() {
        window.open(
            `https://www.tradera.com/search?q=${encodeURIComponent(
                searchTerm
            )}&categoryId=16`,
            "_blank"
        );
    }

    function addBrandToDB() {
        console.log(searchTerm);
    }

    return (
        <div className="container">
            <input
                type="text"
                className="searchBar"
                placeholder="Search brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{}}
            />
            <button className="traderaBtn btn" onClick={searchTradera}>
                Sök <span className="tradera">Tradera</span>
            </button>

            <button className="addBrandBtn btn" onClick={addBrandToDB}>
                Lägg till märke
            </button>

            <ul>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <li key={index}>
                            {item.brand} - {item.priceLevel}
                        </li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
};

export default SearchField;

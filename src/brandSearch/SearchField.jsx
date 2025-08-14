import { useState } from "react";
import "./searchField.css";
import { brands } from "./data.js";

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const data = Array.from(brands);

    const filteredData = data.filter((item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

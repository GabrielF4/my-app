import { useState } from "react";
import "./searchField.css";
import { brands } from "../../utils/data.js";
import { db } from "../../../firebase-config.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const data = Array.from(brands);

    const filteredData = data.filter((item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Perform a google search on the search input
    function searchGoogle() {
        window.open(
            `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(
                searchTerm
            )}+clothes`,
            "_blank",
            "noopener,noreferrer"
        );
    }

    //Send the search input to the databse
    async function sendSearchInputToDB() {
        try {
            const docRef = await addDoc(
                collection(db, "clothing-brand-suggestions"),
                {
                    text: { searchTerm },
                    createdAt: new Date(),
                }
            );
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
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
            <button className="googleBtn btn" onClick={searchGoogle}>
                Sök <span className="google">Google</span>
            </button>

            <button className="addBrandBtn btn" onClick={sendSearchInputToDB}>
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

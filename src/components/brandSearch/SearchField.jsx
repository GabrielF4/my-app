import { useState } from "react";
import { useAppContext } from "./../../AppContext.jsx";
import "./searchField.css";
import { brands } from "../../utils/data.js";
import { db } from "../../../firebase-config.js";
import { doc, setDoc } from "firebase/firestore";

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { setShowNoti, setBrandRequest } = useAppContext();

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

    function reportMissingBrand() {
        if (searchTerm) {
            sendSearchInputToDB();
            setBrandRequest(searchTerm);
            showNotification();
        }
    }

    //Send the search input to the databse
    async function sendSearchInputToDB() {
        const suggestionID = `${searchTerm.replaceAll(" ", "-")}`;
        try {
            await setDoc(doc(db, "clothing-brand-suggestions", suggestionID), {
                text: { searchTerm },
                createdAt: new Date(),
            });
            console.log(
                `Clothing brand suggestion added to the database (${suggestionID})`
            );
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //Shows notification for 3 seconds when called
    const showNotification = () => {
        setShowNoti(true);
        // Hide after 3 seconds
        setTimeout(() => setShowNoti(false), 3000);
    };

    return (
        <>
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

                <button
                    className="addBrandBtn btn"
                    onClick={reportMissingBrand}
                >
                    Klädmärke Saknas
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
        </>
    );
};

export default SearchField;

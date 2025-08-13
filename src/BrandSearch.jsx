import "./brandSearch.css";
import { ratingPrices, brands } from "./data.js";
import SearchExample from "./SearchField.jsx";

function BrandSearch() {
    return (
        <div className="brandSearchSection">
            <label htmlFor="search">Search Brands: </label>
            <div className="search-wrapper">
                <SearchExample />
            </div>
        </div>
    );
}

export default BrandSearch;

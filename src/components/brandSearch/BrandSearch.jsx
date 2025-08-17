import "./brandSearch.css";
import SearchField from "./SearchField.jsx";

function BrandSearch() {
    return (
        <div className="brandSearchSection">
            <label htmlFor="search" className="searchLabel">
                Search Brands:{" "}
            </label>
            <div className="search-wrapper">
                <SearchField />
            </div>
        </div>
    );
}

export default BrandSearch;

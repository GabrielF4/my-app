import "./brandSearch.css";

function BrandSearch() {
    return (
        <div className="brandSearchSection">
            <label htmlFor="search">Search Brands: </label>
            <div className="search-wrapper">
                <input type="search" className="searchField" data-search />
            </div>
        </div>
    );
}

export default BrandSearch;

import React, { useState } from "react";

function Search() {

    return (
        <div>
               <div className="searchbar">
                <label htmlFor="search">Search Restaurants:</label>
                <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                // onChange={(e) => handleSearch(e.target.value)}
                value=""
                />
            </div>

        </div>
    )
}

export default Search
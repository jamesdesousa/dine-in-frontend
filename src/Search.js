import React, { useState } from "react";

function Search({search, setSearch}) {

    function updateSearch(event) {
        setSearch(event.target.value)
    }

    return (
        <div>
               <div className="searchbar">
                <label htmlFor="search">Search Restaurants:</label>
                <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={updateSearch}
                value= {search}
                />
            </div>

        </div>
    )
}

export default Search
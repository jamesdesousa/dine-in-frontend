import React, { useState } from "react";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm";
import Logo from "./Logo";

function Header({search, setSearch, addRestaurant, restaurants, cuisineType, setCuisineType, locationType, setLocationType}) {
    

    return(
        <div className="header">
            
            <Search search={search} setSearch={setSearch}/>
            <RestaurantForm addRestaurant={addRestaurant}/>
            
            <select value={cuisineType} onChange={(e) => setCuisineType(e.target.value)} id="cuisineList">
                    <option value="0">All</option>
                    <option value="1">Vegan</option>
                    <option value="2">Thai</option>
                    <option value="3">Italian</option>
                    <option value="4">Soul Food</option>
                    <option value="5">Indian</option>
            </select>

            <select value={locationType} onChange={(e) => setLocationType(e.target.value)} id="boroughsList">
                    <option value="0">All</option>
                    <option value="1">Brooklyn</option>
                    <option value="2">Queens</option>
                    <option value="3">Manhattan</option>
                    <option value="4">Staten Island</option>
                    <option value="5">Bronx</option>
            </select>

         

        </div>
    )
}

export default Header
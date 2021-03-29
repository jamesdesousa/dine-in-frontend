import React, { useState } from "react";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm";

function Header({search, setSearch, addRestaurant}) {

    return(
        <div>
            <h1> LOGO </h1>
            <Search search={search} setSearch={setSearch}/>
            <RestaurantForm addRestaurant={addRestaurant}/>
            
            <select  id="cuisineList">
                    <option value="vegan">Vegan</option>
                    <option value="thai">Thai</option>
                    <option value="italian">Italian</option>
                    <option value="soul">Soul Food</option>
                    <option value="indian">Indian</option>
            </select>

            <select  id="boroughsList">
                    <option value="brooklyn">Brooklyn</option>
                    <option value="queens">Queens</option>
                    <option value="manhatten">Manhatten</option>
                    <option value="staten">Staten Island</option>
                    <option value="bronx">Bronx</option>
            </select>

         

        </div>
    )
}

export default Header
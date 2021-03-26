import React, { useState } from "react";
import RestaurantDetails from './RestaurantDetails'

function RestaurantCard() {

    return(
        <div>
            <li className="restaurantList">
                <img src="" alt="Restaurant picture"/>
                <h4>Rest name</h4>

                <RestaurantDetails /> 
            </li>
        </div>
    )
}

export default RestaurantCard
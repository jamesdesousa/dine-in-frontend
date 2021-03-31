import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard.js"

function RestaurantList({handleChange, rating, search, setSearch, locationFilter, deleteRestaurants, handleSubmit}) {
    

  

     const filteredRestaurants= locationFilter.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })

    const restaurantArray = filteredRestaurants.map((restaurantObj) => {
        
        return (
        <RestaurantCard 
        key={restaurantObj.id}
        deleteRestaurants={deleteRestaurants}
        restaurant={restaurantObj}
        handleChange={handleChange}
        rating={rating}
        handleSubmit={handleSubmit}
         />

        )
    })

    return (
        <ul className="restaurants">
        {restaurantArray}
        </ul>
    );
}

export default RestaurantList
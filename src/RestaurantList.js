import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard.js"

function RestaurantList({restaurants, search, setSearch}) {
  

    const filteredRestaurants= restaurants.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })

    const restaurantArray = filteredRestaurants.map((restaurant) => {
        
        return (
        <RestaurantCard 
        key={restaurant.id}
        name={restaurant.name}
        image={restaurant.image}
        location={restaurant.location}
        cuisine={restaurant.cuisine}
        review={restaurant.review}
        rating={restaurant.rating}
        description={restaurant.description}
        address={restaurant.address}
        
         />

        )
    })

    return (
        <div>
        {restaurantArray}
        </div>
    );
}

export default RestaurantList
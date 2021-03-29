import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard.js"

function RestaurantList({restaurants}) {
  

    const restaurantArray = restaurants.map((restaurant) => {
        console.log(restaurant.image)
        return (
        <RestaurantCard 
        key={restaurant.id}
        name={restaurant.name}
        image={restaurant.image}
        location_id={restaurant.location_id}
        cuisine_id={restaurant.cuisine_id}
        review={restaurant.review}
        rating={restaurant.rating}
        description={restaurant.description}
        
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
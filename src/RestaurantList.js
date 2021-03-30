import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard.js"

function RestaurantList({restaurants, search, setSearch, locationFilter, deleteRestaurants}) {
    

  

     const filteredRestaurants= locationFilter.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(search.toLowerCase())
    })

    const restaurantArray = filteredRestaurants.map((restaurantObj) => {
        
        return (
        <RestaurantCard 
        key={restaurantObj.id}
        // name={restaurant.name}
        // image={restaurant.image}
        // location={restaurant.location}
        // cuisine={restaurant.cuisine}
        // review={restaurant.review}
        // rating={restaurant.rating}
        // description={restaurant.description}
        // address={restaurant.address}
        deleteRestaurants={deleteRestaurants}
        restaurant={restaurantObj}
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
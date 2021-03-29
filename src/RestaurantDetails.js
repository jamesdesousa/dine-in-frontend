import React, { useState } from "react";
function RestaurantDetails({name, address, review, rating, location, cuisine, description, image}) {

    return (
        <div>
                    <p>Rating: {rating}</p>
                    <p>Cusine:{cuisine}</p>
                    <p>Location: {location}</p>
                    <p>Address: {address}</p> 
                    <p>Description: {description}</p>
                    <p>Reviews: {review}</p> 
                    
                
        </div>
    )
}

export default RestaurantDetails
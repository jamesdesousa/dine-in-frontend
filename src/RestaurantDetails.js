import React, { useState } from "react";
function RestaurantDetails({name, address, review, rating, location, cuisine, description, image, handleDelete}) {

    return (
        <div>
                    <p>Rating: {rating}</p>
                    {/* Slider here */}
                    <p>Cusine:{cuisine}</p>
                    <p>Location: {location}</p>
                    <p>Address: {address}</p> 
                    <p>Description: {description}</p>
                    <p>Reviews: {review}</p> 
                    <p onClick={(e) => handleDelete()}className="emoji-button delete">🗑</p>

                    
                
        </div>
    )
}

export default RestaurantDetails
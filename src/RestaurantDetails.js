import React, { useState } from "react";
import RatingForm from "./RatingForm";
function RestaurantDetails({name, address, review, rating, location, cuisine, description, image, handleDelete, handleChange}) {

    return (
        <div className="ui card">
                    <p>Rating: {rating}</p>
                    <RatingForm handleChange={handleChange} rating={rating}/>
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
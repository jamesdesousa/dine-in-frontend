import React, { useState } from "react";
import RestaurantDetails from './RestaurantDetails'

function RestaurantCard({name, address, review, rating, location, cuisine, description, image}) {
    const [details, setDetails] = useState(true)

    function showDetails() {
        setDetails(!details)
    }
    console.log({name, image, description})
    return(
        <div>
            <li className="restaurantList">
                {details ? (
                <div>
                <img src={image} alt={name}/>
                <p onClick={showDetails}> {name} </p>
                <h5> {rating} </h5>
                </div>
                ) : (
                <div>
                <img   src={image} alt={name}/>
                <p onClick={showDetails}> {name} </p>
                <h5> {rating} </h5>
                <p className="description"> {description}</p> 
                <p>{review}</p>
                </div>
                )
                }
            </li>
        </div>
    )
}

export default RestaurantCard
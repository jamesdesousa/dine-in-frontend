import React, { useState } from "react";
import RestaurantDetails from './RestaurantDetails'

function RestaurantCard({name, address, review, rating, location, cuisine, description, image}) {
    const [details, setDetails] = useState(true)

    function showDetails() {
        setDetails(!details)
    }
    
    return(
        <div>
            <li onClick={showDetails} className="restaurantList">
                {details ? (
                <div>
                <img src={image} alt={name}/>
                <h5 onClick={showDetails}> {name} </h5>
                <h5> Rating: {rating} </h5>
                </div>
                ) : (
                <div>
                <img   src={image} alt={name}/>
                <p> {name} </p>
                <RestaurantDetails 
                name={name}
                image={image}
                location={location.borough}
                cuisine={cuisine.name}
                review={review}
                rating={rating}
                description={description} 
                address= {address} />
                </div>
                )
                }
            </li>
        </div>
    )
}

export default RestaurantCard
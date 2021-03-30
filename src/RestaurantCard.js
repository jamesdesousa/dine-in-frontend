import React, { useState } from "react";
import RestaurantDetails from './RestaurantDetails'

function RestaurantCard({restaurant, deleteRestaurants}) {

    // name, address, review, rating, location, cuisine, description, image, 

    const [details, setDetails] = useState(true)
    const [rating, setRating] = useState(restaurant.rating)

    function showDetails() {
        setDetails(!details)
    }

    function handleDelete() {
        deleteRestaurants(restaurant.id)
    }

    function handleChange(e) {
        if (parseInt(e.target.value) === 1) {
            setRating("🌶")
        } else if (parseInt(e.target.value) === 2) {
            setRating('🌶🌶')
        } else if (parseInt(e.target.value) === 3) {
            setRating('🌶🌶🌶')
        } else if (parseInt(e.target.value) === 4) {
            setRating('🌶🌶🌶🌶')
        } else if (parseInt(e.target.value) === 5) {
            setRating('🌶🌶🌶🌶🌶')
        } 
    }
    
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch(`http://localhost:3000/restaurants/${restaurant.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'accept': 'application/json',
    //         },
    //         body: JSON.stringify({rating: setRating(rating) })
    //     })
    // }


    return(
        <div>
            <li onClick={showDetails} className="restaurant">
                {details ? (
                <div>
                <img src={restaurant.image} alt={restaurant.name} width='33%' />
                <h5 onClick={showDetails}> {restaurant.name} </h5>
                <h5> Rating: {restaurant.rating} </h5>
                </div>
                ) : (
                <div >
                <img src={restaurant.image} alt={restaurant.name} />
                <p> {restaurant.name} </p>
                <RestaurantDetails 
                name={restaurant.name}
                image={restaurant.image}
                location={restaurant.location.borough}
                cuisine={restaurant.cuisine.name}
                review={restaurant.review}
                rating={restaurant.rating}
                description={restaurant.description} 
                address= {restaurant.address} 
                handleDelete={handleDelete}
                handleChange={handleChange}
                />
                </div>
                )
                }
            </li>
        </div>
    )
}

export default RestaurantCard
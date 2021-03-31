import React, { useState, useEffect } from "react";
import RestaurantDetails from './RestaurantDetails'
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'


function RestaurantCard({restaurant, deleteRestaurants, handleChange, rating, handleSubmit}) {
    // const [singleRestaurant, setSingleRestaurant] = useState([])

    // name, address, review, rating, location, cuisine, description, image, 

    const [details, setDetails] = useState(true)

    function showDetails() {
        setDetails(!details)
    }

    function handleDelete() {
        deleteRestaurants(restaurant.id)
    }


    // const params = useParams()

    // const id = params.id 
    // useEffect(() => {
    //     fetch(`http://localhost:3000/restaurants/${id}`)
    //     .then(response => response.json())
    //     .then(restaurant => {
    //       setSingleRestaurant(restaurant)
    //     })
    // },[id])

    // console.log(singleRestaurant)

    // const singleRestaurant1 = singleRestaurant.map((restaurant) => {
    //     return  <RestaurantDetails
    //     key={restaurant.id}
    //     name={restaurant.name}
    //     image={restaurant.image}
    //     location={restaurant.location}
    //     cuisine={restaurant.cuisine}
    //     review={restaurant.review}
    //     rating={restaurant.rating}
    //     description={restaurant.description}
    //     address={restaurant.address}
    //     singleRestaurant={restaurant}
    //     />
    // })
     
    

   
    



    return(
        <div>
            <li  className="card">
            
                <div>
                <img height= {300} width={350} src={restaurant.image} alt={restaurant.name}  />
                <h5>
                <Link to={`/restaurant/${restaurant.id}`} > {restaurant.name} </Link>
                </h5>
                <h5 > Rating: {restaurant.rating} </h5>
                </div>
            
               
                
                
            </li>
        </div>
    )
}

export default RestaurantCard
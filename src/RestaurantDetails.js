import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

function RestaurantDetails({handleDelete, locationFilter, handleSubmit, handleChange, rating, singleId, setSingleId, setRating}) {
    const params = useParams()
    const id = params.id 
    const [singleRestaurant, setSingleRestaurant] = useState([])
    
    
    setSingleId(id)
    console.log(locationFilter[id - 1])
    
    useEffect(() => {
    setSingleRestaurant(locationFilter[id - 1])

    }, [id])
    console.log(singleRestaurant.rating)
    {!!singleRestaurant.rating && setRating(parseInt(singleRestaurant.rating.length) / 2)}

    



    return (
        <div className="restaurant">
                     <img src={singleRestaurant.image} width= "900" height="600"/>
                    <p>Name: {singleRestaurant.name} </p>   
                    <p>Rating: {singleRestaurant.rating}</p>
                    <form onSubmit={handleSubmit}>
                            <input onChange =  {(e)=> handleChange(e)}type="number" value={rating}  step='1'  id="points"  />
                            <input  type="submit" /> 
                    </form> 
                     {!!singleRestaurant.cuisine && <p>Cusine:{singleRestaurant.cuisine.name}</p>}
                    
                    {!!singleRestaurant.location && <p>Location: {singleRestaurant.location.borough}</p>}
                    <p>Address: {singleRestaurant.address}</p> 
                    <p>Description: {singleRestaurant.description}</p>
                    <p>Reviews: {singleRestaurant.review}</p> 
                    <p onClick={(e) => handleDelete()}className="emoji-button delete">🗑</p>

                    
                
        </div>
    )
}

export default RestaurantDetails
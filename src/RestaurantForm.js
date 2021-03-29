import React, { useState } from "react";



function RestaurantForm ({addRestaurant}) {
    const [name, setName] = useState ("")
    const [address, setAddress] = useState ("")
    const [image, setImage] = useState ("")
    const [description, setDescription]= useState ("")
    const [location, setLocation]= useState ("")
    const [cuisine, setCuisine]= useState ("")
    const [rating, setRating]= useState ("")
    const [review, setReview]= useState ("")

    function handleSubmit(event) {
        event.preventDefault()
    
        const formData = {
          name: name,
          image: image,
          address: address,
          cuisine: cuisine, 
          location: location,
          description: description,
          review: review,
          rating: rating
        }
        fetch("http://localhost:3000/restaurants", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:
            JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(finalForm => {
            addRestaurant(finalForm)
                console.log(finalForm)
          })
      }
    

    return(
        <div>
            <h3>Add a new Restaurant</h3>
        <form onSubmit= {handleSubmit}>
        <input type="text" name="name" placeholder="Restaurant name" value = {name} onChange={e => setName(e.target.value)} 
        />
        <input type="text" name="image" placeholder="Image URL" value = {image} onChange= {e => setImage(e.target.value)}
        />
        <input type="text" name="description" placeholder="Description" value = {description} onChange = {e=> setDescription(e.target.value)}
        />
         <input type="text" name="address" placeholder="Address" value = {address} onChange = {e=> setAddress(e.target.value)}
        />
           <select value= {cuisine} onChange = {e => setCuisine(e.target.value)} id="cuisineList">
                    <option value="vegan">Vegan</option>
                    <option value="thai">Thai</option>
                    <option value="italian">Italian</option>
                    <option value="soul">Soul Food</option>
                    <option value="indian">Indian</option>
            </select>

            <select value={location} onChange = {e => setLocation(e.target.value)} id="boroughsList">
                    <option value="brooklyn">Brooklyn</option>
                    <option value="queens">Queens</option>
                    <option value="manhatten">Manhatten</option>
                    <option value="staten">Staten Island</option>
                    <option value="bronx">Bronx</option>
            </select>

        <button type="submit">Add Restaurant</button>
      </form>
        </div>

    )
    
}

export default RestaurantForm
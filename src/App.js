
import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import RestaurantList from "./RestaurantList.js"
import RestaurantForm from './RestaurantForm';
import RestaurantCard from "./RestaurantCard.js"
import RestaurantDetails from './RestaurantDetails';
import {useParams} from 'react-router-dom'
import Logo from './Logo';



function App() {

  const [search, setSearch] = useState ("")
  const [restaurants, setRestaurants] = useState([])
  const [cuisineType, setCuisineType] = useState('0')
  const [locationType, setLocationType] = useState('0')
  

  const [singleId, setSingleId] = useState(2)
  const [rating, setRating] = useState(0)

  useEffect(() => {
  fetch('http://127.0.0.1:3000/restaurants')
  .then(response => response.json())
  .then(restaurants => {
    setRestaurants(restaurants)
  })
}, [])

function addRestaurant(newRestaurant){
  const newRestaurantArray=[...restaurants, newRestaurant]
  setRestaurants(newRestaurantArray)
}


    
    const cuisineFilter = restaurants.filter((restaurant) => {
      if (parseInt(cuisineType) === 0) {
        return restaurants
      } 
      else {
      return restaurant.cuisine.id === (parseInt(cuisineType))
      }
    })

    const locationFilter = cuisineFilter.filter((restaurant) => {
      if (parseInt(locationType) === 0) {
        return restaurants
      } 
      else {
      return restaurant.location.id === (parseInt(locationType))
      }
    })
    
  console.log(locationFilter[singleId - 1])
    function deleteRestaurants(id) {
      fetch(`http://localhost:3000/restaurants/${id}`, {
        method: "DELETE",
        headers: {"Text-Content" : "application/json"}
      })
      .then(response => response.json())
      .then(setRestaurants(()=> locationFilter.filter(restaurants => restaurants.id !== id )))
    
    }

    function handleChange(e) {
      if (parseInt(e.target.value) === 1) {
        (locationFilter[singleId - 1].rating) = "🌶"
        setRating(locationFilter[singleId - 1].rating)

      } else if (parseInt(e.target.value) === 2) {
        (locationFilter[singleId - 1].rating) = '🌶🌶'
        setRating(locationFilter[singleId - 1].rating)

      } else if (parseInt(e.target.value) === 3) {
        (locationFilter[singleId - 1].rating)='🌶🌶🌶'
        setRating(locationFilter[singleId - 1].rating)

      } else if (parseInt(e.target.value) === 4) {
        (locationFilter[singleId - 1].rating)='🌶🌶🌶🌶'
        setRating(locationFilter[singleId - 1].rating)

      } else if (parseInt(e.target.value) === 5) {
        (locationFilter[singleId - 1].rating)= '🌶🌶🌶🌶🌶'
        setRating(locationFilter[singleId - 1].rating)

      } 
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/restaurants/${singleId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify({rating: locationFilter[singleId - 1].rating })
    })
}


  return (
    <div >
      <Logo />
      <Switch>
      <Route exact path="/restaurantlist">
      <Header search={search} setSearch={setSearch} addRestaurant={addRestaurant} restaurants={restaurants} cuisineType={cuisineType} setCuisineType={setCuisineType} locationType={locationType} setLocationType={setLocationType}/>
      <RestaurantList restaurants={restaurants} search={search} setSearch={setSearch} locationFilter={locationFilter} deleteRestaurants={deleteRestaurants} handleChange={handleChange}   />
      </Route>
      <Route exact path="/new">
        <RestaurantForm  />
      </Route>
      <Route exact path="/restaurant/:id">
        <RestaurantDetails rating = {rating} locationFilter={locationFilter} handleChange={handleChange} handleSubmit={handleSubmit} singleId={singleId} setSingleId={setSingleId} setRating={setRating}/>
      </Route>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
    </div>
  );

  
}

   


export default App;

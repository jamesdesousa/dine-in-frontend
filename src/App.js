
import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import RestaurantList from "./RestaurantList.js"
import RestaurantForm from './RestaurantForm';
import RestaurantCard from "./RestaurantCard.js"


function App() {

  const [search, setSearch] = useState ("")
  const [restaurants, setRestaurants] = useState([])
  const [cuisineType, setCuisineType] = useState('0')
  const [locationType, setLocationType] = useState('0')

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

    function deleteRestaurants(id) {
      fetch(`http://localhost:3000/restaurants/${id}`, {
        method: "DELETE",
        headers: {"Text-Content" : "application/json"}
      })
      .then(response => response.json())
      .then(setRestaurants(()=> locationFilter.filter(restaurants => restaurants.id !== id )))
    
    }



  return (
    <div >
      <Switch>
      <Route exact path="/restaurantlist">
      <Header search={search} setSearch={setSearch} addRestaurant={addRestaurant} restaurants={restaurants} cuisineType={cuisineType} setCuisineType={setCuisineType} locationType={locationType} setLocationType={setLocationType}/>
      <RestaurantList restaurants={restaurants} search={search} setSearch={setSearch} locationFilter={locationFilter} deleteRestaurants={deleteRestaurants} />
      </Route>
      <Route exact path="/new">
        <RestaurantForm  />
      </Route>
      <Route exact path="/restaurant/:id">
        <RestaurantCard />
      </Route>
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
    </div>
  );

  
}

   


export default App;

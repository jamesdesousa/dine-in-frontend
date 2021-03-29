
import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import RestaurantList from "./RestaurantList.js"
import RestaurantForm from './RestaurantForm';
import RestaurantCard from "./RestaurantCard.js"


function App() {

  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
  fetch('http://127.0.0.1:3000/restaurants')
  .then(response => response.json())
  .then(restaurants => {
    console.log(restaurants)
    setRestaurants(restaurants)
  })
}, [])




  return (
    <div >
      <Header />
      <RestaurantList restaurants={restaurants}/>
    </div>
  );
}

      <Switch>
        <Route exact path="/restaurantlist">
          {/* <RestaurantList /> */}
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


export default App;

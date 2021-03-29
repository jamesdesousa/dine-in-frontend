
import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import RestaurantList from "./RestaurantList.js"

function App() {
  return (
    <div >
      <Header />
    </div>
  );
}
<Switch>
        <Route exact path="/restaurantlist">
          <RestaurantList/>
        </Route>
        <Route exact path="/new">
          <RestaurantForm  />
        </Route>
        <Route exact path="/restaurant/:id">
          <RestaurantDetail/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>


export default App;


import './App.css';
// import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header.js"
import RestaurantList from "./RestaurantList.js"

function App() {
  return (
    <div >
      <Header />
      <RestaurantList />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./templates/home";

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <Home/>
  </React.Fragment>
  );
}

export default App;

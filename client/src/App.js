import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Career from "./Components/Career";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import ProductsList from "./Components/ProductsList";
import Users from "./Components/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/user/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

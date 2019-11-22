import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import React, { Component, useState, useEffect } from "react";
import Home from "./Home";
import fire from "./Config/Fire.js";
import Login from "./Login/Login";
import Favourite from "./Favourite/Favourite";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import UnauthenticatedRoute from "./Components/UnauthenticatedRoute";
import { Switch } from "@material-ui/core";

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    onLoad();
    // authListener()
  }, []);

  function onLoad() {
    if (localStorage.getItem("user")) userHasAuthenticated(true);
  }
  let authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      //   console.log(user);

      if (user) {
        setUser(user);
        userHasAuthenticated(true);
        console.log("logged in");
      } else {
        setUser(null);
        userHasAuthenticated(false);
        localStorage.removeItem("user");
        console.log("logged out");
      }
    });
  };
  return (
    <div>
      <BrowserRouter>
        <UnauthenticatedRoute
          path="/login"
          component={Login}
          appProps={{ isAuthenticated }}
        />
        <AuthenticatedRoute
          exact
          path="/fav"
          component={Favourite}
          appProps={{ isAuthenticated, authListener }}
        />
        <Route
          path="/home"
          render={props => (
            <Home authListener={authListener} user={user} {...props} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Home authListener={authListener} user={user} {...props} />
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

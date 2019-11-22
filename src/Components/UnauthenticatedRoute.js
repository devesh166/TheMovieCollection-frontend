import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
export default ({ component: C, appProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !appProps.isAuthenticated ? (
        <C {...props} {...appProps} />
      ) : (
        <div>
          {/* alert("Already Logged in"); */}
          <Redirect to="/home" />
        </div>
      )
    }
  />
);

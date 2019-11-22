import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
export default function AuthenticatedRoute({
  component: C,
  appProps,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated ? (
          <div>
            <C {...props} {...appProps} />
            {/* {console.log(props)} */}
          </div>
        ) : (
          <div>
            {/* alert("Please Login to continue"); */}
            <Redirect
              to={`/login`}
              // to={`/login?redirect=${props.location.pathname}${props.location.search}`}
            />
          </div>
        )
      }
    />
  );
}

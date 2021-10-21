import { Component } from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  // Check if the user has a valid auth token in localStorage
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the component
  return <Component {...rest} />;
};

export default PrivateRoute;

import React from 'react';
import { Route } from 'react-router-dom';

const Status = ({ code, children }) => {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = code;
          return children;
        }}
      />
    );
  };

  export default Status;

  // line 4 , declaring FC (status) has a code and children
  // returning the route to render static content == matching based on the status
  // return the children which is the page 
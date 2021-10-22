import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { headerService } from '../services/dataService';
import axios from 'axios';
import { API_URL } from '../config/config';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    loadMenu();
  }, []);

  function loadMenu() {
    axios.get(`${API_URL}menu`).then((res) => {
      const items = res.data;
      headerService.send(items);
    });
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;


import React from 'react';
import Home from './Home';

export default {

  path: '/',

  action() {
    return {
      title: 'Майстерня',
      component: <Home />,
    };
  },

};

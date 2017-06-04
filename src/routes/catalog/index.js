
import React from 'react';
import Catalog from './Catalog';

export default {

  path: '/catalog',

  action() {
    return {
      title: 'Каталог',
      component: <Catalog />,
    };
  },

};
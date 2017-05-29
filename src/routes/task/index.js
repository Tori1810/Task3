
import React from 'react';
import Layout from './Layout/Layout';

export default {

  path: '/task',

  action() {
    return {
      title: 'Task',
      component: <Layout />,
    };
  },

};
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import './Layout.css'
import Header from '../Header/Header'
import Pannel from '../Pannel/Pannel'
import Catalog from '../Catalog/Catalog'
import Content from '../Content/Content'



class Layout extends React.Component {

  render() {   

    return (
      <div className={s.layout}>
      	<Header />
      	<Pannel />
      	<Catalog />
        <Content />
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Layout);
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Content from '../../components/Content/Content'
import Registration from '../../components/Registration/Registration';
import CatalogPageHeader from '../../components/CatalogPageHeader/CatalogPageHeader';
import Layout from '../../components/Layout/Layout';
import s from './Catalog.css'


class Catalog extends React.Component {

  render() {   

    return (
      <div >
        <Layout >
        <CatalogPageHeader />
        <Content />
        <Registration />
        </ Layout>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Catalog);
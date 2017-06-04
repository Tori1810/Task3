import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Pannel from '../../components/Pannel/Pannel'
import Catalog from '../../components/Catalog/Catalog'
import Content from '../../components/Content/Content'
import Gallery from '../../components/Gallery/Gallery'
import PannelSidebar from '../../components/PannelSidebar/PannelSidebar';
import Registration from '../../components/Registration/Registration';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import s from './Home.css'


class Home extends React.Component {

  render() {   

    return (
      <div >
        <Layout>
        <Header />
        <Pannel ><PannelSidebar /></ Pannel>
        <Catalog />
        <Content />
        <Gallery />
        <Registration />
        </ Layout>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Home);

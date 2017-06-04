import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import './Layout.css'
import Pannel from '../Pannel/Pannel'
import Footer from '../Footer/Footer';


class Layout extends React.Component {

  static propTypes = {
    header: PropTypes.string.isRequired,
  };

  render() {   

    return (
      <div className={s.layout}>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Layout);

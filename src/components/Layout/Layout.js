import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import './Layout.css'
import Pannel from '../Pannel/Pannel'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CatalogPageHeader from '../CatalogPageHeader/CatalogPageHeader';



class Layout extends React.Component {

  propTypes: {
  	data: propTypes.number.isRequired,
  }


  render() {   

  	var data = this.props.data;
    function header_template(data){
        if (data == 1){
        	return (<Header />);
        }
        if (data == 2){
        	return (<CatalogPageHeader />);
        }
    };

    return (
      <div className={s.layout}>
      	{header_template(data)}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Layout);

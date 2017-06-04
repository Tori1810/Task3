import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Pannel.css';


class Pannel extends React.Component {
  
  propTypes: {
    data: PropTypes.object.isRequired,
  };

  render() {

    var data=this.props.data;
    var img_array = data.img;
    var img_template = img_array.map(function(item, index){
      return(
        <img className={s.pannel__img} src={item} />
      )
    });

    return (

      <div className={s['pannel']}>
        <div className={s.pannel__title}>{data.title}</div>
        <div className={s.pannel__img_block}>
          {img_template} 
        </div>
      </div>

    );
  }
}

export default compose(
  withStyles(s),
)(Pannel);
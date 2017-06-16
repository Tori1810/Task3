import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CentrePannel.css';


class CentrePannel extends React.Component {

  propTypes: {
    data: PropTypes.object.isRequired,
  };

  render() {

    const data=this.props.data,
          img_array = data.img,
          img_template = img_array.map(function(item, index){
      return(
        <img className={s.pannel__img} src={item} alt="img" />
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
)(CentrePannel);

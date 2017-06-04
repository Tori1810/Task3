import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BottomPannel.css';


class BottomPannel extends React.Component {
  
  propTypes: {
    data: PropTypes.objact.isRequired,
  };

  render() {

    var data=this.props.data;

    return (

      <div className={s['pannel']}>
        <div className={s.pannel__title}>{data.title}</div>
        <div className={s.pannel__img_block}>
          <img className={s.pannel__img} src={data.img} alt="img" />
        </div>
      </div>

    );
  }
}

export default compose(
  withStyles(s),
)(BottomPannel);
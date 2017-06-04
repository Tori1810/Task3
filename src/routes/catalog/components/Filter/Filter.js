import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filter.css';


class Filter extends React.Component {
  
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

      <div className={s.filter}>
        <div className={s.filter__title}>{data.title}</div>
        <div className={s.filter__main_block}>
          <div className={s.filter__menu}>
            <div className={s.filter__menu__title}>Види каменю:</div>
            <ul className={s.filter__menu__list}>
              <li> <a href='#' className={s.filter__menu__item}>мармур</a></li>
              <li> <a href='#' className={s.filter__menu__item}>граніт</a></li>
              <li> <a href='#' className={s.filter__menu__item}>пісковик</a></li>
              <li> <a href='#' className={s.filter__menu__item}>вапняк</a></li>
              <li> <a href='#' className={s.filter__menu__item}>квацит</a></li>
              <li> <a href='#' className={s.filter__menu__item}>онікс</a></li>
            </ul>
            <div className={s.filter__img_block}>
              <img className={s.filter__img0} src={img_array[0]} />
              <div className={s.filter__img__cover}>      
                <img className={s.filter__img1} src={img_array[1]} />
                <img className={s.filter__img2} src={img_array[2]} />
              </div>  
              <div className={s.filter__img__cover}>
                <img className={s.filter__img3} src={img_array[3]} />
                <img className={s.filter__img4} src={img_array[4]} />
              </div>  
            </div>
          </div> 
        </div>
      </div>

    );
  }
}

export default compose(
  withStyles(s),
)(Filter);
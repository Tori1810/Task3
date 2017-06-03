import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import imgUrl_1 from '../images/portrait.jpg'
import imgUrl_2 from '../images/sculpture.jpg'
import imgUrl_3 from '../images/fireplace.jpg'
import imgUrl_4 from '../images/tabletop.jpg'

class Catalog extends React.Component {

  render() {

    return (
      <div className={s.catalog}>
        <div className={s.title}>Каталог продукції</div>
        <div className={s.catalog__menu}>
          <ul className={s.catalog__menu_list}>
            <li className={s.menu_list__item1}>
            <a href='#' className={s.menu_list__link1}>Внутрішнє та зовнішнє оздоблення</a>
            </li>
            <li className={s.menu_list__item2}>
            <a href='#' className={s.menu_list__link2}>Складні архітектурні вироби</a>
            </li>
            <li className={s.menu_list__item3}>
            <a href='#' className={s.menu_list__link3}>Садово-паркове мистецтво</a>
            </li>
          </ul>
          <a href='#' className={s.catalog_menu__button}>Каталог продукції</a>
        </div>
        <div className={s.catalog__left_small_block}>
          <img src={imgUrl_1} alt="portrait" className={s.small_img} />
          <a href="#" className={s.catalog_link1}>Портрети</a>
        </div>
        <div className={s.catalog__right_small_block}>
          <img src={imgUrl_2} alt="sculpture" className={s.small_img} />
          <a href="#" className={s.catalog_link2}>Скульптури</a>
        </div>
        <div className={s.catalog__left_big_block}>
          <img src={imgUrl_3} alt="fireplace" className={s.big_img} />
          <a href="#" className={s.catalog_link3}>Каміни</a>
        </div>
        <div className={s.catalog__right_big_block}>
          <img src={imgUrl_4} alt="tabletop" className={s.big_img} />
          <a href="#" className={s.catalog_link4}>Столешні</a>
        </div>

      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Catalog);
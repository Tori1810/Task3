import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.css';
import imgUrl1 from '../images/chess.jpg';
import imgUrl2 from '../images/sheme.jpg';


class Gallery extends React.Component {

  render() {

    return (
      <div className={s.gallery}>
        <h1 className={s.gallery__title}>Краще один раз подивитись</h1>
        <div className={s.gallery__subtitle}>Фото проектів з нашого <b>instagram</b></div>
        <div className={s.gallery_block}>
          <div className={s.gallery_block__item1}>
            <img src={imgUrl1} alt="chess" className={s.gallery_photo} />
            <div className={s.gallery_photo__caption}>#onyx #m-selection</div>
          </div>
          <div className={s.gallery_block__item2}>
            <img src={imgUrl2} alt="sheme" className={s.gallery_photo} />
            <div className={s.gallery_photo__caption}>#3d #randomy</div>
          </div>
          <div className={s.gallery_block__item3}>
            <img src={imgUrl1} alt="chess" className={s.gallery_photo} />
            <div className={s.gallery_photo__caption}>#onyx #m-selection</div>
          </div>
          <div className={s.gallery_block__item4}>
            <img src={imgUrl1} alt="chess" className={s.gallery_photo} />
            <div className={s.gallery_photo__caption}>#onyx #m-selection</div>
          </div>
          <div className={s.gallery_block__item5}>
            <img src={imgUrl1} alt="chess" className={s.gallery_photo} />
            <div className={s.gallery_photo__caption}>#onyx #m-selection</div>
          </div>
          <div className={s.gallery_block__item6}>
            <img src={imgUrl1} alt="chess" className={s.gallery_photo} />
            <div className={s.gallery_photo__caption}>#onyx #m-selection</div>
          </div>
        </div>
        <a href='#' className={s.gallery__button}>Всі проекти</a>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Gallery);
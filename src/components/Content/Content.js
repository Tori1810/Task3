import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.css';
// import imgUrl from '../images/poster.jpg'


class Content extends React.Component {

  render() {

    const p1 = 'Майстерня - це місце, де ваша ідея реалізовується з натурального каменю. Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер\'єрів.',
          p2 = 'Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності їх авторський супровід та повна реалізація, художнє оформлення інтер\'єрів, а також їх доставку та послуги монтування.',
          p3 = 'Найважливіше для нас - ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання.';

    return (
      <div id='aboutUs' className={s.content}>
        <img src='http://maysternja.dataroot.co/media/images/about.jpg' alt='poster' className={s.content__poster} />
          <h1 className={s.content__title}>Про нас</h1>
          <p className={s.content__text1}>{p1}</p>
          <p className={s.content__text2}>{p2}</p>
          <p className={s.content__text3}>{p3}</p>
          <a href='*' className={s.content__left_link}>Детальніше</a>
          <a href='catalog' className={s.content__right_link}>Переглянути роботи</a>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Content);
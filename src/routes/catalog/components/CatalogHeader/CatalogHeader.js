import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogHeader.css';


class CatalogHeader extends React.Component {

  render() {

    const
      title_text = "Майстерня",
      button_text = "Зв'язатись з нами",
      contacts_text = "Доставка по Україні",
      phone = "+38 066 445 59 00";

    return (

      <div className={s.header}>
        <h1 className={s.header__title}>{title_text}</h1>
        <div className={s.header__contacts}>
          <a href="tel:+38 066 445 59 00" className={s.header__phone}>{phone}</a>
          <div className={s.header__contacts_text}>{contacts_text}</div>
        </div>
        <a href="#registration" className={s.header__button}>{button_text}</a>
        <div className={s.header__lang}>
          <a href="" className={s.header__lang_first}>УКР</a>
          <a href="" className={s.header__lang_second}>РУС</a>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(CatalogHeader);

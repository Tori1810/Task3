import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PannelMenu.css';


class PannelMenu extends React.Component {

  render() {

    return (
      <div className={s.pannel_menu}>
        <a href="catalog" className={s.pannel_menu__item1}>Каталог продукції</a>
        <a href="#aboutUs" className={s.pannel_menu__item2}>Про нас</a>
        <a href="#products" className={s.pannel_menu__item3}>Наші роботи</a>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(PannelMenu);

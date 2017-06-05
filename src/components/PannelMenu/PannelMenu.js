import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PannelMenu.css';


class PannelMenu extends React.Component {

  render() {

    return (
      <div className={s.pannel_menu}>
        <ul className={s.pannel_menu__list}>
          <li><a href="catalog" className={s.pannel_menu__item}>Каталог продукції</a></li>
          <li><a href="#aboutUs" className={s.pannel_menu__item}>Про нас</a></li>
          <li><a href="#products" className={s.pannel_menu__item}>Наші роботи</a></li>
        </ul>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(PannelMenu);
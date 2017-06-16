import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';

class Catalog extends React.Component {

  propTypes: {
    data: propTypes.object.isRequired,
  }

  render() {

    const data = this.props.data;
    const data_template = data.map(function(item, index){
      return(
        <div key={index} className={s[item.class]}>
          <a href="catalog"><img src={item.img} alt={item.alt} className={s[item.class_img]} /></a>
          <a href="catalog" className={s[item.class_link]}>{item.title}</a>
        </div>
      )
    });

    return (
      <div className={s.catalog}>
        <div className={s.title}>Каталог продукції</div>
        <div className={s.catalog__cover}>
          <div className={s.catalog__menu}>
            <ul className={s.catalog__menu_list}>
              <li className={s.menu_list__item1}>
              <a href='catalog' className={s.menu_list__link1}>Внутрішнє та зовнішнє оздоблення</a>
              </li>
              <li className={s.menu_list__item2}>
              <a href='catalog' className={s.menu_list__link2}>Складні архітектурні вироби</a>
              </li>
              <li className={s.menu_list__item3}>
              <a href='catalog' className={s.menu_list__link3}>Садово-паркове мистецтво</a>
              </li>
            </ul>
            <a href='catalog' className={s.catalog_menu__button}>Каталог продукції</a>
          </div>
          {data_template}
        </div>

      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Catalog);

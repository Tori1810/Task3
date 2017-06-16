import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Pannel.css';


class Pannel extends React.Component {

  render() {

    const button_text = "Зв'язатись з нами",
          description_text = "Створюємо шедеври з натурального каменю власноруч"

    return (
      <div className={s.pannel}>
        <div className={s.pannel_description}>
          <div className={s.pannel_description__main_block}>
            <div className={s.pannel_description__text}>{description_text}</div>
          </div>
          <div className={s.pannel__lang}>
            <a href="" className={s.pannel__lang_first}>УКР</a>
            <a href="" className={s.pannel__lang_second}>РУС</a>
          </div>
          <a className={s.pannel_description__button} href="#registration">{button_text}</a>
        </div>
        <div className={s.pannel_sidebar}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Pannel);

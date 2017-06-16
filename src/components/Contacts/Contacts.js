import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contacts.css';


class Contacts extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {

    return (

      <div className={s.contacts}>
        <div className={s.contacts__title}>{this.props.title}</div>
        <a className={s.contacts__phone} href="tel:+38 066 445 59 00">+38 066 445 59 00</a>
        <div className={s.contacts__adress}>м. Мукачево, вул. Переяславська, 1</div>
       </div> 
    );
  }
}

export default compose(
  withStyles(s),
)(Contacts);
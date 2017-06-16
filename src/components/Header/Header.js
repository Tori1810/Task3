import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import logoUrl from '../images/logo.png';


class Header extends React.Component {

  render() {

    return (
      <div className={s.header}>
      	<div className={s.logo_container}>
       		<img className={s.logo_img} src={logoUrl} alt="Logo" />
      		<div className={s.logo_title}>Майстерня</div>
      	</div>
      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(Header);

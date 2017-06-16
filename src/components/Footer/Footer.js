import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Contacts from '../Contacts/Contacts';
import PannelMenu from '../PannelMenu/PannelMenu';



class Footer extends React.Component {


  render() {


    const
      map_width = 660,
      map_height = 320;

    return (
      <div id='contacts' className={s.footer}>
        <div className={s.footer__map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.508323616663!2d30.448260015413403!3d50.45025827947538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc26736c1ab7%3A0x88d67e977eb6a0a0!2z0JrQvtCy0LDQu9GM0YHRjNC60LjQuSDQv9GA0L7QstGD0LvQvtC6LCAxLzUsINCa0LjRl9Cy!5e0!3m2!1suk!2sua!4v1496518582345"
          width={map_width} height={map_height}></iframe>
        </div>
        <div className={s.footer__sidebar}>
          <div className={s.footer__contacts}><Contacts title="Контакти" /></div>
          <div className={s.footer__pannel_menu}><PannelMenu /></div>
        </div>


      </div>


    );
  }
}

export default compose(
  withStyles(s),
)(Footer);

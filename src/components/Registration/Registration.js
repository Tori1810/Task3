import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Registration.css';


class Registration extends React.Component {


  render() {

    const
      placeholder_name="Ім'я",
      placeholder_phone="Телефон",
      placeholder_email="E-mail",
      placeholder_text="Ваша ідея або питання",
      button_text="Зв'язатись";

    return (

      <div id='registration' className={s.registration}>
        <h1 className={s.registration__title}>Виготовимо наступний шедевр разом</h1>
        <div className={s.registration_subtitle}>Зв'яжіться з нами та дізнайтесь більше</div>

        <form className={s.registration__form}>
          <input name="name" className={s.form__name} placeholder={placeholder_name} required/>
          <input name="phone" className={s.form__phone} placeholder={placeholder_phone} required/>
          <input name="email" className={s.form__email} placeholder={placeholder_email} required/>
          <textarea name="text" className={s.form__text} placeholder={placeholder_text}></textarea>
          <button className={s.form__button} type='submit'>{button_text}</button>


        </form>


      </div>

    );
  }
}

export default compose(
  withStyles(s),
)(Registration);

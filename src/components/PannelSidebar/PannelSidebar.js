import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PannelSidebar.css';
import PannelMenu from '../PannelMenu/PannelMenu';
import Contacts from '../Contacts/Contacts';


class PannelSidebar extends React.Component {

  render() {

    var contacts_title = "Майстерня";

    return (
      <div className={s.pannel_sidebar}>
        <div className={s.pannel_sidebar__img}></div>
        <div className={s.pannel_sidebar__contacts}><Contacts title={contacts_title}/></div>
        <div className={s.pannel_sidebar__menu}><PannelMenu /></div>

      </div>
    );
  }
}

export default compose(
  withStyles(s),
)(PannelSidebar);
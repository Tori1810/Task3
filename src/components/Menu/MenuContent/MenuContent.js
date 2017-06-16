import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MenuContent.css';
import PannelSidebar from '../../PannelSidebar/PannelSidebar';


class MenuContent extends React.Component {

  render() {

  	const button_text = "Зв'язатись з нами";

    return (
    	<div className={s.menu}>
    		<PannelSidebar />
    		<div className={s.menu__pannel_button}>
    			<a href="#registration" className={s.menu__button}>{button_text}</a>
    		</div>
    	</div>

    );
  }
}

export default compose(
  withStyles(s),
)(MenuContent);

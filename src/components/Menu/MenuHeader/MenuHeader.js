import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MenuHeader.css';
import MenuContent from '../MenuContent/MenuContent'


var MenuHeader = React.createClass ({

  	getInitialState: function(){
  		return{
  			visible: false
  		};
  	},

  	MenuClick: function(){

    	if (this.state.visible == false){
    		this.setState({visible: true})
    	}
    	else{
    		this.setState({visible: false})
    	}
  	},

  render() {

  	let visible = this.state.visible;


  	function component_template(){
  		if (visible == true){
  			return(<div>{<MenuContent />}</div>)
  		}
  		else{
  			return(<div className={s.none}>{<MenuContent />}</div>)
  		}
  	}

    return (
      <div className={s.menu}>
        <div className={s.menu__title}>Майстерня</div>
        <a href="#" onClick={this.MenuClick} className={s.menu__icon}></a>
        {component_template()}
      </div>
    );
  }
})

export default compose(
  withStyles(s),
)(MenuHeader);

import React, {Component} from "react";
import './menu.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import DropDown from './dropdown';

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            showMenu: false
        }
    }

    handleClick = () =>{
        this.setState({
            showMenu: !this.state.showMenu
        })
    }



    render (){
        return (
            <div>
                <div className = "dropdown-trigger" onClick= {this.handleClick.bind(this)}>
                    MENU  <i className ="fa fa-bars"></i>
                    
                </div>
                <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                    { this.state.showMenu && <DropDown /> }   
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Menu;
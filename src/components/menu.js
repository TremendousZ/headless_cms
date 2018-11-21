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

    handleClose = () => {
        this.setState({
            showMenu:false
        })
    }



    render (){
        return (
            <div>
                <div className = "dropdown-trigger" onClick= {this.handleClick.bind(this)}>
                   <span>MENU  </span> <i className ="fa fa-bars"></i>
                    
                </div>
                <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                    { this.state.showMenu && <DropDown  handleClose={this.handleClose.bind(this)}/> }   
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Menu;
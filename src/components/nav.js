import React, {Component} from "react";
import Menu from "./menu";
import {Link} from 'react-router-dom';
import "./nav.css";



class Nav extends Component {

    render(){

        let searchBarPlaceholderText = "Locate your keys.";
        return (
            <div className = "nav-container">
                <div className="nav-wrapper">
                    <Link to ="/" className = "logo"> 
                    </Link>
                    <input className = "search-bar" placeholer ={searchBarPlaceholderText} />
                    <Menu />
                </div>
            </div>
        )
    }
}

export default Nav;
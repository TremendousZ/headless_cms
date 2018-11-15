import React, {Component} from "react";
import Menu from "./menu";
import {Link} from 'react-router-dom';
import "./nav.css";



class Nav extends Component {

    render(){

        let searchBarPlaceholderText = "Find anything.";
        return (
            <div className = "nav-container">
                <div className="nav-wrapper">
                    <Link to ="/" className = "logo"> 
                    </Link>
                    <form className = "search-container">
                        <input className = "search-bar" placeholder ={searchBarPlaceholderText} /> 
                        <label className = "search-icon">
                            <i className = "fa fa-search"></i>
                        </label>
                    </form>
                    <Menu />
                </div>
            </div>
        )
    }
}

export default Nav;
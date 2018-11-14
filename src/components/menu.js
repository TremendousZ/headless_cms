import React, {Component} from "react";
import './menu.css';

class Menu extends Component {


    handleClick(){
        
    }


    render (){
        return (
            <div>
                <div className = "dropdown-trigger" onClick= {this.handleClick.bind(this)}>
                    MENU  <i className ="fa fa-bars"></i>
                </div>
                <div className = "menu-dropdown">
                    <div className ="menu-pages">
                    <label>PAGES</label>
                        <ul>
                            <li>THE CREW</li>
                            <li>ABOUT US</li>
                            <li>NEWS TIPS</li>
                            <li>ADVERTISE WITH US</li>
                            <li>PRIVACY POLICY</li>
                        </ul>
                    </div>
                    <div className = "menu-sections">
                    <label>SECTIONS</label>
                        <ul>
                            <li>ANIME NEWS</li>
                            <li>COMIC NEWS</li>
                            <li>GAMING NEWS</li>
                            <li>GAMING RUMORS</li>
                            <li>MOVIE NEWS</li>
                            <li>MOVIE RUMORS</li>
                            <li>MOVIE TRAILERS</li>
                            <li>TOY ANNOUNCEMENTS</li>
                            <li>TOY NEWS</li>
                            <li>TOY RUMORS</li>
                            <li>TV FEATURES</li>
                            <li>TV NEWS</li>
                        </ul>
                    </div>
                    <div className = "menu-links">
                        <ul>
                            <li>ALL NEWS</li>
                            <li>REVIEWS</li>
                            <li>GALLERIES</li>
                            <li>GIVEAWAYS</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
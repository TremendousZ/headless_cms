import React, {Component} from "react";
import Nav from './nav';
import Featured from './featured';
import Now from './now';
import Event from './event';
import Recent from "./recent";
import TechBuffalo from './techbuffalo';
import Footer from './footer';
import './home.css';

class HomePage extends Component {
    

    render(){
        return (
            <div>
                <Nav />
                <div className = "body-container">
                    <Featured />
                    <Now />
                    <Event />
                    <Recent />
                    <TechBuffalo />
                    <Footer />
                </div>
            </div>
        )
    }
}
export default HomePage;
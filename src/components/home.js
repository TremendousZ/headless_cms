import React, {Component} from "react";
import Nav from './nav';
import Featured from './featured';
import Now from './now';
import Event from './event';
import Recent from "./recent";
import TechBuffalo from './techbuffalo';
import Footer from './footer';

class HomePage extends Component {
    

    render(){
        return (
            <div>
                <Nav />
                <div>
                    <Featured />
                    <Now />
                    <Event />
                    <Recent />
                </div>
                <TechBuffalo />
                <Footer />
            </div>
        )
    }
}
export default HomePage;
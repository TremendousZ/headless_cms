import React, {Component} from "react";
import Nav from './nav';
import Featured from './featured';
import Now from './now';
import Event from './event';
import Recent from "./recent";
import TechBuffalo from './techbuffalo';
import Footer from './footer';
import './home.css';
import axios from 'axios';

class HomePage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            response: ""
        }
    }
   
    render(){
        
        const { response } = this.state;
        let post1, post2;
        console.log("RESPONSSSSSEE!!!" , response);
        if(response == true){
            post1 = this.state.response.data[0];
            post2 = this.state.response.data[1];
        } else {
            post1 = "";
            post2="";
        }
        return (
            <div>
                <Nav />
                <div className = "body-container">
                    <Featured />
                    <Now  post1 = {post1} post2 = {post2}/>
                    <Event />
                    <Recent postList = {response} />
                    <TechBuffalo />
                    <Footer />
                </div>
            </div>
        )
    }
}
export default HomePage;
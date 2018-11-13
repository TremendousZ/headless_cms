import React , {Component} from 'react';
import Post from './post';
import './techbuffalo.css';
import TLogo from "../assets/images/Technobuffalo-Logo (2).png";

class TechBuffalo extends Component{

    render(){
        return(
            <div className = "techbuffalo-container">
                <div className = "techbuffalo-content">
                    <div className = "techbuffalo-header">
                        <img src = {TLogo}/>
                        <div>GET YOUR TECH FIX</div>
                    </div>
                    <div className = "techbuffalo-posts">
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        )
    }
}

export default TechBuffalo;
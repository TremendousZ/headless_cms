import React , {Component} from 'react';
import Post from './post';
import './techbuffalo.css';
import logo from '../assets/images/logo.svg';

class TechBuffalo extends Component{

    render(){
        return(
            <div className = "techbuffalo-container">
                <div className = "techbuffalo-content">
                    <div className = "techbuffalo-header">
                    <img src={logo} className="header-logo2" alt="logo" />    
                    

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
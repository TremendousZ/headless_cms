import React , {Component} from 'react';
import Post from './post';
import './techbuffalo.css';

class TechBuffalo extends Component{

    render(){
        return(
            <div className = "techbuffalo-container">
                <div className = "techbuffalo-content">
                    <div className = "techbuffalo-header">
                        <div>Logo technobuffalo</div>
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
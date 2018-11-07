import React, {Component} from 'react';
import Post from './post';
import './recent.css';


class Recent extends Component{
    render(){
        return(
            <div className = "recent-container">
                <div className = "recent-content">
                <div className = "recent-name">RECENT</div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    }
}

export default Recent;
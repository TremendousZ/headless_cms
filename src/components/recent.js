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
                <div className = "recent-pagination"> 1 2 3 4 5 6</div>
            </div>
        )
    }
}

export default Recent;
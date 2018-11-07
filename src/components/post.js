import React, {Component} from 'react';
import './post.css';

class Post extends Component {

    render(){
        return (
            <div className = "post-container">
                <div className = "post-placeholder"></div>
                <div className = "post-title">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                <div className = "post-link">Article Source</div>
            </div>
        )
    }
}

export default Post;
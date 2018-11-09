import React, {Component} from 'react';
import './now.css';
import Post from './post';


class Now extends Component{

    constructor(props){
        super(props);
        this.state = {
            response:null,
            images: []
        }
        this.images = [];
    }

    render(){
        console.log(" NOW PROPS!@!", this.props);
        return (
            <div className = "now-container">
            <span>NOW</span>
                <div className = "now-box">
                    <Post id = {this.props.post1.featured_media} title = {this.props.post1.title.rendered} />
                    <Post id = {this.props.post2.featured_media} title = {this.props.post2.title.rendered} />
                </div>
            </div>
        )
    }
}

export default Now;
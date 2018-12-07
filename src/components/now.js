import React, {Component} from 'react';
import './now.css';
import Post from './post';
import {Link} from 'react-router-dom';


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
        let slug1 = '/post/' + this.props.post1.slug +"/"+ this.props.post1.id;
        let slug2 = '/post/' + this.props.post2.slug +"/"+ this.props.post2.id;
        return (
            <div className = "now-container">
            <span>NOW</span>
                <div className = "now-box">
                   <Link to={slug1}><Post imageId = {this.props.post1.featured_media} title = {this.props.post1.title.rendered} id ={this.props.post1.id} /></Link> 
                    <Link to={slug2}><Post imageId = {this.props.post2.featured_media} title = {this.props.post2.title.rendered} id ={this.props.post1.id} /></Link>
                </div>
            </div>
        )
    }
}

export default Now;
import React, {Component} from 'react';
import "./featured_post.css";
import axios from 'axios';

class FeaturedPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageURL:''
        }
    }

    componentDidMount(){
        this.getImageData();
    }

    async getImageData(){
        if(this.props.postId == undefined){
            return;
        }
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/media/" + this.props.postId ;
        const resp = await axios.get(dataURL);
        this.setState({
            imageURL:resp.data.guid.rendered
        })
    }


    render(){
        return(
            <div className = "featured-post-container">
                <div className = "featured-link"><a>Section Link</a></div>
                <img className = "featured-image" src = {this.state.imageURL} />
                <div className = "featured-screen"></div>
                <div className = "featured-title" dangerouslySetInnerHTML={{ __html: `${this.props.postTitle}`}}></div>
            </div>

        )
    }


}

export default FeaturedPost;
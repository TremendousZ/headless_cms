import React, {Component} from 'react';
import './post.css';
import axios from 'axios';

class Post extends Component {
    constructor(props){
        super(props);
        this.state= {
            imageURL:""
        }
    }

    async componentDidMount(){
        this.getImageData();
    }

    async getImageData(){
        if(this.props.id == undefined){
            return;
        }
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/media/" + this.props.id ;
        const resp = await axios.get(dataURL);
        this.setState({
            imageURL:resp.data.guid.rendered
        })
    }

    render(){
        return (
            <div className = "post-container">
                <img src = {this.state.imageURL} className = "post-placeholder"/>
                <div className = "post-title" dangerouslySetInnerHTML={{ __html: `${this.props.title}`}}>{}</div>
                <div className = "post-link">Article Source</div>
            </div>
        )
    }
}

export default Post;
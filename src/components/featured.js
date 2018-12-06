import React, {Component} from "react";
import './featured.css';
import FeaturedPost from './featured_post';
import axios from 'axios';

class Featured extends Component {

    constructor() {
        super();
        this.state = {
          posts: [],
          response:''
        }
        this.posts =[];
      }
    componentDidMount() {
       this.getData();
      }
      

    async getData(){
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts?categories=176";
        await axios.get(dataURL,{
            params: {
                per_page:3,
            }
        }).then(response=>{
            this.setState({response});
            console.log("featured response", response);
            this.createFeaturePosts(response.data);
        });
    }

    createFeaturePosts(postArray){
        for(let index = 0; index < postArray.length; index++){
            let featuredPost = <FeaturedPost key={Math.random()*10} postTitle={postArray[index].title.rendered} postId={postArray[index].featured_media} />
            this.posts.push(featuredPost);    
        }
        this.setState({
            posts:this.posts,
        })
    }



    

    render (){
        console.log("FEATURED RESPONSE CONSOLE LOG", this.state.response);
       
        return (
        <div className = "featured-container">
            <div className = "label">FEATURED</div>
            <div className = "featured-carousel">
                {this.state.posts}
            </div>
        </div>
        )
    }
}

export default Featured;
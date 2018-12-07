import React, {Component} from 'react';
import axios from 'axios';
import './post_content.css';

class PostContent extends Component{
    constructor(props){
        super(props);
        this.state={
            postTitle: '',
            postContent:'',
        }
    }
    async componentDidMount(){
        this.getPostData();
    }

   async getPostData(){
       if(this.props.match.params.postid == undefined){
           return;
       }
        let postData = "https://thenerdy.com/wp-json/post/v1/" + this.props.match.params.postid;
        console.log("AXIOS DATA URL ", postData);
        await axios.get(postData).then(response=>{
                this.setState({response});
                this.createSinglePost(response.data);
            });
        
    }

    createSinglePost(resp){
        let postTitle = resp.title;
        let postContent = resp.content;
        this.setState({
                postTitle,
                postContent
        })
    }
    render(){
        console.log("post-CoNTENT PROPS", this.props, this.state);
        return (
            <div className = "single-post-container">
                <div className ="single-post">
                    <div className = "single-post-title" dangerouslySetInnerHTML={{ __html: `${this.state.postTitle}}`}}></div>
                    <div className = "single-post-content" dangerouslySetInnerHTML={{ __html: `${this.state.postContent}`}}></div>
                </div>
            </div>
        )
    }
}

export default PostContent;
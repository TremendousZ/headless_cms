import React, {Component} from 'react';
import Post from './post';
import './recent.css';
import axios from "axios";


class Recent extends Component{
    constructor(props){
        super(props);
        this.state = {
            response: null
        }
        this.cardContainer = [];
    }

    async componentDidMount(){
        this.getData();
        
   }

   async getData(){
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts";
        const resp = await axios.get(dataURL);
            this.setState({
               response:resp
            });
        this.createPosts(); 
   }
    
    createPosts(){
        debugger;
        if(this.state.response == null){
            return;
        }
        let array = this.state.response.data;
        console.log("this response data" , array);
        for (let index = 2; index < 10; index++){
            let post = <Post key = {Math.random() * 1000}  id = {array[index].featured_media} title = {array[index].title.rendered} {...this.state}/>;
            this.cardContainer.push(post);
            console.log("THIS card container 1 ", this.cardContainer);
        }
        console.log("THIS card container 2 ", this.cardContainer);  
        this.setState({
            cardContainer: this.cardContainer
        })
    }

    render(){
        console.log("ReCent Props", this.props);
        return(
            <div className = "recent-container">
                <div className = "recent-content">
                <div className = "recent-name">RECENT</div>
                  {this.state.cardContainer}
                </div>
                <div className = "recent-pagination"> 1 2 3 4 5 6</div>
            </div>
        )
    }
}

export default Recent;
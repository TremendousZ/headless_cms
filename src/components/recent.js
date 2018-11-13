import React, {Component} from 'react';
import Post from './post';
import './recent.css';
import Pagination from "./pagination";


class Recent extends Component{
    constructor(props){
        super(props);
        this.state = {
            response: null,
            
        }
        this.cardContainer = [];
        this.linkContainer = [];
    }

    async componentDidMount(){
        this.createPosts();   
   }
    
    createPosts(){
        let array = this.props.postList.data;
        for (let index = 2; index < 20; index++){
            let post = <Post key = {Math.random() * 1000}  id = {array[index].featured_media} title = {array[index].title.rendered} {...this.state}/>;
            this.cardContainer.push(post);
        }
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
                <Pagination  fromPages = {this.props.fromPages} startingPage = {this.props.startingPage}/>
            </div>
        )
    }
}

export default Recent;
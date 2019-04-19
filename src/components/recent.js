import React, {Component} from 'react';
import Post from './post';
import './recent.css';
import Pagination from "./pagination";
import {Link} from 'react-router-dom';


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
        for (let index = 2; index < array.length; index++){
            let slug = '/post/' + array[index].slug +"/"+ array[index].id;
            let post = <Link to={slug}><Post key = {Math.random() * 1000}  imageId = {array[index].featured_media} title = {array[index].title.rendered} id ={array[index].id} {...this.state}/></Link>;
            this.cardContainer.push(post);
        }
        this.setState({
            cardContainer: this.cardContainer
        })
    }

    

    render(){
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
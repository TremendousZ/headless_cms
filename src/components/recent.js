import React, {Component} from 'react';
import Post from './post';
import './recent.css';
import {Link} from "react-router-dom";


class Recent extends Component{
    constructor(props){
        super(props);
        this.state = {
            response: null
        }
        this.cardContainer = [];
    }

    async componentDidMount(){
        this.createPosts();
        
   }
    
    createPosts(){
        debugger;
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
                <div className = "recent-pagination">
                    <Link to="/">1</Link>
                    <Link to ="/page/2">2</Link>
                    <Link to="/page/3">3</Link>
                    <Link to="/page/4">4</Link>
                    <Link to="/page/5">5</Link>
                    <div>...</div>
                    <Link to="/page/39">39</Link>
                </div>
            </div>
        )
    }
}

export default Recent;
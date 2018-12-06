import React,{Component} from 'react';
import './event.css';
import Post from './post';
import axios from 'axios';


class Event extends Component{
    constructor(props){
        super(props);

        this.state = {
            events:[]
        }
        this.events=[];
    }

    async componentDidMount(){
        this.getData();
        // this.getMore();
    }

    async getData(){
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts?coverage=131";
        await axios.get(dataURL,{
            params: {
                per_page:3,
            }
        }).then(response=>{
            this.setState({response});
            this.createPosts(response.data);
        });
    }

    createPosts(array){
        for (let index = 0; index < array.length; index++){
            let post = <Post key = {Math.random() * 1000}  id = {array[index].featured_media} title = {array[index].title.rendered} {...this.state}/>;
            this.events.push(post);
        }
        this.setState({
            events: this.events
        })
    }




    render(){
        return (
            <div className = "event-container">
                <div className = "event-content">
                <label className = "event-name">NEW YORK COMIC CON 2018</label>
                    {this.state.events}
                </div>
            </div>
        )
    }
}

export default Event;
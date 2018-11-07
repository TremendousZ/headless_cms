import React,{Component} from 'react';
import './event.css';
import Post from './post';
class Event extends Component{

    render(){
        return (
            <div className = "event-container">
                <div className = "event-content">
                <label className = "event-name">Event Name</label>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    }
}

export default Event;
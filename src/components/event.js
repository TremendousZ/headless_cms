import React,{Component} from 'react';
import './event.css';
class Event extends Component{

    render(){
        return (
            <div className = "event-container">
                <div className = "event-content">
                <label className = "event-name">Event Name</label>
                    <div className = "event-post">
                        <div className ="event-placeholder"></div>
                        <div className = "event-post-title">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className = "event-link">Article Source</div>
                    </div>
                    <div className = "event-post">
                        <div className ="event-placeholder"></div>
                        <div className = "event-post-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi?</div>
                        <div className = "event-link">Article Source</div>
                    </div>
                    <div className = "event-post">
                        <div className ="event-placeholder"></div>
                        <div className = "event-post-title">Lorem ipsum dolor sit amet.</div>
                        <div className = "event-link">Article Source</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;
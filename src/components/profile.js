import React , {Component} from 'react';
import {Link} from "react-router-dom";
import "./profile.css";

class Profile extends Component {
    constructor(props){
        super(props);


    }

    render(){
        return (
            <div className = "profile-container">
                <div className = "profile-post">
                    <img src={this.props.crewImage}/>
                    <div className = "profile-name">
                        {this.props.profileName}
                    </div>
                    <div className = "profile-post-link">READ POSTS</div>
                </div>
            </div>
        )
    }
}
export default Profile;
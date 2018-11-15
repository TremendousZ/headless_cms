import React, {Component} from 'react';
import Profile from './profile';
import './the_crew.css';

class TheCrew extends Component {
    constructor(props){
        super(props);
        this.state = {
            crew:[]
        }
        this.crew = []
    }

    componentDidMount(){
        this.buildProfiles();
    }

    buildProfiles(){
        let crewNames = ["Jon Rettinger", "Sean P. Aune", "Brandon Russell", "Eric Fredericksen","Danny Zepeda", "Ron Duwell"];
        for(let index = 0; index < 6; index++){
          let profilePost = <Profile profileName = {crewNames[index]}key = {Math.random()*10}/>
          this.crew.push(profilePost);
        }
        this.setState({
            crew: this.crew
        })
    }

    render(){
        return(
            <div className = "body-container">
                <div className = "crew-content">
                    <div className = "nerdy-crew-title">The Nerdy Crew</div>
                    <div className = "profiles">
                    {this.state.crew}
                    </div>
                </div>
            </div>
        )
    }
}

export default TheCrew;
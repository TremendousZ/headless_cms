import React, {Component} from "react";
import Nav from './nav';
import Featured from './featured';
import Now from './now';
import Event from './event';
import Recent from "./recent";
import TechBuffalo from './techbuffalo';
import Footer from './footer';
import './home.css';
import axios from 'axios';

class HomePage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            response: null,
            site:""
        }
    }

    async componentDidMount(){
        this.getData();
        this.getMore();
    }

    async getData(){
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts";
        await axios.get(dataURL,{
            params: {
                per_page:20,
            }
        }).then(response=>{
            this.setState({response});
        });
    }

    async getMore(){
        let dataURL = "https://thenerdy.com/wp-json/";
        const respObj = await axios.get(dataURL)
            console.log("LOOK FOR MORE HERE RESPONSE OBJECT" , respObj);
        
    }

    render(){
        const { response } = this.state;
        if(this.state.response == null){
            return (
                <div>
                    <Nav />
                    <div>Loading</div>
                </div>
                )
        } else {
            return (
                <div>
                    <Nav />
                    <div className = "body-container">
                        <Featured />
                        <Now  post1 = {response.data[0]} post2 = {response.data[1]}/>
                        <Event />
                        <Recent postList = {response} fromPages="false" />
                        <TechBuffalo />
                        <Footer />
                    </div>
                </div>
            )
        }
       
    }
}
export default HomePage;
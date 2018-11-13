import React, {Component} from 'react';
import Now from './now';
import Recent from "./recent";
import './home.css';
import Nav from './nav';
import axios from 'axios';
import Footer from './footer';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:"",
            response: null
        }
        this.startingPage;;

    }

    async componentDidMount(){
        const {page_number} = this.props.match.params
        this.setState({
            page: page_number
        })
        this.getData();
    }

    async getData(){
        debugger;
        this.startingPage = parseFloat(this.props.match.params.page_number);
        let offset = this.startingPage * 20;
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts";
        await axios.get(dataURL,{
            params: {
                per_page:20,
                offset
            }
        }).then(response=>{
            this.setState({response});
            console.log("State Set!");
        });
    }

    render(){
        const { response } = this.state;
        if(this.state.response == null){
            return (<div>Loading</div>)
        } else {
            console.log("this home state", this.state.response, response);
            return (
                <div>
                    <Nav />
                    <div className = "body-container">
                        <Now  post1 = {response.data[0]} post2 = {response.data[1]} />
                        <Recent postList = {response} fromPages = "true" startingPage={this.startingPage} />
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}

export default Pages;
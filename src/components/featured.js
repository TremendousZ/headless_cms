import React, {Component} from "react";
import './featured.css';

class Featured extends Component {

    constructor() {
        super();
        this.state = {
          movies: []
        }
      }
    componentDidMount() {
    //    this.getData();
      }

    // async getData(){
    //     let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts"
    //     // "https://thenerdy.com/wp-json/wp/v2/media";
    //   await fetch(dataURL)
    //       .then(res => res.json())
    //       .then(res => {
    //         this.setState({
    //           movies: res
    //         })
    //         console.log("RESPONSE",res);
    //       })
    // }

    render (){
        
       
        return (
        <div className = "featured-container">
            <div className = "label">FEATURED</div>
            <div className = "featured-carousel">
                <div className = "feature">
                    {/* <img src={this.state.movies}/> */}
                    <div className = "image-placeholder"></div>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing</span>
                </div>
                <div className = "feature">
                    {/* <img /> */}
                    <div className = "image-placeholder"></div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className = "feature">
                    {/* <img /> */}
                    <div className = "image-placeholder"></div>
                    <span>Lorem ipsum dolor sit amet.</span>
                </div>
            </div>
        </div>
        )
    }
}

export default Featured;
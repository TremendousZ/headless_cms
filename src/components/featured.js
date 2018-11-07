import React, {Component} from "react";
import './featured.css';

class Featured extends Component {


    render (){
        return (
        <div className = "featured-container">
            <div className = "label">FEATURED</div>
            <div className = "featured-carousel">
                <div className = "feature">
                    {/* <img /> */}
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
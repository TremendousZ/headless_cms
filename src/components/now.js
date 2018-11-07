import React, {Component} from 'react';
import './now.css';

class Now extends Component{
    render(){
        return (
            <div className = "now-container">
            <span>NOW</span>
                <div className = "now-box">
                    <div className = "now-feature feature-1">
                        {/* <img /> */}
                        <div className = "now-placeholder">

                        </div>
                        <div className = "now-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </div>
                    </div>
                    <div className = "now-feature">
                        {/* <img /> */}
                        <div className = "now-placeholder">

                        </div>
                        <div className = "now-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime.
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Now;
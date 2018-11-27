import React, {Component} from 'react';
import './news_tips.css';
class NewsTips extends Component {
    constructor(props){
        super(props);


    }


    render(){
        return (
            <div className = "body-container">
                <div className = "news-tips-content">
                    <div className = "news-tips-title">News Tips</div>
                    <form className = "news-tips-form">
                        <div className = "news-tip-instruction">Have a tip for us?  Fill out the form below and we’ll look it over!</div> 
                        <label>YOUR NAME <span></span></label>
                        <input type="text" name = "name" />
                        <label>EMAIL <span></span></label>
                        <input className = "email-input" type="text" name = "email" />
                        <input className = "confirm-email" type="text" name = "email-confirm" />
                        <label className = "email-input-label">ENTER EMAIL</label>
                        <label className = "email-confirm-label" >CONFIRM EMAIL</label>
                        <div className = "tip-title" >Your Tip</div>
                        <label>TITLE</label>
                        <input type = "text" name = "title-input" />
                        <label>ARTICLE</label>
                        <textarea type="textarea" name="article"/>
                        <label>LIST OF IMAGE URLS</label>
                        <input className = "image-url-input" type="text"  name = "image-url-list" />
                        <i className = "fa fa-plus-circle"></i>
                        <label>LIST OF VIDEO URLS</label>
                        <input className = "video-url-input" type="text" name = "video-url-list" />
                        <i className = "fa fa-plus-circle"></i>
                        <label className = "consent-statement">I CONSENT TO MY SUBMITTED DATA BEING COLLECTED AND STORED</label>
                        <input type="checkbox" className = "news-checkbox" label = "yes" key = "yes" name = "consent" />
                        <label id = "news-checkbox-label">YES</label>
                        <button className = "tip-form-submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewsTips;
import React, {Component} from 'react';
import './advertise_with_us.css';

class Advertise extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className = "body-container">
            <div className = "advertise-container">
                <div className = "advertise-content">
                    <div className = "advertise-image">
                        <p>Make Your Impression with us</p>
                    </div>
                    <div className = "advertise-traffic-title">
                        Where Our Traffic Comes From
                        

                    </div>
                    <div className = "advertise-map-image">
                        <div class="advertising-stat"><strong>5.69%</strong><br>
                            </br><span>Canada</span></div>
                            <div class="advertising-stat"><strong>55.19%</strong><br></br>
                            <span>United States</span>
                            </div>
                            <div class="advertising-stat"><strong>7.62%</strong>
                            <br></br><span>United Kingdom</span></div>
                            <div class="advertising-stat"><strong>2.56%</strong>
                            <br></br><span>India</span></div>
                            <div class="advertising-stat"><strong>24%</strong>
                            <br></br><span>Other</span></div>
                            <div class="advertising-stat"><strong>2.17%</strong>
                            <br></br><span>Australia</span></div>
                    </div>
                    <div className = "gender-breakdown">
                        <div>Gender Breakdown</div>
                        <div class="male">
                            70%<i class="fa fa-mars"/>
                            <div class="demographic">Male Viewership</div>
                        </div>
                        <div class="female">
                            30%<i class="fa fa-venus"/>
                            <div class="demographic">Female Viewership</div>
                        </div>
                        
                        
                    </div>
                    <div className = "operating-system-breakdown">
                        Operating System Breakdown
                    </div>
                    <div className = "user-breakdown-image">

                    </div>
                    <div className = "advertise-text">
                        <h1>Who Is TechnoBuffalo</h1>
                        <p>
                        TechnoBuffalo was founded on October 15th, 2009 and is quickly growing into a leading tech news and review site.  Founded by Jonathan Rettinger who has had a long life love affair with technology, and he wanted to share that with the reading public.  The site is quickly growing with a loyal following of people always hungry for more reviews and news.
                        Before he started TechnoBuffalo, Mr. Rettinger started a YouTube channel (YouTube/users/Jon4Lakers) in June 2007 to share his love of consumer electronics by posting reviews and unboxing videos.  Thanks to his engaging style, his videos quickly grew in popularity to where he now enjoys over 940,000 subscribers and over 14 million views a month.
                        </p>
                        <h1>Advertising Benefits</h1>
                        <p>TechnoBuffalo delivers cutting edge technology content to a tech-savvy audience. Positioning your product before our readership through an advertising campaign is an intelligent way to target a young demographic that has a high level of disposable income for technology-related purchases. Our well-integrated IAB units guarantee a high level of visibility for your brand or message. We also offer custom advertising solutions such as site skins, dog ears, interstitial, and other high impact solutions.
                        We invite you to peruse some statistics on our readership, and should you have any questions, please contact our sales team.
                        </p>
                        <h1>Contact Us</h1>
                        <form className = "advertise-form">
                            <label>YOUR NAME <span></span></label>
                            <input name = "contact-name" type = "text" />
                            <label>YOUR EMAIL <span></span></label>
                            <input name = "contact-email" type = "text" />
                            <label>YOUR WEBSITE</label>
                            <input name = "contact-website" type = "text" />
                            <label>YOUR MESSAGE <span></span></label>
                            <textarea  name = "contact-message" />
                            <label>I CONSENT TO MY SUBMITTED DATA BEING COLLECTED AND STORED</label>
                            <input type = "checkbox" name = "contact-consent"  id = "advertise-checkbox"/>
                            <label id = "consent-label">YES</label>
                            
                            
                            <button className = "contact-submit" >SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
            </div>
        )
    }

}

export default Advertise;
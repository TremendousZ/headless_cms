import React from 'react';
import AboutUsImg from '../assets/images/TechnoBuffalo-Stats.jpg';
import './about_us.css';

export default () => {
    
        return (
            <div className = "body-container">
                <div className = "about-us-content">
                    <div className = "about-us-title">About Us</div>
                    <div className = "about-us-description">
                    <span>TechnoBuffalo has one focus: To help you get the most out of your tech lifestyle. </span>
                        The content on TechnoBuffalo is created by a team of professional writers that are tech-enthusiasts. Our articles cover a breadth of technology-related issues and topics from everyday uses to the business side of the industry. In order to breathe life into our content, we make frequent use of video to supplement our text. Posts on TechnoBuffalo are not simply rehashes of news found on other sites; instead, each article provides value to the reader through editorial commentary, descriptive ‘how-to’ guides and immersive video.
                        At its core, TechnoBuffalo is about experiencing technology, which includes sharing views and opinions with others. Through the site’s reviews, opinions, and news stories, we’ll make sure you lead the tech-filled lifestyle that you want, without the missteps of purchasing technology that doesn’t quite live up to its hype or promises.  From computer peripherals to video games and major home appliances like televisions, we hope to help you find the technology that best suits your needs.
                    </div>
                    <img className ="about-us-image"src = {AboutUsImg}/>
                </div>
            </div>
        )
    

}
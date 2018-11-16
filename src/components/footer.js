import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
        <div className = 'footer-container'>
            <div className = "footer-content">
                <div>
                © 2018 TechnoBuffalo LLC. All Rights Reserved.
                </div>
                <ul className ="footer-links">
                    <li><Link to = '/crew/' >Our Crew</Link></li>
                    <li><Link to = '/about-us/' >About Us</Link></li>
                    <li>Contact Us</li>
                    <li><Link to = '/privacy' >Privacy Policy</Link></li>
                    <li>Term of Use</li>
                    <li>All Categories</li>
                </ul>

            </div>
        </div>
    )
}


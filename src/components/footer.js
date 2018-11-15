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
                    <li><Link to = '/crew/1/' >Our Crew</Link></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Term of Use</li>
                    <li>All Categories</li>
                </ul>

            </div>
        </div>
    )
}


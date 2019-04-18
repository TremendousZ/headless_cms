import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
        <div className = 'footer-container'>
            <div className = "footer-content">
                <div>
                © 2019 TechnoBuffalo LLC. All Rights Reserved.
                <ul className ="footer-links">
                    <li><Link to = '/crew/' >Our Crew</Link></li>
                    <li><Link to = '/about-us/' >About Us</Link></li>
                    <li><Link to='/'>Contact Us</Link></li>
                    <li><Link to = '/privacy' >Privacy Policy</Link></li>
                    <li><Link to = '/'>Term of Use</Link></li>
                    <li><Link to='/'>All Categories</Link></li>
                </ul>
                </div>
                

            </div>
           
        </div>
    )
}


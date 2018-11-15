import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DropDown extends Component {
    render(){
        return (
            <div className = "menu-dropdown" onClick={this.props.handleClose}>
                    <div className ="menu-pages">
                    <label>PAGES</label>
                        <ul>
                            <li><Link to='/crew/'>THE CREW</Link></li>
                            <li><Link to='/about-us/'>ABOUT US</Link></li>
                            <li>NEWS TIPS</li>
                            <li>ADVERTISE WITH US</li>
                            <li>PRIVACY POLICY</li>
                        </ul>
                    </div>
                    <div className = "menu-sections">
                    <label>SECTIONS</label>
                        <ul>
                            <li><Link to = "/category/anime/anime-news/">ANIME NEWS</Link></li>
                            <li><Link to = "/category/comics/comic-news/">COMIC NEWS</Link></li>
                            <li><Link to = "/category/gaming/gaming-news/">GAMING NEWS</Link></li>
                            <li><Link to ="/category/gaming/gaming-rumors/">GAMING RUMORS</Link></li>
                            <li><Link to = "/category/movies/movie-news/">MOVIE NEWS</Link></li>
                            <li><Link to = "/category/movies/movie-rumors/">MOVIE RUMORS</Link></li>
                            <li><Link to = "/category/movies/movie-trailers/">MOVIE TRAILERS</Link></li>
                            <li><Link to = "/category/toys/toy-announcements/">TOY ANNOUNCEMENTS</Link></li>
                            <li><Link to = "/category/toys/toy-news/">TOY NEWS</Link></li>
                            <li><Link to = "/category/toys/toy-rumors/">TOY RUMORS</Link></li>
                            <li><Link to = "/category/tv/tv-features/">TV FEATURES</Link></li>
                            <li><Link to = "/category/tv/tv-news/">TV NEWS</Link></li>
                        </ul>
                    </div>
                    <div className = "menu-links">
                        <ul>
                            <li><Link to = "/">ALL NEWS</Link></li>
                            <li><Link to = "/label/reviews">REVIEWS</Link></li>
                            <li><Link to = "/label/gallery/">GALLERIES</Link></li>
                            <li><Link to = "/label/giveaway/">GIVEAWAYS</Link></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default DropDown;
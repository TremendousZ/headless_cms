import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DropDown extends Component {
    constructor(props){
        super(props);

        this.state={
            url:""
        }
    }

    checkURL(){
        let {categoryName} = this.props.match.params;
        this.setState({
            url: categoryName
        })
    }
   

    render(){
        return (
            <div className = "menu-dropdown" onClick={this.props.handleClose}>
                    <div className ="menu-pages">
                    <label>PAGES</label>
                        <ul>
                            <li><Link to='/crew/' rel="nofollow">THE CREW</Link></li>
                            <li><Link to='/about-us/' rel="nofollow">ABOUT US</Link></li>
                            <li><Link to ='/news-tips/' rel="nofollow">NEWS TIPS</Link></li>
                            <li><Link to ='/advertise/' rel="nofollow">ADVERTISE WITH US</Link></li>
                            <li><Link to ='/privacy/' rel="nofollow">PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                    <div className = "menu-sections">
                    <label>SECTIONS</label>
                        <ul>
                            <li><Link to = "/category/anime/anime-news/" onClick={this.checkURL} rel="nofollow">ANIME NEWS</Link></li>
                            <li><Link to = "/category/comics/comic-news/" onClick={this.checkURL} rel="nofollow">COMIC NEWS</Link></li>
                            <li><Link to = "/category/gaming/gaming-news/" onClick={this.checkURL} rel="nofollow">GAMING NEWS</Link></li>
                            <li><Link to ="/category/gaming/gaming-rumors/" onClick={e => e.preventDefault()}>GAMING RUMORS</Link></li>
                            <li><Link to = "/category/movies/movie-news/" onClick={this.checkURL} rel="nofollow">MOVIE NEWS</Link></li>
                            <li><Link to = "/category/movies/movie-rumors/" onClick={this.checkURL} rel="nofollow">MOVIE RUMORS</Link></li>
                            <li><Link to = "/category/movies/movie-trailers/" onClick={this.checkURL} rel="nofollow">MOVIE TRAILERS</Link></li>
                            <li><Link to = "/category/toys/toy-announcements/" onClick={this.checkURL} rel="nofollow">TOY ANNOUNCEMENTS</Link></li>
                            <li><Link to = "/category/toys/toy-news/" onClick={this.checkURL} rel="nofollow">TOY NEWS</Link></li>
                            <li><Link to = "/category/toys/toy-rumors/" onClick={e => e.preventDefault()}>TOY RUMORS</Link></li>
                            <li><Link to = "/category/tv/tv-features/" onClick={e => e.preventDefault()} rel="nofollow">TV FEATURES</Link></li>
                            <li><Link to = "/category/tv/tv-news/" onClick={this.checkURL} rel="nofollow">TV NEWS</Link></li>
                        </ul>
                    </div>
                    <div className = "menu-links">
                        <ul>
                            <li><Link to = "/" onClick={this.checkURL} rel="nofollow">ALL NEWS</Link></li>
                            <li><Link to = "/label/reviews" onClick={this.checkURL} rel="nofollow">REVIEWS</Link></li>
                            <li><Link to = "/label/gallery/" onClick={this.checkURL} rel="nofollow">GALLERIES</Link></li>
                            <li><Link to = "/label/giveaway/" onClick={this.checkURL} rel="nofollow">GIVEAWAYS</Link></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default DropDown;
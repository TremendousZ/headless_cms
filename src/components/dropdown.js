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
                            <li><Link to='/crew/'>THE CREW</Link></li>
                            <li><Link to='/about-us/'>ABOUT US</Link></li>
                            <li><Link to ='/news-tips/'>NEWS TIPS</Link></li>
                            <li><Link to ='/advertise/'>ADVERTISE WITH US</Link></li>
                            <li><Link to ='/privacy/'>PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                    <div className = "menu-sections">
                    <label>SECTIONS</label>
                        <ul>
                            <li><Link to = "/category/anime/anime-news/" onClick={this.checkURL}>ANIME NEWS</Link></li>
                            <li><Link to = "/category/comics/comic-news/" onClick={this.checkURL}>COMIC NEWS</Link></li>
                            <li><Link to = "/category/gaming/gaming-news/" onClick={this.checkURL}>GAMING NEWS</Link></li>
                            <li><Link to ="/category/gaming/gaming-rumors/" onClick={e => e.preventDefault()}>GAMING RUMORS</Link></li>
                            <li><Link to = "/category/movies/movie-news/" onClick={this.checkURL}>MOVIE NEWS</Link></li>
                            <li><Link to = "/category/movies/movie-rumors/" onClick={this.checkURL}>MOVIE RUMORS</Link></li>
                            <li><Link to = "/category/movies/movie-trailers/" onClick={this.checkURL}>MOVIE TRAILERS</Link></li>
                            <li><Link to = "/category/toys/toy-announcements/" onClick={this.checkURL}>TOY ANNOUNCEMENTS</Link></li>
                            <li><Link to = "/category/toys/toy-news/" onClick={this.checkURL}>TOY NEWS</Link></li>
                            <li><Link to = "/category/toys/toy-rumors/" onClick={e => e.preventDefault()}>TOY RUMORS</Link></li>
                            <li><Link to = "/category/tv/tv-features/" onClick={this.checkURL}>TV FEATURES</Link></li>
                            <li><Link to = "/category/tv/tv-news/" onClick={this.checkURL}>TV NEWS</Link></li>
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
import React, {Component} from 'react';
import Now from './now';
import Recent from "./recent";
import './home.css';
import './categories.css';
import axios from 'axios';

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            category:"",
            categoryName:"",
            response: null
        }
        this.endpoint;
    }

    async componentDidMount(){
        const {category, categoryName, reviews} = this.props.match.params;
        let newCategory; 
        if(category === "label"){
            switch(categoryName){
                case "gallery":
                newCategory = "gallery";
                break;
                case "reviews":
                newCategory = "reviews";
                break;
                case "giveaway":
                newCategory = "giveaway";
                break;
            }
            this.setState({
                category: newCategory,
            })
        } else {
            this.setState({
                category,
            })
        }
        this.determineEndpoint( categoryName );
        this.styleCategoryName(categoryName, category, reviews);
        
        if(reviews !=="crews-2"){
            this.getData();
        }
       
    }

    determineEndpoint( catName ){

        switch(catName){
            case "anime-news":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=177";
            break;
            case "comic-news":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=46";
            break;
            case "gaming-news":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=53";
            break;
            case "movie-news":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=39";
            break;
            case "toy-news":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=64";
            break;
            case "tv-news":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=31";
            break;
            case "gaming-rumors":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=54";
            break;
            case "movie-rumors":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=40";
            break;
            case "toy-rumors":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=65";
            break;
            case "movie-trailers":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=89";
            break;
            case "toy-announcements":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=66";
            break;
            case "tv-features":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?categories=35";
            break;
            case "reviews":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?label=105";
            break;
            case "giveaway":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?label=96";
            break;
            case "gallery":
            this.endpoint = "https://thenerdy.com/wp-json/wp/v2/posts?label=159";
            break;
        }
    }

    styleCategoryName( categoryName, category, reviews ){
        if(reviews == "reviews" ){
            let splitCategory = reviews.split("");
            splitCategory[0] = splitCategory[0].toUpperCase();
            let rejoinedCategory = splitCategory.join("");
            this.setState({
                categoryName:rejoinedCategory
            })
            return;
        } 
        if(category ==="label"){
            let splitCategoryName = categoryName.split("");
            splitCategoryName[0] = splitCategoryName[0].toUpperCase();
            let rejoinedCategory = splitCategoryName.join("");
            this.setState({
                categoryName:rejoinedCategory
            })
            return;
        }
        let splitName = categoryName.split("");
        for(let index =0; index < splitName.length;index++){
            let currentLetter = splitName[index];
            if(currentLetter === "-"){
                splitName[index] = " "; 
                splitName[0] = splitName[0].toUpperCase();
                splitName[index+1] = splitName[index+1].toUpperCase();  
            }


        }
                splitName = splitName.join("");
                this.setState({
                    categoryName:splitName
                });
        
    }

    async getData(){
        let categoryURL = `${this.endpoint}`;
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts";
        await axios.get(categoryURL,{
            params: {
                per_page:11,
            }
        }).then(response=>{
            this.setState({response});
        });
    }

   

    render(){
        const { response } = this.state;
        if(this.state.response == null){
            return (
                        <span></span>
                )
        } else {
            return (
                    <div className = "body-container">
                        <div className = "section-title">{this.state.categoryName}</div>
                        <Now  post1 = {response.data[0]} post2 = {response.data[1]} />
                        <Recent postList = {response} fromPages = "false" />
                    </div>
            )
        }
    }
}

export default Categories;
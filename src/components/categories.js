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

    }

    async componentDidMount(){
        const {category, categoryName, reviews} = this.props.match.params;
        console.log(category,categoryName, reviews);
        this.styleCategoryName(categoryName, category, reviews);
        this.setState({
            category,
        })
        if(reviews !=="crews-2"){
            this.getData();
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
        let categoryURL = `https://thenerdy.com/wp-json/wp/v2/posts/${this.state.category}/${this.state.categoryName}/`;
        let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts";
        await axios.get(dataURL,{
            params: {
                per_page:20,
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
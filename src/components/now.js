import React, {Component} from 'react';
import './now.css';
import axios from 'axios';


class Now extends Component{

    constructor(props){
        super(props);
        this.state = {
            response:null,
            images: []
        }
        this.images = [];
    }


    async componentDidMount(){
        this.getData();   
   }

   async getData(){
       let dataURL = "https://thenerdy.com/wp-json/wp/v2/posts";
       await axios.get(dataURL).then(response=>{
           this.setState({response});
       });
    //    this.getImageData()
   }

//    async getImageData(){
//     if(this.props.id == undefined){
//         return;
//     }
//     let dataURL = "https://thenerdy.com/wp-json/wp/v2/media/" + this.props.id ;
//     const resp = await axios.get(dataURL);
//     console.log("post image response", resp);
//     this.setState({
//         imageURL:resp.data.guid.rendered
//     })
// }

    render(){
        let post1title,post2title,post1image,post2image;
        console.log("Now Props", this.props);
        if ( this.state.response == null) {
            post1title = '';
            post2title = '';
        } else {
            post1title = this.state.response.data[0].title.rendered;
            post2title = this.state.response.data[1].title.rendered;
        }
        return (
            <div className = "now-container">
            <span>NOW</span>
                <div className = "now-box">
                    <div className = "now-feature feature-1">
                        <img src = {post1image} className = "now-placeholder" />
                        <div className = "now-text" dangerouslySetInnerHTML={{ __html: `${post1title}`}}>
                        </div>
                    </div>
                    <div className = "now-feature">
                        {/* <img /> */}
                        <img src = {post2image} className = "now-placeholder" />
                        <div className = "now-text" dangerouslySetInnerHTML={{ __html: `${post2title}`}}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Now;
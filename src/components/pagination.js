import React, {Component } from "react";
import {Link, withRouter} from "react-router-dom";


class Pagination extends Component {
    constructor(props){
        super(props);
        this.state={
            linkContainer: [],
            pageNumber:1,
        }
        this.linkContainer = [];
    
    }

    componentDidMount(){
        this.createPagination();
    }

    checkChange(){
        let {pageNumber} = this.props.match.params;
        this.setState({
            pageNumber
        })
    }

    createPagination(){
            let startingPage = this.props.startingPage;
            for(let index = startingPage; index < startingPage + 9; index++){
                let linkTo = `/page/${index}/`;
                let links = <Link to ={linkTo} key ={Math.random()*10} onClick={this.checkChange}>{index}</Link>;
                this.linkContainer.push(links);
            }
            this.setState({
                linkContainer:this.linkContainer
            }) ;
        }   

    render(){
        console.log("PAGINATION PROPS", this.props);
        if(this.props.fromPages === "true"){
            let prev = `/page/${this.props.startingPage - 1}/`;
            let next = `/page/${this.props.startingPage + 1}/`
            return (
                <div className = "recent-pagination">
                    <Link to = {prev} onClick={this.checkChange}>PREV</Link>
                    <Link to="/">1</Link>
                    <div>...</div>
                    {this.state.linkContainer}
                    <div>...</div>
                    <Link to="/page/39/" onClick={this.checkChange}>39</Link>
                    <Link to={next} onClick={this.checkChange}>NEXT</Link>
                </div>
            )
        } else {
            return (
                <div className = "recent-pagination">
                    <Link to="/">1</Link>
                    <Link to ="/page/2/">2</Link>
                    <Link to="/page/3/">3</Link>
                    <Link to="/page/4/">4</Link>
                    <Link to="/page/5/">5</Link>
                    <Link to="/page/6/">6</Link>
                    <Link to="/page/7/">7</Link>
                    <Link to="/page/8/">8</Link>
                    <div>...</div>
                    <Link to="/page/39/">39</Link>
                </div>
                )
        }   
    }
}
export default withRouter(Pagination);
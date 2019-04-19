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
            for(let index = startingPage; index < startingPage + 6; index++){
                let linkTo = `/page/${index}/`;
                let links = <Link to ={linkTo} key ={Math.random()*10} onClick={this.checkChange} rel="nofollow">{index}</Link>;
                this.linkContainer.push(links);
            }
            this.setState({
                linkContainer:this.linkContainer
            }) ;
        }   

    render(){
        if(this.props.startingPage > 2 && this.props.fromPages === "true"){
            let prev = `/page/${this.props.startingPage - 1}/`;
            let next = `/page/${this.props.startingPage + 1}/`
            return (
                <div className = "recent-pagination">
                    <Link class = "previous" to = {prev} onClick={this.checkChange} rel="nofollow">PREVIOUS</Link>
                    <Link to="/" rel="nofollow">1</Link>
                    <div>...</div>
                    {this.state.linkContainer}
                    <div>...</div>
                    <Link to="/page/48/" onClick={this.checkChange} rel="nofollow">48</Link>
                    <Link class = "next" to={next} onClick={this.checkChange} rel="nofollow">NEXT</Link>
                </div>
            )
        } else {
            return (
                <div className = "recent-pagination">
                    <Link to="/" rel="nofollow">1</Link>
                    <Link to ="/page/2/" rel="nofollow">2</Link>
                    <Link to="/page/3/" rel="nofollow">3</Link>
                    <Link to="/page/4/" rel="nofollow">4</Link>
                    <Link to="/page/5/" rel="nofollow">5</Link>
                    <div>...</div>
                    <Link to="/page/48/" rel="nofollow">48</Link>
                </div>
                )
        }   
    }
}
export default withRouter(Pagination);
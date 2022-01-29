import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {  
    static defaultProps = {
        country:'in',
        pageSize:6,
        category:'general',
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }

    constructor() {
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6def19df98414c929e5f7f9a352d13cc&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData= await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
    }

    handlePrevious =async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6def19df98414c929e5f7f9a352d13cc
        &page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData= await data.json()
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })

    }
    handleNext= async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6def19df98414c929e5f7f9a352d13cc&page=${this.state.page + 1}
        &pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData= await data.json()
        this.setState({
            page:this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
    }
}
            
    render() {
        const year = new Date().getFullYear();
              return (
            <div className='container my-3'>
                <h2 className='text-center' style={{margin:"70px 0px",fontFamily:"fantasy",fontSize:"50px"}}>Daily News - Top Headlines</h2>
                {this.state.loading &&  <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                       return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,85):""}
                 imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
                    })}  
                </div>
                <div className="d-flex justify-content-between">
                <button  disabled={this.state.page<=1}type="button" className="btn btn-success" onClick={this.handlePrevious}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-outline-success" onClick={this.handleNext}>Next &rarr;</button>
                </div>
                <div className="footer my-3 text-center">
                    Created By Ankit Chhetri @ {year}
                </div>
            </div>
        )
    }
}

export default News

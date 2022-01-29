import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props; 
        return (
                <div className='my-3'>
                <div className="card" style={{width:"18rem"}}>
                <span class="badge badge-info" style={{backgroundColor:"red",color:"white"}}>{source}</span>
                    <img src={imageUrl?imageUrl:"https://gumlet.assettype.com/bloombergquint%2F2022-01%2Fac6dcc74-6fca-4bb8-ab54-8465a1ef5eda%2F371164228.jpg?rect=0%2C16%2C3998%2C2099&w=1200&auto=format%2Ccompress&ogImage=true"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} <span class="badge badge-secondary" style={{color:"white",backgroundColor:"gray"}}>New</span></h5>
                            <p className="card-text">{description?description:"LOADING PROBLEM..GOTO READ MORE"}..</p>
                            <p class="card-text"><small class="text-muted">By {author?author:'UNKNOWN'} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
                </div>
           
        )
    }
}

export default NewsItem

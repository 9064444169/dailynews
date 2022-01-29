import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/general" style={{fontSize:"50px",fontFamily:"fantasy"}}>DailyNews</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/general">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/entertainment">Entertainment</Link>
                        </li>   
                        <li className="nav-item">
                            <Link className="nav-link" style={{fontSize:"20px",fontFamily:"fantasy",color:"#F4B400"}} to="/technology">Technology</Link>
                        </li>      
                        </ul>
                    </div>
                    </nav>
            </div >
        )
    }
}

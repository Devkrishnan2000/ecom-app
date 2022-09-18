import React, { Component } from "react";
import "./css/userreview.css";

export default class Review extends Component
{
    constructor(props)
    {
        super(props);
    }

    setrating()
    {
       switch(this.props.rating)
       {
           case "0": return "images/star/stars0.svg";
           case "1": return "images/star/stars1.svg";
           case "2": return "images/star/stars2.svg";
           case "3": return "images/star/stars3.svg";
           case "4": return "images/star/stars4.svg";
           case "5": return "images/star/stars5.svg";
           default :return "images/star/stars0.svg";
       }
    }

    render()
    {
        return(
               <div>
                <div className="user">
                  <img src="images\User\profile.png" ></img> 
                  <h5>{this.props.usrname}</h5>
                </div>
                <div className="content">
                  <img src={this.setrating()}></img>
                  <h5 className="title">{this.props.title}</h5>
                  <h6 className="cont">{this.props.content}</h6>
                </div>
               </div>
        )
    }
}
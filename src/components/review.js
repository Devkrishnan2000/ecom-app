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
                  <h6 className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus nisi arcu, eu convallis dolor fringilla a. Fusce posuere euismod dui non vestibulum. Aenean finibus ex eget rutrum vehicula. Donec ornare massa sed ex facilisis, sed porttitor felis mattis. Etiam blandit pellentesque eros, non finibus lectus lacinia id. Ut vehicula finibus massa eget convallis. Phasellus et hendrerit diam. Aliquam facilisis molestie nulla sit amet semper. Curabitur in ornare arcu. In efficitur vitae tortor non posuere. Mauris sit amet velit aliquam, tincidunt augue at, pretium libero. Donec quis lorem vel turpis volutpat tempor vitae luctus mauris.</h6>
                </div>
               </div>
        )
    }
}
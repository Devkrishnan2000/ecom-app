import React, { Component } from "react";
import "./css/part.css";
import "./css/text.css";
export default class Part extends Component
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
        }
     }
    render()
    {
         
        return(
              <div className="cube">
              <img src={this.props.img}></img>
              <img src={this.setrating()}></img>
              <h5>{this.props.name}</h5>
              <h6 style={{marginTop: 10+"px"}}>₹ {this.props.price}.00</h6>
              </div>
        )
    }
}
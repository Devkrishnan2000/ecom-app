import React, { Component } from "react";
import "./css/price.css";
import "./css/discount.css";
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
            default :return "images/star/stars0.svg";
        }
     }

     setprice()
     {
        if(this.props.offerprice!=="-1")
        {
            return(
                <div className="price-div">
                  <h6 className="norm-price" >₹ {this.props.price}.00</h6>
                  <h6 style={{marginTop: 10+"px",fontWeight: 500+"px"}}>₹ {this.props.offerprice}.00</h6>
                </div>
            )
        }
        else
        return(
            <h6 style={{marginTop: 23+"px",fontWeight: 500+"px"}}>₹ {this.props.price}.00</h6>
        ) 
     }

     setdiscount()
     {
       
        if(this.props.discount!=="-1")
        {
            return(
                <div className="discount-div">
                <h6>{this.props.discount}% off</h6>
                </div> 
            )
        }
     }
    render()
    {
         
        return(
              <div className="cube">
              {this.setdiscount()}
              <img src={this.props.img}></img>
              <img src={this.setrating()}></img>
              <h5>{this.props.name}</h5>
              {this.setprice()}
              </div>
        )
    }
}
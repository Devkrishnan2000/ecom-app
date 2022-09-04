import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/price.css";
import "./css/discount.css";
class Part extends Component
{
     constructor(props)
     {
        super(props);
        this.viewpart = this.viewpart.bind(this);

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

     viewpart()
     {
        this.props.history.push({
            pathname: '/productPage',
            state :{id:this.props.id}
        });
     }

     setprice()
     {
        if(this.props.offerprice!=="-1")
        {
            return(
                <div className="price-div">
                  <h5 className="norm-price" >₹ {this.props.price}.00</h5>
                  <h5 style={{marginTop: 10+"px",fontWeight: 500+"px"}}>₹ {this.props.offerprice}.00</h5>
                </div>
            )
        }
        else
        return(
            <h5 style={{marginTop: 23+"px",fontWeight: 500+"px"}}>₹ {this.props.price}.00</h5>
        ) 
     }

     setdiscount()
     {
       
        if(this.props.discount!=="-1")
        {
            return(
                <div className="discount-div">
                <h5>{this.props.discount}% off</h5>
                </div> 
            )
        }
     }
    render()
    {
         
        return(
              <div onClick={this.viewpart} className="cube" style={{height:250+"px"}} >
              {this.setdiscount()}
              <img className="productImage" src={this.props.img}></img>
              <img src={this.setrating()}></img>
              <h4>{this.props.name}</h4>
              {this.setprice()}
              </div>
        )
    }
}
export default withRouter(Part);
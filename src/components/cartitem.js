import React, { Component } from "react";

export default class CartItem extends Component
{
    constructor(props)
    {
        super(props);
        this.deletecart = this.deletecart.bind(this);
    }

    deletecart()
    {
        console.log(this.props.mkey);
        this.props.delcart(this.props.mkey);
    }
    render()
    {
        return(
             <div className="cart-item">
              <img src={this.props.pimage}></img>
              <div className="desc">
                <h2>{this.props.pname}</h2>
                <div className="content">
                    <div className="lhs">
                        <h6>Qty :</h6>
                        <h6>M.R.P :</h6>
                        <h6>Total :</h6>
                    </div>
                    <div className="rhs">
                         <h6> {this.props.qty}</h6>
                        <h6> ₹ {this.props.price}</h6>
                        <h6> ₹ {Number(this.props.qty)*Number(this.props.price)}</h6>
                    </div>

                </div>
              </div>
              <div className="button-placement">
              <button>BUY</button>
              <button onClick={this.deletecart} className="button-black">DELETE</button>
              </div>
              
             </div>
        )
    }
}
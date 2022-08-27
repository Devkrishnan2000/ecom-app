import React from "react";
import { Component } from "react";
import  "./css/product.css"; 

export default class product extends Component
{
     constructor(props)
     {
        super(props);
        this.dev = this.dev.bind(this);
     }
    dev=()=>
    {
       console.log(this.props.mkey);
    }
    render()
    {
        return(
            <div onClick={this.dev} className="cube">
                <img src={this.props.img}></img>
                <h5>{this.props.name}</h5>
            </div>
        )
    }
}
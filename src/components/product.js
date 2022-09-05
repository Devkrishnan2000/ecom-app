import React from "react";
import { Component } from "react";
import  "./css/product.css"; 
import { withRouter } from "react-router-dom";

 class product extends Component
{
     constructor(props)
     {
        super(props);
        this.dev = this.dev.bind(this);
     }
    dev=()=>
    {
       console.log(this.props.mkey);
       this.props.history.push({
        pathname: '/partsPage',
        state :{id:this.props.mkey,name:this.props.name,image:this.props.img}
    });
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

export default withRouter(product);
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/cartpage.css";
import Orderitems from "./orderitems";
import axios from "axios";

class OrderPage extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            orderitem:[],
            noorder:false

        }
    }

    componentDidMount()
    {
       axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getorder.php").then(res=>{
        console.log(res.data);
        if(res.data!==-1)
        {
        this.setState({orderitem:res.data});
        }
        else
        this.setState({noorder:true});
       })
    }
    render()
    {
        return(
            <div>
              <h1 style={{marginTop:20+"px",marginLeft:70+"px"}}>MY <span>ORDERS</span></h1>
              {!this.state.noorder &&
                this.state.orderitem.map((result=><Orderitems key={result.oid} oid={result.oid} pname={result.pname} pimage={result.pimage} status={result.ostatus} loc={result.olocation}/>))
               }
               {
                this.state.noorder &&
                <h2 style={{marginTop:20+"px",textAlign:"center"}}>Orders Are Empty !</h2>
               }
            </div>
        )
    }
}

export default withRouter(OrderPage);
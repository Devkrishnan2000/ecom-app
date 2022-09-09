import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class OrderItems extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            curstatus:this.props.status
        }
        this.cancelorder  = this.cancelorder.bind(this);
        this.orderagain = this.orderagain.bind(this);
    }

    setstatus()
    {
        switch(this.state.curstatus)
        {
            case "0": return(
                <h6 style={{color:"orange"}}>Waiting for Dispatch</h6>
            )
            case "1": return(
                <h6>Shipping</h6>
            )
            case "2":return(
                <h6 style={{color:"green"}}>Delivered</h6>
            )

            case "-1": return(
                <h6 style={{color:"red"}}>Canceled</h6>
            )
        }
    }

    cancelorder()
    {
       axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/cancelorder.php",{params:{oid:this.props.oid}}).then(res=>{
        console.log(res.data);
        if(res.data===0)
        {
            this.setState({curstatus:"-1"});
        }
       })
    }

    orderagain()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/orderagain.php",{params:{oid:this.props.oid}}).then(res=>{
        console.log(res.data);
        if(res.data===0)
        {
            this.setState({curstatus:"0"});
        }
       })
    }

    renderbuttons()
    {
        if(this.state.curstatus==="2")
        {
            return(

                <div style={{display:"flex",flexDirection:"column"}} >
                    <button className="button-black">VIEW INVOICE</button>
                    <button className="button-black">WRITE A REVIEW</button>

                </div>
            )
        }
        else if(this.state.curstatus==="-1")
        {
            return(
                <div style={{display:"flex",flexDirection:"column"}} >

                <button className="button-black">VIEW INVOICE</button>
                <button className="button-black" onClick={this.orderagain}>ORDER AGAIN</button>
    
            </div>
            )
           
        }
        else
        {
              return(
                <div style={{display:"flex",flexDirection:"column"}}>
                    <button className="button-black">VIEW INVOICE</button>
                    <button className="button-black" onClick={this.cancelorder}>CANCEL ORDER </button>
                </div>
              )
        }
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
                        <h6>Order ID :</h6>
                        <h6>Order Status :</h6>
                        <h6>Current Location :</h6>
                    </div>
                    <div className="rhs">
                         <h6> {this.props.oid}</h6>
                         {this.setstatus()}
                        <h6> {this.props.loc} </h6>
                    </div>

                </div>
              </div>
              <div className="order-button">
                {this.renderbuttons()}
              </div>
            </div>
        )
    }
}

export default withRouter(OrderItems);
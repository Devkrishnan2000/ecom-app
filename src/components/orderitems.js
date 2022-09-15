import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class OrderItems extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            curstatus:this.props.status,
            deliverydate:''
        }
        this.cancelorder  = this.cancelorder.bind(this);
        this.orderagain = this.orderagain.bind(this);
        this.getInvoice = this.getInvoice.bind(this);
    }

    setstatus()
    {
        switch(this.state.curstatus)
        {
            case "Waiting for Dispatch": return(
                <h6 style={{color:"orange"}}>Waiting for Dispatch</h6>
            )
            case "Shipping": return(
                <h6>Shipping</h6>
            )
            case "Delivered":return(
                <h6 style={{color:"green"}}>Delivered</h6>
            )

            case "Canceled": return(
                <h6 style={{color:"red"}}>Canceled</h6>
            )
        }
    }

    cancelorder()
    {
       axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/cancelorder.php",{params:{oid:this.props.oid,qty:this.props.qty,pid:this.props.pid}}).then(res=>{
        console.log(res.data);
        if(res.data===0)
        {
            this.setState({curstatus:"Canceled"});
        }
       })
    }

  async  orderagain()
    {
       await axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/orderagain.php",{params:{oid:this.props.oid}}).then(res=>{
        console.log(res.data);
        if(res.data===0)
        {
            this.props.history.push('/');
        }
        else if(res.data==-1)
        {
            alert("Please try again item is not in stock right now");
        }
       })
    }

    getdeliverydate()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getdeliverydate.php",{params:{oid:this.props.oid}}).then(res=>{
            this.setState({deliverydate:res.data});
          })
    }

    getInvoice()
    {
        this.props.history.push({
            pathname: '/invoice',
            state :{id:this.props.oid}
        });
    }

    renderbuttons()
    {
        if(this.state.curstatus==="Delivered")
        {
            return(

                <div style={{display:"flex",flexDirection:"column"}} >
                    <button className="button-black"  onClick={this.getInvoice}>VIEW INVOICE</button>
                    <button className="button-black">WRITE A REVIEW</button>
                    <button className="button-black" onClick={this.orderagain}>ORDER AGAIN</button>

                </div>
            )
        }
        else if(this.state.curstatus==="Canceled")
        {
            return(
                <div style={{display:"flex",flexDirection:"column"}} >

                <button className="button-black" onClick={this.orderagain}>ORDER AGAIN</button>
    
            </div>
            )
           
        }
        else
        {
              return(
                <div style={{display:"flex",flexDirection:"column"}}>
                    <button className="button-black" onClick={this.getInvoice}>VIEW INVOICE</button>
                    <button className="button-black" onClick={this.cancelorder}>CANCEL ORDER </button>
                </div>
              )
        }
    }
      componentDidMount()
      {
         this.getdeliverydate();
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
                        <h6>Expected Delivery :</h6>
                    </div>
                    <div className="rhs">
                         <h6> {this.props.oid}</h6>
                         {this.setstatus()}
                        <h6> {this.props.loc} </h6>
                        <h6>{this.state.deliverydate}</h6>
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
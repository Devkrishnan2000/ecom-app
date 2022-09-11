import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/shipment.css";
import axios from "axios";

class Shipment extends Component
{

      constructor(props)
      {
        super(props);
        this.state={
            statusdata:[],
            isstatusdata:false,
            oid:0,
            ischangelocation:false
        }
        this.getorderstatus = this.getorderstatus.bind(this);
        this.showchangelocation = this.showchangelocation.bind(this);
        this.setorderlocation = this.setorderlocation.bind(this);
        this.setdelivered = this.setdelivered.bind(this);
      }
    getorderstatus(e)
    {
        e.preventDefault();
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getorderstatus.php",{params:{oid:e.target.oid.value}}).then(
            res=>{
                if(res.data===1)
                {
                    alert("Order Doesnt Exist or not Shipped yet");
                }
                else if(res.data===-1)
                {
                    alert("unexpected Error occurred");
                }
                else
                {
                     this.setState({statusdata:res.data});
                     this.setState({isstatusdata:true});
                     this.setState({oid:e.target.oid.value});
                }
            }
            
        )

    }

    setorderlocation(e)
    {
        e.preventDefault();
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/setlocation.php",{params:{oid:this.state.oid,location:e.target.location.value}}).then(res=>{
            console.log(res.data);
            if(res.data===0)
            {
                this.setState({ischangelocation:false});
            }
        })
    }

    setdelivered(e)
    {
       e.preventDefault();
       axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/setdelivery.php",{params:{oid:this.state.oid}}).then(res=>{

       console.log(res.data);
        if(res.data===0)
        {
          console.log("Delivered");
        }
       })
       
    }


    showchangelocation()
    {

        this.setState({ischangelocation:true});
    }
    render()
    {
        return(
            <div className="ship-div">
                <h1>SHIPMENT <span>MANAGEMENT</span></h1>
                <form onSubmit={this.getorderstatus}>
                <h4>Enter Order ID</h4>
                <input type="text" pattern="[0-9]*" className="textbox" name="oid" style={{width:10+"vw",marginLeft:0+"px"}}></input>
                <button type="submit">GO</button>
                </form>
                {this.state.isstatusdata &&
                 <table>
                 <tbody>
                     <tr>
                          <td>Customer Name </td>
                          <td>:</td>
                          <td>{this.state.statusdata['cname']}</td>
                     </tr>
                     <tr>
                          <td>Customer Address </td>
                          <td>:</td>
                          <td>{this.state.statusdata['caddr']}</td>
                     </tr>
                     <tr>
                           <td>Customer Phone Number </td>
                           <td>:</td>
                           <td>{this.state.statusdata['cphno']}</td>
                     </tr>
                     <tr>
                            <td>Order Location </td>
                            <td>:</td>
                            <td>{this.state.statusdata['olocation']}</td>
                     </tr>
                     <tr>
                            <td>Order Status </td>
                            <td>:</td>
                            <td>{this.state.statusdata['ostatus']}</td>
                     </tr>
                     <tr>
                        <td><button className="button-black" onClick={this.showchangelocation}>Change Location</button></td>
                        <td><button onClick={this.setdelivered}>Set Delivered</button></td>
                     </tr>
                 </tbody>
             </table>
                }

                {this.state.ischangelocation &&
                   <div>
                     <form onSubmit={this.setorderlocation}>
                        <input type="text" name="location" placeholder="Enter New Location" className="textbox"></input>
                        <button type="submit">OK</button>
                     </form>
                    </div>
                }
                
            </div>
        )
    }
}

export default withRouter(Shipment);
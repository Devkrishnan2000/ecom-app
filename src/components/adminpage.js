import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/adminpage.css";
import axios from "axios";
import UpdateAdmin from "./updateadmin";
import Ordermgnt from "./ordermgnt";
import Shipment from "./shipment";

class AdminPage extends Component
{
   constructor(props)
   {
     super(props);
     this.state={
      adminname:'',
      choice:-1,
     }
     this.adminlogout = this.adminlogout.bind(this);
     this.updateadmin = this.updateadmin.bind(this);
     this.setcontent = this.setcontent.bind(this);
     this.Ordermgnt  = this.Ordermgnt.bind(this);
     this.shipmentpage = this.shipmentpage.bind(this);
   }
  componentDidMount()
  {
    axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/adminlogincheck.php").then(res=>{
      if(res.data!==-1)
      {
        this.setState({adminname:res.data});
      }
      else if(res.data===-1)
      {
       this.props.history.push('/adminlogin');
      }
      
    })
   
  }

  updateadmin()
{
   this.setState({choice:1});
   console.log("state updated");
}

  Ordermgnt()
  {
    this.setState({choice:2});
  }

  shipmentpage()
  {
    this.setState({choice:3});
  }


   setcontent()
   {
      switch(this.state.choice)
      {
        case -1 : return( <div></div>);
        case 1: return(<UpdateAdmin/>);
        case 2: return(<Ordermgnt/>);
        case 3: return(<Shipment/>)
        default: return(<div></div>);
      }
   }
  adminlogout()
  {
    axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/adminlogout.php");
    this.props.history.push('/');
  }
  render()
  {
    return(
           <div className="admin-page" >
            <div className="side-pannel">
             <h2 style={{color:"white"}}>ADMIN <span>PANNEL</span></h2>
             <div className="options">
                <ul>
                  <li >
                    <img src="images\svg\inventory_white.svg"></img>
                    <h6>Inventory Management</h6>
                  </li>
                  <li onClick={this.Ordermgnt}>
                    <img src="images\svg\clipboard_white.svg"></img>
                    <h6>Order Management</h6>
                  </li>
                  <li onClick={this.shipmentpage}>
                    <img src="images\svg\shipping_white.svg"></img>
                    <h6>Shipment Management</h6>
                  </li>
                  <li onClick={this.shipmentpage}>
                    <img src="images\svg\document_white.svg"></img>
                    <h6>Documentation</h6>
                  </li>
                  <li onClick={this.updateadmin}>
                    <img src="images\svg\user_white.svg"></img>
                    <h6>Admin settings</h6>
                  </li>    
                </ul>
             </div>

               <div className="admin-info">
               <p style={{marginBottom:10+"px"}}>Signed in as :</p>
               <h5 style={{textAlign:"left"}}>{this.state.adminname}</h5>
               <button onClick={this.adminlogout}>LOGOUT</button>
               </div>    
            </div>
            <div className="content">
              {this.setcontent()}
            </div>
           </div>
    )
  }
}

export default withRouter(AdminPage);
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/adminpage.css";
import axios from "axios";
import UpdateAdmin from "./updateadmin";
import Ordermgnt from "./ordermgnt";
import Shipment from "./shipment";
import AddocPage from "./addocpage";
import Addshiper from "./addshiper";
import Inventory from "./inventory";
import Location from "./location";
import Analytics from "./analytics";
import Viewreturns from "./viewreturns";

class AdminPage extends Component
{
   constructor(props)
   {
     super(props);
     this.state={
      adminname:'',
      atype:'0',
      choice:-1,
     }
     this.adminlogout = this.adminlogout.bind(this);
     this.updateadmin = this.updateadmin.bind(this);
     this.setcontent = this.setcontent.bind(this);
     this.Ordermgnt  = this.Ordermgnt.bind(this);
     this.shipmentpage = this.shipmentpage.bind(this);
     this.addocpage = this.addocpage.bind(this);
     this.addshiper = this.addshiper.bind(this);
     this.inventory = this.inventory.bind(this);
     this.location = this.location.bind(this);
     this.analytics = this.analytics.bind(this);
     this.returns  = this.returns.bind(this);
   }
  componentDidMount()
  {
    axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/adminlogincheck.php").then(res=>{
      if(res.data!==-1)
      {
        console.log(res.data);
        this.setState({adminname:res.data['aname']});
        this.setState({atype:res.data['atype']});
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
  addocpage()
  {
    this.setState({choice:4})
  }

  addshiper()
  {
    this.setState({choice:5});
  }

  inventory()
  {
    this.setState({choice:6});
  }

  location()
  {
    this.setState({choice:7});
  }
  analytics()
  {
    this.setState({choice:8});
  }
  returns()
  {
    this.setState({choice:9})
  }


   setcontent()
   {
      switch(this.state.choice)
      {
        case -1 : return( <div></div>);
        case 1: return(<UpdateAdmin/>);
        case 2: return(<Ordermgnt/>);
        case 3: return(<Shipment/>);
        case 4: return(<AddocPage/>);
        case 5: return(<Addshiper/>);
        case 6: return(<Inventory/>);
        case 7: return(<Location/>);
        case 8: return(<Analytics/>);
        case 9: return(<Viewreturns/>);
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
                {
                    this.state.atype==='0' &&
                    <li onClick={this.analytics} >
                    <img src="images\svg\analytics.svg"></img>
                    <h6>Analytics</h6>
                  </li>
                  }
                  {
                    this.state.atype==='0' &&
                    <li onClick={this.inventory} >
                    <img src="images\svg\inventory_white.svg"></img>
                    <h6>Inventory Management</h6>
                  </li>
                  }

                  {
                       this.state.atype==='0' &&
                      <li onClick={this.Ordermgnt}>
                      <img src="images\svg\clipboard_white.svg"></img>
                      <h6>Order Management</h6>
                    </li>
                  }
                   {
                       this.state.atype==='0' &&
                      <li onClick={this.returns}>
                      <img src="images\svg\returnbox.svg"></img>
                      <h6>Return Management</h6>
                    </li>
                  }
                 
                {
                     this.state.atype==='0' &&
                     <li onClick={this.addocpage}>
                    <img src="images\svg\document_white.svg"></img>
                    <h6>Documentation</h6>
                  </li>

                }
                 
                  {
                    this.state.atype==='0' &&
                    <li onClick={this.addshiper}>
                    <img src="images\svg\user_white.svg"></img>
                    <h6>Add Shipper</h6>
                  </li> 
                  }
                    {
                    this.state.atype==='0' &&
                    <li onClick={this.location}>
                    <img src="images\svg\location.svg"></img>
                    <h6>Manage Location</h6>
                  </li> 
                  }
                    
                 
                      
                    <li onClick={this.updateadmin}>
                    <img src="images\svg\user_white.svg"></img>
                    { this.state.atype =='0' &&
                      <h6>Admin settings</h6>
                    }
                     { this.state.atype =='1' &&
                      <h6>Shipper settings</h6>
                    }
                    
                  </li> 
                  {
                    this.state.atype==='1' &&
                    <li onClick={this.shipmentpage}>
                    <img src="images\svg\shipping_white.svg"></img>
                    <h6>Shipment Management</h6>
                  </li>

                  } 
                </ul>
             </div>
             <div className="admin-info">
               <p style={{marginBottom:10+"px",textAlign:"center"}}>Welcome</p>
               <h5 style={{textAlign:"center"}}>{this.state.adminname}</h5>
               <button onClick={this.adminlogout}>LOGOUT</button>
               </div>
                 
            </div>
            <div className="admin-content">
              {this.setcontent()}
            </div>
           </div>
    )
  }
}

export default withRouter(AdminPage);
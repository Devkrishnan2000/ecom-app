import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/adminpage.css";
import axios from "axios";
import UpdateAdmin from "./updateadmin";

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


   setcontent()
   {
      switch(this.state.choice)
      {
        case -1 : return( <div></div>);
        case 1: return(<UpdateAdmin/>);
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
                    <h5>Inventory Management</h5>
                  </li>
                  <li>
                    <img src="images\svg\clipboard_white.svg"></img>
                    <h5>Order Management</h5>
                  </li>
                  <li onClick={this.updateadmin}>
                    <img src="images\svg\user_white.svg"></img>
                    <h5>Admin settings</h5>
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
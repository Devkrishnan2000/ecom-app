import React, { Component } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import HomePage from "./homepage";
import Navbar from "./navbar";
import Footer from "./footer";
import Login from "./login";
import "./css/link.css";
import CreateAccount from "./createAccount";
import axios from "axios";
import homepage from "./homepage";
import ProductPage from "./productPage";
import PartsPage from "./partsPage";
import Cartpage from "./cartpage";
import Adminpage from "./adminpage";
import Orderpage from "./orderpage";
export default class App extends Component
{
   constructor(props)
   {
    super(props);
    this.state={
        isloggedIn:0,
        username:"LOGIN",
        navenabled:"1"
    }  
    this.setloginval = this.setloginval.bind(this);
    this.setlogout = this.setlogoutval.bind(this);
    
   }

     setloginval(usr)
     {
        this.setState({isloggedIn:1});
        this.setState({username:usr})
        console.log(" setloginvalval method called"+this.state.username);
     }

     setlogoutval=()=>
     {
        this.setState({isloggedIn:0});
        console.log("setlogout method called");
     }

    
   
    render()
    {
        axios.defaults.withCredentials = true;

       return(
        <Router onUpdate={() => window.scrollTo(0, 0)}>
         
            <div>
        <Navbar key={this.state.isloggedIn} brand="FixMe.com" option1="Mobile Parts" option2="Desktop Parts" option3="Tools" islogin={this.state.isloggedIn} setlogoutval={this.setlogoutval} username={this.state.username} /> 
         <div>
             <Switch>
                 <Route exact  path="/">
                    <HomePage setloginval={this.setloginval}/>
                 </Route>
                 <Route  path="/login">
                  <Login isadmin="0"/>
                 </Route>
                 <Route path="/createAccount" component={CreateAccount}/>

                 <Route path="/productPage">
                    <ProductPage prodname="MORARY DRIVER KIT" rating="4" reviewcount="4" price="2000" discount="30" offerprice="-1" stock="4"/>
                 </Route>

                 <Route path="/partsPage">
                   <PartsPage/>
                 </Route>

                 <Route path="/cart">
                    <Cartpage/>
                 </Route>

                 <Route path="/adminlogin">
                   <Login isadmin="1"/>
                 </Route>
                 <Route  path="/admin" >
                  <Adminpage setnavfalse={this.setnavbarfalse} setnavtrue={this.setnavbartrue} />
                 </Route>
                 <Route  path="/orders" >
                  <Orderpage/>
                 </Route>
             </Switch>
         </div>
        <Footer/> 
        </div>
       
       </Router>

       )  
    }
}
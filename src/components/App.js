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
export default class App extends Component
{
   constructor(props)
   {
    super(props);
    this.state={
        isloggedIn:0,
        username:"LOGIN"
    }  
    this.setlogin = this.setlogin.bind(this);
    this.setlogout = this.setlogoutval.bind(this);
   }

     setlogin(usr)
     {
        this.setState({isloggedIn:1});
        this.setState({username:usr})
        console.log(" setlogin method called"+this.state.username);
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
        <Router>
         
            <div>
        <Navbar key={this.state.isloggedIn} brand="FixMe.com" option1="Laptop Parts" option2="Desktop Parts" option3="Tools" islogin={this.state.isloggedIn} setlogoutval={this.setlogoutval} username={this.state.username}/> 
         <div>
             <Switch>
                 <Route exact  path="/">
                    <HomePage setlogin={this.setlogin}/>
                 </Route>
                 <Route  path="/login" component={Login}/>
                 <Route path="/createAccount" component={CreateAccount}/>
                 
             </Switch>
         </div>
        <Footer/> 
        </div>
       
       </Router>

       )  
    }
}
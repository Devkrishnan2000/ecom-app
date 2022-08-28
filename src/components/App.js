import React, { Component } from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import HomePage from "./homepage";
import Navbar from "./navbar";
import Footer from "./footer";
import Login from "./login";
import "./css/link.css";
export default class App extends Component
{
    render()
    {
       return(
        <Router>
        <div>
        <Navbar brand="FixMe.com" option1="Laptop Parts" option2="Desktop Parts" option3="Tools"/> 
         <div>
             <Switch>
                 <Route exact path="/">
                  <HomePage/>
                 </Route>
                 <Route exact path="/login">
                  <Login/>
                 </Route>
             </Switch>
         </div>
        <Footer/> 
        </div>
       </Router>

       )  
    }
}
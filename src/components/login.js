import React, { Component } from "react";
import "./css/textbox.css";
import "./css/text.css";
import "./css/login.css";

export default class Login extends Component
{
      login=(e)=>
      {
        e.preventDefault();
        console.log("login in button clicked");
      }
    render()
    {
        return(
            <div className="login-parent">
              <div className="login-div">
               <h1 style={{marginTop:20+"px", alignSelf:"center"}}>LOGIN</h1>
               <form onSubmit={this.login}>
               <h6 style={{marginLeft:20+"px",marginTop:20+"px"}}>Email</h6>
               <input type='email' className="textbox" style={{marginTop:20+"px"}} required></input>
               <h6 style={{marginLeft:20+"px",marginTop:20+"px"}}>Password</h6>
               <input type='password' className="textbox" style={{marginTop:20+"px"}}></input>
               <h6 style={{textAlign:"center",marginTop:10+"px"}}>New ? <a href="wwww.google.com">Create An Account</a></h6>
               <button type="submit" style={{marginLeft:25+"px",marginRight:50+"px",marginTop:20+"px"}}>Log In</button>
               </form>
               
              </div>
            </div>
             
        )
    }
}
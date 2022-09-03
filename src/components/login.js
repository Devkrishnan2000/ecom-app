import React, { Component } from "react";
import "./css/textbox.css";
import "./css/text.css";
import "./css/login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Login extends Component
{
     constructor(props)
     {
       super(props);
       this.state={
        loginval:0
       }
       this.login = this.login.bind(this);
       this.showError = this.showError.bind(this);
     }
     async login(e)
      {
        e.preventDefault();
        const fd = new FormData();
        fd.append('email',e.target.email.value);
        fd.append('pass',e.target.pass.value);
        await axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/userlogin.php",fd).then(res=>{
         if(res.data===1)
         this.props.history.push("/");
         else
         this.setState({loginval:res.data});
        })      
        
      }

      showError()
      {
        switch(this.state.loginval)
        {
          case 0:return(
            <h6 style={{textAlign:"center" ,color:"red",paddingTop:20+"px"}}></h6>
          )
         
          case -1:return(
              <h6 style={{textAlign:"center",color:"red",paddingTop:20+"px"}}>Incorrect Password or Username</h6>
          )
          case -2:return(
            <h6 style={{textAlign:"center",color:"red"}}>User Doesnt Exist</h6>
          )
          default:return(
            <h6 style={{textAlign:"center",color:"red"}}>Unexpected Error Ocurred Please try again later</h6>
          )  
        }
      }
    render()
    {
        return(
            <div className="login-parent">
              <div className="login-div">
               <h1 style={{marginTop:20+"px", alignSelf:"center"}}>LOGIN</h1>
               <form onSubmit={this.login}>
               <h6 style={{marginLeft:20+"px",marginTop:20+"px"}} >Email</h6>
               <input type='email' className="textbox" style={{marginTop:20+"px"}} name="email" required></input>
               <h6 style={{marginLeft:20+"px",marginTop:20+"px"}}>Password</h6>
               <input type='password' className="textbox" style={{marginTop:20+"px"}} name="pass"></input>
               <h6 style={{textAlign:"center",marginTop:10+"px"}}>New ? <Link to={"/createAccount"}>Create An Account</Link></h6>
               <button type="submit" style={{marginLeft:25+"px",marginRight:50+"px",marginTop:20+"px"}}>Log In</button>
               </form>
               {this.showError()}
              </div>
            </div>
             
        )
    }
}

export default withRouter(Login);


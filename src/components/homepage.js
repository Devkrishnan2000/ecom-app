import React, { Component } from "react";
import Navbar from "./navbar";
import tagline from "./images/Banners/tagline.png";
import ShowProducts from "./showproducts";
import ShowParts from "./showparts";
import Footer from "./footer";
import { withRouter } from "react-router-dom";
import axios from "axios";
import  "./css/banner.css";
import "./css/text.css";
import "./css/button.css";



 class HomePage extends Component
{
  state = {
    countx:1,   //to remove duplication bug by asigning different key
    county:0,
    countprod:5,
    countpart:5
          }
  constructor(props)
  {
    super(props);
    
    this.addnumprod =this.addnumprod.bind(this);
    this.addnumpart = this.addnumpart.bind(this);
  }

  addnumprod()
  {
    this.setState({
      countprod: this.state.countprod+5, 
      countx: this.state.countx+1
    });
    console.log(this.state.countprod);
  }

  addnumpart()
  {
    this.setState({
      countpart: this.state.countpart+5,
      county: this.state.county+1
    });
    console.log(this.state.countpart);
  }
  
  
  render(){
   
       return (  
           <div>
            <img className="banner" src={tagline}></img>
            <h1 style={{margin:27+'px'}}> CHOOSE YOUR <span>PRODUCT</span></h1>
            <ShowProducts key={this.state.countx} numofprod={this.state.countprod}/>
            <button onClick={this.addnumprod} name="addprod" style={{float:"right",marginRight:85+"px"}} >VIEW MORE</button>
            <h1 style={{margin:27+'px',marginTop:86+'px'}}> SHOP FOR <span>TOOLS</span></h1>
            <ShowParts key={this.state.county} numofpart={this.state.countpart}></ShowParts>
            <button onClick={this.addnumpart} name="addprod" style={{float:"right",marginRight:85+"px"}} >VIEW MORE</button>
            <br></br><br></br><br></br>
           </div>
       )
  }
}
export default withRouter(HomePage);
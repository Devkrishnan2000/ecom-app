import React, { Component } from "react";
import Navbar from "./navbar";
import tagline from "./images/Banners/tagline.png";
import ShowProducts from "./showproducts";
import ShowParts from "./showparts";
import  "./css/banner.css";
import "./css/text.css";
import "./css/button.css";


export default class HomePage extends Component
{
  state = {
    count:5
          }
  constructor(props)
  {
    super(props);
    
    this.addnumprod =this.addnumprod.bind(this);
  }

  addnumprod()
  {
    this.setState({
      count: this.state.count+5 
    });
    console.log(this.state.count);
  }

  
  render(){
   
       return (
           <div>
            <Navbar brand="FixMe.com" option1="Laptop Parts" option2="Desktop Parts" option3="Tools"/>
            <img className="banner" src={tagline}></img>
            <h1 style={{margin:27+'px'}}> CHOOSE YOUR <span>PRODUCT</span></h1>
            <ShowProducts key={this.state.count} numofprod={this.state.count}/>
            <button onClick={this.addnumprod} name="addprod" style={{float:"right",marginRight:20+"px"}} >VIEW MORE</button>
            <h1 style={{margin:27+'px',marginTop:86+'px'}}> SHOP FOR <span>TOOLS</span></h1>
            <ShowParts></ShowParts>
           </div>
       )
  }
}
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./css/navcss.css";
import cart from "./images/navbar/cart.svg";
import search from "./images/navbar/search.svg";

export default class Navbar extends Component {
     
          constructor(props)
          {
            super(props);
          }
  render() {
    return (
      <div>
        <ul>
        <li>
            <a className='brand' href="/">{this.props.brand}</a>
          </li>
          <li>
            <a href="#">{this.props.option1}</a>
          </li>
          <li>
            <a href="#">{this.props.option2}</a>
          </li>
          <li>
            <a href="#">{this.props.option3}</a>
          </li>
          <li>
            <div className="search-box">
             <img  src={search}></img>
             <input type='text'placeholder="Search for parts" className="nav-textbox"></input>
            </div>
          </li>
          <li className='align-right'>
          <a href="/login" style={{marginRight:20+"px"}}>LOGIN</a>
          </li>
          <li className='align-right'>
          <a href="#"><img src={cart}></img></a>
          </li>
         
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default class DropDown extends Component
{
 
    constructor(props)
    {
       super(props);
    }

  /*  logout()
    {
      axios.get('http://localhost:80/sem8project/ecom-app/ecom-app/api/logout.php').then(res=>{
        console.log("logged out");
      })
    }
    */
    render()
    {
        return(
            <ul className="drop-list">
          <li>
            <Link to="/orders">My orders</Link>
          </li>
          <li>
          <Link to="/cart" >My Cart</Link>
          </li>
          <li>
          <a onClick={this.props.logout}>Log Out</a>
          </li>
         </ul>
        )
    }
}
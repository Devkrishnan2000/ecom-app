import React, { Component } from "react";


export default class DropDown extends Component
{
    
    render()
    {
        return(
            <ul className="drop-list">
          <li>
            <a>My orders</a>
          </li>
          <li>
          <a>My Cart</a>
          </li>
          <li>
          <a>Log Out</a>
          </li>
         </ul>
        )
    }
}
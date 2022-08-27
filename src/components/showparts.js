import React, { Component } from "react";
import "./css/grid5.css";
import Part from "./part";

export default class ShowParts extends Component
{
    render()
    {
        return(
              <div className="wrapper">
              <Part name ="Morary Driver Kit" img="images\Tools\morary.png" rating="1" price="1500" />
              </div>
        )
    }
}
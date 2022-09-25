import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/addoc.css"

class AddocPage extends Component
{
    constructor(props)
    {
        super(props)
        this.newdoc = this.newdoc.bind(this);
    }
    newdoc()
    {
        this.props.history.push("/newdoc");
    }
     render()
     {
        return(
              <div className="adddoc-div">
               <h1>DOCUMENTATION</h1>
               <button onClick={this.newdoc}>NEW DOCUMENTATION</button>  
              </div>
        )
     }
}

export default withRouter(AddocPage)
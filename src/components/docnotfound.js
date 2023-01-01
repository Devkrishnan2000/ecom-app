import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class DocNotFound extends Component
{
    render()
    {
        return(
          <div>
            <h2 style={{textAlign:"center",marginTop:20+"px",marginBottom:20+"px"}}>Documentation not found</h2>
            <div style={{display:"flex",justifyContent:"center"}}>
            <img  src="images\svg\docnotfound.svg" width="300" height="300"></img>
            </div>
           
          </div>
        )
    }
}

export default withRouter(DocNotFound)
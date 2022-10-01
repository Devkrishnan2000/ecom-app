import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Steps from "./steps";
import "./css/editstep.css";

class Editstep extends Component
{
    render()
    {
        return(
            <div className="edit-step-div">
             <h1>EDIT <span>STEP</span></h1>
             <Steps></Steps>
            </div>
        )
    }
}

export default withRouter(Editstep);
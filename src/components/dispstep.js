import React, { Component } from "react";

export default class DispStep extends Component
{
  constructor(props)
  {
    super(props)
  }
    render()
    {
        return(
            <div className="dispstep-div">
            <div className="step">
            <h2>STEP {this.props.stid}: {this.props.title} </h2>
            <div>
              <img src={this.props.image}></img>
            <h5>
             {this.props.desc}
            </h5>
            </div>
           
          </div>
            </div>
        )
    }
}
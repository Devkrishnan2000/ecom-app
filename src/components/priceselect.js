import React, { Component } from "react";

export default class PriceSelect extends Component
{
    constructor(props)
    {
        super(props);
        this.setpricelimit = this.setpricelimit.bind(this);
    }
    setpricelimit(e)
    {
       e.preventDefault();
       this.props.pricelimit(e.target.low.value,e.target.high.value);
    }
    render()
    {
        return(
            <div style={{display:"flex"}}>
             
             <form onSubmit={this.setpricelimit} style={{display:"flex",alignItems:"center"}}>
             <h6>Price Range:</h6>
                <input type='number' className="textbox" name="low" required style={{width:5+"vw",fontSize:12+"px"}}></input>
                <h6 style={{marginLeft:20+"px"}}>to</h6>
                <input type='number' className="textbox" name="high" required style={{width:5+"vw",fontSize:12+"px"}}></input>
                <button type="submit" style={{marginLeft:10+"px", marginRight:10+"px",paddingTop:7+"px",paddingBottom:7+"px"}}>Apply</button>
             </form>
            </div>
        )
    }
}
import React, { Component } from "react";

export default class PriceSelect extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            pricel:0,
            priceh:0
        }
        this.setpricelimit = this.setpricelimit.bind(this);
        this.onchangehigh = this.onchangehigh.bind(this);
        this.onchangelow = this.onchangelow.bind(this);
    }
    setpricelimit(e)
    {
       e.preventDefault();
       this.props.pricelimit(e.target.low.value,e.target.high.value);
    }

    onchangelow(e)
    {
        if(e.target.value>0)
        {
         this.setState({pricel:e.target.value});
        }
    }

    onchangehigh(e)
    {
        console.log(this.state.pricel)
        if(e.target.value>0 )
        {
            this.setState({priceh:e.target.value});
        }
        
    }
    render()
    {
        return(
            <div style={{display:"flex" , justifyContent:"end", marginRight:60+"px"}}>
             
             <form onSubmit={this.setpricelimit} style={{display:"flex",alignItems:"center"}}>
             <h6>Price Range:</h6>
                <input type='number' className="textbox" name="low" onChange={this.onchangelow} value={this.state.pricel}  required style={{width:5+"vw",fontSize:12+"px"}}></input>
                <h6 style={{marginLeft:20+"px"}}>to</h6>
                <input type='number' className="textbox" name="high"onChange={this.onchangehigh} value={this.state.priceh} required style={{width:5+"vw",fontSize:12+"px"}}></input>
                <button type="submit" style={{marginLeft:10+"px", marginRight:10+"px",paddingTop:7+"px",paddingBottom:7+"px"}}>SET</button>
             </form>
            </div>
        )
    }
}
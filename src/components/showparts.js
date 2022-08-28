import React, { Component } from "react";
import "./css/grid5.css";
import axios from "axios";
import Part from "./part";

export default class ShowParts extends Component
{

    constructor(props)
    {
      super(props);
  
      this.state = {
        data: []
              }
      
    }
    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/part.php",{ params: { num: this.props.numofpart } }).then(res =>{
      this.setState({data: res.data})
      
    }
    )
    }
    render()
    {
        return(
              <div className="wrapper">
              {this.state.data.map((result)=><Part key={result.pid} name={result.pname} img={result.pimage} price={result.price} offerprice={result.oprice} discount={result.discount} rating={result.rating}/>)}
              </div>
        )
    }
}
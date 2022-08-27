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
              <Part name ="Morary Driver Kit" img="images\Tools\morary.png" rating="5" price="1500" offerprice="-1" discount="40" />
              {this.state.data.map((result)=><Part key={result.pid} name={result.pname} img={result.pimage} price={result.price} offerprice={result.oprice} discount={result.discount} rating={result.rating}/>)}
              </div>
        )
    }
}
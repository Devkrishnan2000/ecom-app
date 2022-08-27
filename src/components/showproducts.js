import React from "react";
import { Component } from "react";
import Product from "./product";
import axios from "axios";
import "./css/grid5.css";

  
export default class ShowProducts extends Component
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
    axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/index.php",{ params: { num: this.props.numofprod } }).then(res =>{
      this.setState({data: res.data})
      
    }
    )
  }

  //{prod.map((produ) => <Product name={produ.name} img={produ.img}  ></Product>)}
    render()
    {
        return(
                <div className="wrapper">
                  
               {this.state.data.map((result)=> <Product key={result.eid} name={result.ename} img={result.eimage} mkey={result.eid} ></Product>)}
                </div>
        )
    }
}
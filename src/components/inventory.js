import React, { Component } from "react";
import "./css/inventory.css";
import Imanagement from "./imanagement";
import axios from "axios";

export default class Inventory extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state={
            category:'',
            brand:[],
            electronic:[],
            parts:[],
            tools:[]
        }
        this.onselectchange = this.onselectchange.bind(this);
    }

    onselectchange(e)
    {
       
        switch(e.target.value)
        {
            case "Brand" : axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:e.target.value}}).then(res=>{
                if(res.data!==-1)
                {
                    this.setState({brand:res.data});
                }
                this.setState({category:e.target.value})
               
              })
              break;

           case "Electronics": axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:e.target.value}}).then(res=>{
            if(res.data!==-1)
            {
                this.setState({electronic:res.data});
            }
            this.setState({category:e.target.value})

          })
          break;

          case "Parts":  axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:e.target.value}}).then(res=>{
            if(res.data!==-1)
            {
                this.setState({parts:res.data});
            }
            this.setState({category:e.target.value})
          }) 
          
          case "Tools":  axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:e.target.value}}).then(res=>{
            if(res.data!==-1)
            {
                this.setState({tools:res.data});
            }
            this.setState({category:e.target.value})
          })   

        }
    }
    render()
    {
        return(
            <div className="inventory-div">
              <h1> INVENTORY <span>MANAGEMENT</span></h1>
               <h4>Select Category</h4>
                <select name="catsel" className="textbox" onChange={this.onselectchange}>
                    <option value="-1">--select--</option>
                    <option value="Brand">Brand</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Parts">Parts</option>
                    <option value="Tools">Tools</option>
                </select>
               <Imanagement category={this.state.category} brand={this.state.brand} electronic={this.state.electronic} parts={this.state.parts} tools={this.state.tools}></Imanagement>
            </div>
        )
    }
}
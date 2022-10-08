import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Part from "./part";
import "./css/tools.css";
import Category from "./category";
import PriceSelect from "./priceselect";

class Tools extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            tools:[],
            category:[],
            cat:'ALL',
            pricel:0,
            priceh:0,
        }
        this.setcategory = this.setcategory.bind(this);
        this.pricelimit = this.pricelimit.bind(this);
    }

    pricelimit(low,high)
    {
        this.setState({pricel:low});
        this.setState({priceh:high});
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php",{params:{category:this.state.cat,pricel:low,priceh:high}}).then(res=>{
            console.log(res.data);    
            this.setState({tools:res.data});
           // this.setState({iscatset:true});
           // this.setState({curcategory:category});
            console.log("set true sucessfull");
        })
    }

    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php").then(res=>{
           
           if(res.data!=-1)
           {
            this.setState({tools:res.data});
           }
          
        })
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getcategory.php").then(res=>{
            this.setState({category:res.data});
            console.log(res.data);
        })
    }

    setcategory(category)
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php",{params:{category:category,pricel:this.state.pricel,priceh:this.state.priceh}}).then(res=>{
            console.log(res.data);    
            this.setState({tools:res.data});
            this.setState({cat:category});
           // this.setState({iscatset:true});
           // this.setState({curcategory:category});
            console.log("set true sucessfull");
        })
    }
    render()
    {
        return(
            <div className="tools-div">
             <h1 style={{marginLeft:20+"px"}}>BUY <span>TOOLS</span></h1>
             <h6 style={{marginTop:20+"px",marginLeft:20+"px"}}>We offer every tool you need to get your machine up and running again: comprehensive laptop and computer repair kits, genuine iFixit precision screwdrivers for your iPhone or Nintendo Switch, and repair necessities such as spudgers and tweezers. Not sure what tools you need? Our repair guides show you exactly what tools to use for your repair job.</h6>
             <h2  style={{marginTop:20+"px",marginLeft:20+"px"}}>Product Category</h2>
             <div style={{display:"flex",marginLeft:20+"px",marginTop:20+"px"}} className="product-category">
                    { this.state.category.map((res=><Category key={res.tooltype} parttype={res.tooltype} setcategory={this.setcategory} />))}
                     <Category parttype="ALL"  setcategory={this.setcategory}></Category>
                    </div>
                    <PriceSelect pricelimit={this.pricelimit}></PriceSelect>
             
                  
              <div className="wrapper" style={{marginTop:40+"px",marginLeft:0+"px"}} >
                {this.state.tools.map((result=><Part  key={result.pid} id={result.pid} name={result.pname} img={result.pimage} price={result.price} offerprice={result.oprice} discount={result.discount} rating={result.rating}></Part>))}
              </div>
            </div>
        )
    }
    
}
export default withRouter(Tools);


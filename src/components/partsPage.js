import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./css/partspage.css";
import "./css/category.css";
import Category from "./category";
import PriceSelect from "./priceselect";
import Product from "./product";
import Part from "./part";

class PartsPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            category:[],
            parts:[],
            priceh:0,
            pricel:0,
            iscatset:false,
            curcategory:'',
            fail:true
        }
        this.setpricelimit = this.setpricelimit.bind(this);
        this.setcategory = this.setcategory.bind(this);
    }

    setpricelimit(pricel,priceh)
    {
        
        if(Number(pricel)<Number(priceh))
        {
            if(this.state.iscatset===true)
            {
                axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php",{params:{pricel:pricel,priceh:priceh,category:this.state.curcategory,eid:this.props.location.state.id}}).then(res=>{
                    console.log("iscat is true"+this.state.curcategory);   
                    this.setState({parts:res.data});
                })
            }
            else
            {
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php",{params:{pricel:pricel,priceh:priceh,eid:this.props.location.state.id}}).then(res=>{
            console.log(res.data);    
            this.setState({parts:res.data});
        })
            }
           
        }
        else
        alert("Invalid Range");
       
    }

    setcategory(category)
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php",{params:{category:category,eid:this.props.location.state.id}}).then(res=>{
            console.log(res.data);    
            this.setState({parts:res.data});
            this.setState({iscatset:true});
            this.setState({curcategory:category});
            console.log("set true sucessfull");
        })
    }

   async componentDidMount()
    {
      await  axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getcategory.php",{params:{eid:this.props.location.state.id}}).then(res=>{
            
            
            if(res.data!=-1)
            {
                this.setState({category:res.data});
                this.setState({fail:false});
            }
            else
            {
                this.setState({fail:true});
            }
            
        })

        await axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpart.php",{params:{eid:this.props.location.state.id}}).then(res=>{
            this.setState({parts:res.data});
        })
    }

    
    render()
    {
        return(
            <div className="parts-page" style={{marginTop:20+"px"}}>
            <h1>{this.props.location.state.name} PARTS</h1>
            <div className="intro">
            <img src={this.props.location.state.image}></img>
            <h6>
            FixMe makes {this.props.location.state.name} smartphone repair easy:
            strictly tested, quality-ensured replacement parts,<br/> unmatched DIY fix kits, and free in-depth, accurate repair manuals.
            </h6>
            </div>

             <div className="product-show">
              
                {!this.state.fail &&
                <div>
                     <h2>Product Category</h2>
                    <div className="product-category">
                    { this.state.category.map((res=><Category key={res.pid} parttype={res.parttype} setcategory={this.setcategory}/>))}
                    </div>
                   
                    <div className="wrapper" style={{marginTop:40+"px",marginLeft:0+"px"}}>
                       {this.state.parts.map((result=><Part key={result.pid} id={result.pid} name={result.pname} img={result.pimage} price={result.price} offerprice={result.oprice} discount={result.discount} rating={result.rating} eid={this.props.location.state.id}/> ))}
                    </div>
                    
                </div>
                }

                {this.state.fail &&
                 <h6 style={{marginBottom:318+"px"}}>Sorry no parts available for this product yet</h6>
                }        
              
             </div>
            </div>
        )
    }
}

export default withRouter(PartsPage);

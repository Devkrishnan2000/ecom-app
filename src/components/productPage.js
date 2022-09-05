import React, { Component } from "react";
import "./css/productpage.css";
import "./css/buttonblack.css";
import "./css/textbox.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import UserReview from "./userReview";


 class ProductPage extends Component
{
     constructor(props)
     {
        super(props);

       this.state={
         pname :"",
         pdesc:"",
         pimage:"",
         price:"",
         discount:"",
         oprice:"",
         stock:"",
         waranty:"",
         rating:"",
         pcondition:"",

         place:"",
         to:"",
         from:"",
         isset:false,
         fail:false,

         ispart:false

        
       }

        this.setrating = this.setrating.bind(this);
        this.pricedisp = this.pricedisp.bind(this);
        this.getpincodedata = this.getpincodedata.bind(this);

     }

     componentDidMount()
     {
        window.scrollTo(0, 0);
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getproductdata.php",{params:{pid:this.props.location.state.id}}).then(res=>{
        this.setState({pname:res.data['pname']});
        this.setState({pdesc:res.data['pdesc']});
        this.setState({pimage:res.data['pimage']});
        this.setState({price:res.data['price']});
        this.setState({oprice:res.data['oprice']});
        this.setState({discount:res.data['discount']});
        this.setState({stock:res.data['stock']});
        this.setState({waranty:res.data['waranty']});
        this.setState({rating:res.data['rating']});
        this.setState({pcondition:res.data['pcondition']});
        if(typeof this.props.location.state.eid!=='undefined')
        this.setState({ispart:true});
      }
      )
     }
    setrating()
    {
       switch(this.state.rating)
       {
           case "0": return "images/star/stars0.svg";
           case "1": return "images/star/stars1.svg";
           case "2": return "images/star/stars2.svg";
           case "3": return "images/star/stars3.svg";
           case "4": return "images/star/stars4.svg";
           case "5": return "images/star/stars5.svg";
           default :return "images/star/stars0.svg";
       }
    }

    pricedisp()
    {
        if(this.state.oprice===this.state.price)
        {
            if(this.state.stock>5)
            {
                return(
                    <div>
                        <div className="price-discount">
                        <h2>₹ {this.state.price}.00</h2>    
                        </div>
                    </div>
                    
                )  
            }
            else if(this.state.stock<5)
            {
                return(
                    <div>
                        <div className="price-discount">
                        <h2>₹ {this.state.price}.00</h2>    
                        </div>

                        <div className="price-stock">
                        <h5 className="stock" style={{marginLeft:0+"px"}}>ONLY FEW LEFT IN STOCK</h5>
                        </div>
                    </div>
                    
                    
                )  
            }
        }
        else
        {
               if(this.state.stock>5)
               {
                 return(
                       <div>
                        <div className="price-discount">
                        <h2>₹ {this.state.oprice}.00</h2>
                        <h4> %{this.state.discount} OFF</h4>     
                       </div>
                        <div className="price-stock">
                        <h5>M.R.P ₹ {this.state.price}.00</h5>
                        </div>
                       </div>
                 )
               }
               else if(this.props.stock<5)
               {
                 return(
                     <div>
                        <div className="price-discount">
                        <h2>₹ {this.state.oprice}.00</h2>
                        <h4> %{this.state.discount} OFF</h4>     
                        </div>
                        <div className="price-stock">
                        <h5>M.R.P ₹ {this.state.price}.00</h5>
                        <h5 className="stock">ONLY FEW LEFT IN STOCK</h5>
                        </div>
                      </div>
                 )
               }
        }
    }

    getpincodedata(e)
    {
     e.preventDefault();
     axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpincodedata.php",{params :{pincode:e.target.pintext.value}}).then(res=>{
       if(res.data!==-1)
       {
         this.setState({place:res.data['place']});
         this.setState({to:res.data['dto']});
         this.setState({from:res.data['dfrom']});
         this.setState({isset:true});
         this.setState({fail:false});
       }
       else if(res.data==-1)
       {
        this.setState({fail:true});
       }
     })
     
    }

    getcondition()
    {
       if(this.state.pcondition==0)
       {
        return(
          <h6  style={{marginTop:5+"px"}}>Condition : New</h6>
        )
       }
       else if(this.state.pcondition==1)
       {
        return(
          <h6  style={{marginTop:5+"px"}}>Condition : Refurbished</h6>
        )
       }
    }
  render()
  {

    
     return(
           <div>
            <div className="productPage">
              <div className="display-Image">
                <img src={this.state.pimage}></img>
              </div>
              <div className="product-content">
                <h1>{this.state.pname}</h1>

                <div className="rating-display">
                <img src={this.setrating()}></img>
                </div>

               {this.pricedisp()}

               <div style={{marginTop:20+"px"}}>
                <button className="button-black"  style={{marginRight:30+"px"}}>ADD TO CART</button>
                <button>BUY NOW</button>
               </div>
               <h6 style={{marginTop:30+"px"}}>Check availability in your Region</h6>
               <div style={{marginTop:10+"px"}}>

                <form onSubmit={this.getpincodedata}>
                  <input name="pintext" type='text' pattern="[0-9]{6}" className="textbox" style={{width:10+"vw",marginLeft:0+"px",marginRight:20+"px"}} placeholder="Enter the Pincode" required></input>
                  <button className="button-black"  style={{marginRight:30+"px",paddingTop:9+"px",paddingBottom:9+"px",fontSize:10+"px"}} type="submit">CHECK</button>
                  {this.state.isset && !this.state.fail &&
                     <h6 style={{marginTop:10+"px"}}>This product will be delivered to {this.state.place} in {this.state.from}-{this.state.to} business days</h6>
                  }
                  {this.state.fail &&
                      <h6 style={{marginTop:10+"px",color:"red"}}>This product is not deliverable to this location</h6>
                  }
                </form>
               </div>    
              </div>
           </div>
            <div style={{marginLeft:20+"px"}}>
              <h2>ABOUT THIS <span>ITEM</span></h2>
              <h6 style={{marginTop:10+"px"}}>{this.state.pdesc} </h6>
              <h4 style={{marginTop:20+"px",marginBottom:10+"px",fontWeight:700}}>SPECIFICATION</h4>
              <h6  style={{marginTop:5+"px"}}>Waranty : {this.state.waranty} months</h6>
              {this.getcondition()}
              {this.state.ispart &&
                <button className="button-black" style={{marginTop:20+"px"}}>VIEW DIY INSTRUCTIONS</button>}
            </div>
            <UserReview pid={this.props.location.state.id}/>
           </div>
           
     )
  }
}
export default withRouter(ProductPage);
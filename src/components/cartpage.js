import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CartItem from "./cartitem";
import "./css/cartpage.css";


class CartPage extends Component
{
   constructor(props)
   {
      super(props);
      this.state={
         cartitem:[],
         totalprice:0,
         itemcount:0,
         cartempty:false
      }
      this.delcart = this.delcart.bind(this);
   }

   delcart(pid)
   {
      axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/delcartitems.php",{params:{pid:pid}}).then(res=>{
         console.log(res.data);
         if(res.data.length>0)
         {
            this.setState({cartitem:res.data});
            this.setState({cartempty:false});
            this.setState({itemcount:res.data.length})
         }
         else
         {
            this.setState({cartempty:true});
         }
           res.data.map((result=>this.state.totalprice+=Number(result.oprice)*Number(result.qty)))
      })
   }

   componentDidMount()
   {
      axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getcartitems.php").then(res=>{
      
         if(res.data.length>0)
         {
            this.setState({cartitem:res.data});
            this.setState({cartempty:false});
            this.setState({itemcount:res.data.length})
         }
         else
         {
            this.setState({cartempty:true});
         }
           res.data.map((result=>this.state.totalprice+=Number(result.oprice)*Number(result.qty)))
      })

      
       
   }

   dispcart()
   {

   }
   render()
   {
    return(
         <div>
            <h1 style={{marginTop:20+"px",marginLeft:70+"px"}}>SHOPPING <span>CART</span></h1>
            <div className="cart-content">
               <div>
               {!this.state.cartempty &&
               this.state.cartitem.map((result=><CartItem key={result.pid} mkey={result.pid} pname={result.pname} qty={result.qty} pimage={result.pimage} price={result.oprice} delcart ={this.delcart}/>))
               }
               </div>
               {!this.state.cartempty &&
                   <div className="order-details">
                   <h2>SUMMARY</h2>
                   <div className="bill-list">
                   <div>
                     <h4>Product</h4>
                     {this.state.cartitem.map((result=><h6 key={result.pid}> {result.pname}</h6>))}
                   </div>
   
                   <div>
                     <h4>Qty</h4>
                     {this.state.cartitem.map((result=><h6  key={result.pid}> {result.qty}</h6>))}
                   </div>
                   </div>
                   <h5>Sub Total ({this.state.itemcount} Items) : ₹ {this.state.totalprice}</h5>
                   <button>BUY ALL</button>
                  </div>
               }
               
              
            
            </div>
            {this.state.cartempty &&
                 <div>
                  <h2 style={{textAlign:"center"}}>Cart is Empty !</h2>
                 </div>
               }
         </div>
    )
   }
}

export default withRouter(CartPage);
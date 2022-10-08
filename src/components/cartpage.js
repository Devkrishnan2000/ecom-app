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
         deliv:0,
         totalprice:0,
         itemcount:0,
         cartempty:false,
         address:'',
         pincode:'',
      }
      this.delcart = this.delcart.bind(this);
      this.placeorder = this.placeorder.bind(this);
      this.buyall  = this.buyall.bind(this);
      this.gotoaccount = this.gotoaccount.bind(this);
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
           this.state.totalprice=0;
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
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getaddrpincode.php").then(res=>{
               console.log(res.data);
               this.setState({address:res.data['caddr']});
               this.setState({pincode:res.data['pincode']});
               axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpincodedata.php",{params :{pincode:res.data['pincode']}}).then(res=>
               {
                 this.setState({deliv:res.data['deliverable']})
                 console.log(res.data['deliverable'])
               })
            })
         }
         else
         {
            this.setState({cartempty:true});
         }
        
   
           res.data.map((result=>this.state.totalprice+=Number(result.oprice)*Number(result.qty)))
      })

    
      
       
   }

   placeorder(pid,qty,price)
   {

    
         if(this.state.deliv==='0')
         {
            let tprice =Number(qty)*Number(price);
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/placeorder.php",{params:{pid:pid,qty:qty,price:tprice}}).then(res=>
            {
               console.log(res.data);
              if(res.data===0)
              {
                this.props.history.push('/orders');  
              }
              else if(res.data===1)
              {
                  alert("one of the item is currently out of stock please try again or reduce quantity");
              }
            })
         }
         else
         alert("Product is currently not delverable to this location please try again")
      
         
   }

   buyall()
   {
      this.state.cartitem.map((result=> this.placeorder(result.pid,result.qty,result.oprice)));
      console.log("buy all");
   }

   gotoaccount()
   {
      this.props.history.push('/updateAcc');
   }

  
   render()
   {
    return(
         <div>
            <h1 style={{marginTop:20+"px",marginLeft:70+"px"}}>SHOPPING <span>CART</span></h1>
            <div className="cart-content">
               <div>
               {!this.state.cartempty &&
               this.state.cartitem.map((result=><CartItem key={result.pid} mkey={result.pid} pname={result.pname} qty={result.qty} pimage={result.pimage} price={result.oprice} delcart ={this.delcart} deliv={this.state.deliv}/>))
               }
               </div>
               {!this.state.cartempty &&
                   <div>
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
                   <button onClick={this.buyall}>BUY ALL</button>
                  </div>
                    <div className="order-details">
                     <div className="location-details">
                     <h4>Delivery Address :</h4>
                     <p>{this.state.address}</p>
                     <h4>Pincode :</h4>
                     <p>{this.state.pincode}</p>
                     <button onClick={this.gotoaccount}>CHANGE</button>
                     </div>
                     </div>
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
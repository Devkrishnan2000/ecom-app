import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

 class CartItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            tprice:0,
            popup:false
        }
        this.deletecart = this.deletecart.bind(this);
        this.placeorder = this.placeorder.bind(this);
        this.orderplaced = this.orderplaced.bind(this);
        this.setpopup = this.setpopup.bind(this);
    }

    deletecart()
    {
        console.log(this.props.mkey);
        this.props.delcart(this.props.mkey);
    }

    placeorder(e)
    {
         e.preventDefault();
         if(this.props.deliv==='0')
         {
           this.setState({popup:true});
         }
         else
         alert("Product is currently not delverable to this location please try again");
         
    }

     orderplaced(e)
     {
        e.preventDefault();
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/placeorder.php",{params:{pid:this.props.mkey,qty:this.props.qty,price:this.state.tprice}}).then(res=>
        {
           console.log(res.data);
          if(res.data===0)
          {
            this.props.history.push('/orders');  
          }
          else if(res.data===1)
          {
              alert("The item is currently out of stock please try again or reduce quantity");
          }
        })

     }

     setpopup()
     {
        this.setState({popup:false});
     }
    componentDidMount()
    {
         this.setState({tprice:Number(this.props.qty)*Number(this.props.price)})
    }
    render()
    {
        return(
             <div className="cart-item">
              <img src={this.props.pimage}></img>
              <div className="desc">
                <h2>{this.props.pname}</h2>
                <div className="content">
                    <div className="lhs">
                        <h6>Qty :</h6>
                        <h6>M.R.P :</h6>
                        <h6>Total :</h6>
                    </div>
                    <div className="rhs">
                         <h6> {this.props.qty}</h6>
                        <h6> ₹ {this.props.price}</h6>
                        <h6> ₹{this.state.tprice} </h6>
                    </div>

                </div>
              </div>
              <div className="button-placement">
              <button onClick={this.placeorder}>BUY</button>
              <button onClick={this.deletecart} className="button-black">DELETE</button>
              </div>

             {this.state.popup &&
                 <div className="modal">
                 <div className="overlay"></div>
                 <div className="modal-content">
                   <h2 style={{marginTop:30+"px",marginBottom:20+"px",textAlign:"center"}}>PAYMENT INFORMATION</h2>
                   <form onSubmit={this.orderplaced}>
                      <h4>Card Number</h4>
                      <input className="textbox"  type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" required></input>
                      <h4>CVV</h4>
                      <input className="textbox" type="tel" inputMode="numeric" maxLength="3" minLength="3" required></input>
                      <div>
                      <input style={{marginTop:20+"px"}} type="submit" className="button-black" value="PLACE ORDER"></input>
                      </div>
                      
                   </form>
                   <button className="close-modal" onClick={this.setpopup}>CLOSE</button>
                 </div>
                 </div>
             }
             

             </div>
        )
    }
}

export default withRouter(CartItem);
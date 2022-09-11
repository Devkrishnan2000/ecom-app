import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./css/invoice.css";

class Invoice extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            invoicedata:[]
        }
    }
    componentDidMount()
    {
        console.log(this.props.location.state.id);
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinvoice.php",{params:{oid:this.props.location.state.id}}).then(res=>{
            
            this.setState({invoicedata:res.data});
            console.log(this.state.invoicedata);
        })

    }
    render()
    {
        return(
             <div className="invoice-div">
                <h1>INVOICE</h1>
                <table>
                  <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Customer Name</th>
                        <th>Delivery Address</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>quantity</th>
                        <th>Billed Price</th>
                    </tr>
                   
                  </thead>
                  <tbody>
                     {
                        <tr>
                            <td>{this.state.invoicedata['oid']}</td>
                            <td>{this.state.invoicedata['odate']}</td>
                            <td>{this.state.invoicedata['cname']}</td>
                            <td>{this.state.invoicedata['caddr']}</td>
                            <td>{this.state.invoicedata['pid']}</td>
                            <td>{this.state.invoicedata['pname']}</td>
                            <td>{this.state.invoicedata['qty']}</td>
                            <td>₹ {this.state.invoicedata['oprice']}</td>
                            
                        </tr>
                     }
                   </tbody>
                </table>
             </div>
        )
    }
}
export default withRouter(Invoice);
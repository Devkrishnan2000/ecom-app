import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./css/ordermgnt.css";

class OrderMgnt extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            pendingorder:[],
            ispendingorder:false,
            allorders:false,
            curoid:''
        }
        this.getcuroid = this.getcuroid.bind(this);
        this.getallorders = this.getallorders.bind(this);
    }
    componentDidMount()
    {
       this.getorders();
       console.log(this.state.ispendingorder);
    }

   async getorders()
    {
        if(this.state.allorders===false)
        {
           await axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getorderdispatch.php").then(res=>{
                if(res.data!=-1)
                {
                    this.setState({pendingorder:res.data});
                    this.setState({ispendingorder:true});
                }
                else if(res.data==-1)
                {
                    this.setState({ispendingorder:false});
                    console.log("ispendingorder is false");
                }
               // console.log(res.data);
               })
        }
        else if(this.state.allorders===true)
        {
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getorderdispatch.php",{params:{all:true}}).then(res=>{
                if(res.data!==-1)
                {
                    this.setState({pendingorder:res.data});
                    this.setState({ispendingorder:true});
                }
                else if(res.data==-1)
                {
                    this.setState({ispendingorder:false});
                    console.log("ispending order is false")
                }
                console.log(res.data);
               })
        }
       
    }

    getcuroid(oid)
    {
        this.setState({curoid:oid});
       // console.log(oid);
        this.getdispatched(oid);
    }

    getdispatched(oid)
    {
      axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/setdispatch.php",{params:{oid:oid}});
      this.getorders();
      this.forceUpdate();

    }

   async getallorders()
    {
        console.log("all order");
        if(this.state.allorders===false)
        {
           await this.setState({allorders:true});
            this.getorders();

        }
        else if(this.state.allorders===true)
        {
           await this.setState({allorders:false});
            this.getorders();
        }
    }
    render()
    {
        return(
            <div className="ordermgnt-div">
             <h1>ORDER <span>MANAGEMENT</span></h1>
             <div>
                <div className="view-all">
                    {this.state.allorders &&
                       <button onClick={this.getallorders} className="button-black">VIEW PENDING ORDERS</button>
                    }
                    {!this.state.allorders &&
                       <button onClick={this.getallorders} className="button-black">VIEW ALL ORDERS</button>
                    }
               
                {this.state.ispendingorder && !this.state.allorders &&
                    <h2>Pending Orders</h2>
                }
                {this.state.allorders &&
                     <h2>All Orders</h2>
                }

                {
                    !this.state.ispendingorder &&
                    <h2>No Pending Orders Available</h2>
                }
                
                </div>
               
               <table className="order-table" >
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th> Customer ID</th>
                    <th> Product ID</th>
                    <th>Product Name</th>
                    {this.state.allorders &&
                     <th>Status</th>
                    }
                </tr>
                </thead>
                <tbody>
                   
                    {this.state.ispendingorder && !this.state.allorders &&
                    this.state.pendingorder.map((result=> <tr key={result.oid}>
                        <td>{result.oid}</td>
                        <td>{result.odate}</td>
                        <td>{result.cid}</td>
                        <td>{result.pid}</td>
                        <td>{result.pname}</td>
                        <td><button onClick={this.getcuroid.bind(this,result.oid)} className="button-black">Dispatch</button></td>
                    </tr>
                    
                        ))}

                        {this.state.allorders &&
                          this.state.pendingorder.map((result=> <tr key={result.oid}>
                            <td>{result.oid}</td>
                            <td>{result.odate}</td>
                            <td>{result.cid}</td>
                            <td>{result.pid}</td>
                            <td>{result.pname}</td>
                            <td>{result.ostatus}</td>
                            </tr>
                    
                    ))
                        }

                </tbody>
               
               </table>
             </div>
            </div>
        )
    }
}

export default withRouter(OrderMgnt);
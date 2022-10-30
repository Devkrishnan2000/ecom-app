import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/iman.css";

class Imanagement extends Component {
  constructor(props) {
    super(props);
    

    this.addcat = this.addcat.bind(this);
    this.editinvent = this.editinvent.bind(this);
  }

  addcat()
  {
    let inventory ={category: this.props.category, id:-1, isupdate:false};
    this.props.history.push({
      pathname : "/adinventory",
      state: {inventory: inventory}
    })
  }

  editinvent(id)
  {
    let inventory ={category: this.props.category, id:id, isupdate:true};
    this.props.history.push({
      pathname : "/adinventory",
      state: {inventory: inventory}
    })
  }

  tablegen() {
    switch (this.props.category) {
      case "Brand": 
        return (
          <table className="order-table">
            <thead>
              <tr>
                <th>Brand id</th>
                <th>Brand Name</th>
              </tr>
            </thead>
            <tbody>
                {
                 this.props.brand.map((res=> <tr key={res.brandid} >
                    <td>{res.brandid}</td>
                    <td>{res.bname}</td>
                    <td><button onClick={this.editinvent.bind(this,res.brandid)}><img src="images\svg\edit.svg"/></button></td>
                 </tr> ))
                }
            </tbody>
          </table>
        );
     case "Electronics":  
        return (
            <table className="order-table">
              <thead>
                <tr>
                  <th>E id</th>
                  <th>Electronic Name</th>
                  <th>Brand id</th>
                  <th>Electronic Type</th>
                  <th>Electronic Image</th>
                </tr>
              </thead>
              <tbody>
              {
                 this.props.electronic.map((res=> <tr key={res.eid} >
                    <td>{res.eid}</td>
                    <td>{res.ename}</td>
                    <td>{res.brandid}</td>
                    <td>{res.etype}</td>
                    <td>{res.eimage}</td>
                    <td><button  onClick={this.editinvent.bind(this,res.eid)}><img src="images\svg\edit.svg"/></button></td>
                 </tr> ))
                }
              </tbody>
            </table>
          );
          case "Parts":
            
            return (
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>P id</th>
                      <th>P name</th>
                      <th>Price</th>
                      <th>Offer Price</th>
                      <th>stock</th>
                      <th>Part type</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                 this.props.parts.map((res=> <tr key={res.pid} >
                    <td>{res.pid}</td>
                    <td>{res.pname}</td>
                    <td>{res.price}</td>
                    <td>{res.oprice}</td>
                    <td>{res.stock}</td>
                    <td>{res.parttype}</td>
                    <td><button onClick={this.editinvent.bind(this,res.pid)}><img src="images\svg\edit.svg"/></button></td>
                 </tr> ))
                }
                  </tbody>
                </table>
              );
              case "Tools":
            return (
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>P id</th>
                      <th>P name</th>
                      <th>Price</th>
                      <th>Offer Price</th>
                      <th>stock</th>
                      <th>Tool type</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                 this.props.tools.map((res=> <tr key={res.pid} >
                    <td>{res.pid}</td>
                    <td>{res.pname}</td>
                    <td>{res.price}</td>
                    <td>{res.oprice}</td>
                    <td>{res.stock}</td>
                    <td>{res.tooltype}</td>
                    <td><button onClick={this.editinvent.bind(this,res.pid)}><img src="images\svg\edit.svg"/></button></td>
                 </tr> ))
                }
                  </tbody>
                </table>
              );            
    }
  }
  render() {
    return (
      <div className="iman-div">
        { this.props.category!=='-1' &&
         <div>
         <h2>{this.props.category}</h2>
         <button onClick={this.addcat}> Add New {this.props.category}</button>
         <div className="table-div">
         {this.tablegen()}
         </div>
         </div>
        } 
      </div>
    );
  }
} 

export default withRouter(Imanagement);

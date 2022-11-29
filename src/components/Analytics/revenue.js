import axios from "axios";
import React, { Component } from "react";
import AnimatedNumber from "animated-number-react";
import "./css/revenue.css";
import RevenueChart from "./charts/revenuechart";

export default class Revenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salesnum: 0,
      revenuenum: 0,
      years: [],
      months:['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','Decemeber'],
      revenuedat:[0,0,0,0,0,0,0,0,0,0,0,0],
      salesdat:[0,0,0,0,0,0,0,0,0,0,0,0],
      yearrevdat:[],
      yearsaledat:[],
      datewisedat:[]
    };

    this.onchangeyear= this.onchangeyear.bind(this);
    this.ondateselc = this.ondateselc.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { rev: 0 } }
      )
      .then((res) => {
        this.setState({ revenuenum: res.data });
      });
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { sale: 0 } }
      )
      .then((res) => {
        this.setState({ salesnum: res.data });
      });
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { year: 0 } }
      )
      .then((res) => {
        this.setState({ years: res.data});
        console.log(res.data);
      });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { yearwiserev: 0 } }
      )
      .then((res) => {
        this.setState({ yearrevdat: res.data });
      });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { yearwisesale: 0 } }
      )
      .then((res) => {
        this.setState({ yearsaledat: res.data });
      });
  }
  formatValuerev = (value) => value.toFixed(2);
  formatValuesale = (value) => value.toFixed(0);

  onchangeyear(e)
  {
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { revenueyear: e.target.value } }
      )
      .then((res) => {
        this.setState({ revenuedat: res.data });
      });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { salesyear: e.target.value } }
      )
      .then((res) => {
        this.setState({ salesdat: res.data });
      });
      
      
  }

  ondateselc(e)
  {
    e.preventDefault();

    const dfrom = Date.parse(e.target.datefrom.value);
    const  dto = Date.parse(e.target.dateto.value);

    console.log(dfrom);
    console.log(dto);
    if(dfrom <= dto)
    {
      axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",{params:{from:e.target.datefrom.value,to:e.target.dateto.value}}).then((res)=>{
        this.setState({datewisedat: res.data});
        console.log(res.data);
      })
    }
    else
    {
      alert("Invalid Range");
    }
    
  }
  render() {
    return (
      <div className="revenue-parent-div">
        <div className="revenue-div">
          <div className="sales">
            <h2>TOTAL ORDERS</h2>
            <h2>
              <span>
                <AnimatedNumber
                  value={parseInt(this.state.salesnum)}
                  formatValue={this.formatValuesale}
                  easing="linear"
                />
              </span>
            </h2>
          </div>
          <div className="revenue">
            <h2>TOTAL REVENUE</h2>
            <h2>
              <span>
                ₹
                <AnimatedNumber
                  value={parseInt(this.state.revenuenum)}
                  formatValue={this.formatValuerev}
                  easing="linear"
                />
              </span>
            </h2>
          </div>
        </div>
        <div className="monthly-revenue-div">
        <select
            className="textbox"
            name="yearselc"
            style={{ marginTop: 20 + "px", marginLeft: -5 + "px" }}
            onChange={this.onchangeyear}
          >
            <option value="" selected disabled hidden>
              Select year
            </option>
            {this.state.years.map((res) => (
              <option key={res.year}>{res.year}</option>
            ))}
          </select>
          <h2 style={{ marginTop: 20 + "px"}}>REVENUE MONTHLY WISE</h2>
          <RevenueChart revenuedat={this.state.revenuedat} type="Revenue ₹"  label={this.state.months}></RevenueChart>
          <h2 style={{ marginTop: 20 + "px"}}>QUANTITY SOLD MONTHLY WISE</h2>
          <RevenueChart revenuedat={this.state.salesdat} type="Sales" label={this.state.months} ></RevenueChart>
          <h2 style={{ marginTop: 20 + "px"}}>REVENUE YEAR WISE</h2>
          <RevenueChart revenuedat={this.state.yearrevdat} type="Year wise Revenue ₹" label={this.state.years.map((res=>res.year))}></RevenueChart>
          <h2 style={{ marginTop: 20 + "px"}}>QUANTITY SOLD YEAR WISE</h2>
          <RevenueChart revenuedat={this.state.yearsaledat} type="Year wise Sale" label={this.state.years.map((res=>res.year))}></RevenueChart>
          <h2 style={{ marginTop: 20 + "px"}}>REVENUE DATE WISE</h2>
          <form onSubmit={this.ondateselc}>
            <input style={{marginTop:30+"px",marginRight:20+"px"}} className="textbox" type="date" name="datefrom" required></input>
            <label>To</label>
            <input style={{marginTop:30+"px",marginBottom:30+"px"}} className="textbox" type="date" name="dateto" required></input>
            <input style={{marginLeft:20+"px"}} className="button-black" type="submit" value="Go"></input>
          </form>
          <table style={{width:70+"%",marginLeft:0+"px",marginBottom:30+"px"}} className="order-table" >
                <thead>
                <tr>
                    <th>Order Date</th>
                    <th>Order ID</th>
                    <th>Product ID</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
               
                  {this.state.datewisedat.map((res)=><tr>
                    <td>{res.odate}</td>
                    <td>{res.oid}</td>
                    <td>{res.pid}</td>
                    <td>{res.qty}</td>
                  </tr>)}
                </tbody>
                </table>
        </div>
      </div>
    );
  }
}

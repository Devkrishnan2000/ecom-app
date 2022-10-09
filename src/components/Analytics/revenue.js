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
      revenuedat:[0,0,0,0,0,0,0,0,0,0,0,0],
      salesdat:[0,0,0,0,0,0,0,0,0,0,0,0]
    };

    this.onchangeyear= this.onchangeyear.bind(this);
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
  render() {
    return (
      <div className="revenue-parent-div">
        <div className="revenue-div">
          <div className="sales">
            <h2>TOTAL SALES</h2>
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
          <RevenueChart revenuedat={this.state.revenuedat} type="Revenue ₹"></RevenueChart>
          <h2 style={{ marginTop: 20 + "px"}}>SALES MONTHLY WISE</h2>
          <RevenueChart revenuedat={this.state.salesdat} type="Sales"></RevenueChart>
        </div>
      </div>
    );
  }
}

import axios from "axios";
import React, { Component } from "react";
import T5ProdSale from "./charts/t5prodsale";
import AnimatedNumber from "animated-number-react";
import "./css/revenue.css";
import CurProd from "./charts/curprod";
import ProdReview from "./charts/prodreview";
import { withRouter } from "react-router-dom";

 class Apart extends Component {

  
  constructor(props) {
   
    super(props);
    this.piechart = React.createRef()  
    this.state = {
      popname: "pname",
      popsales: 0,
      poprating: 0,
      t5sales: [],
      t5rating: [],
      parts: [],
      years: [],
      curpartid: 0,
      curyear: 0,
      curpartsales: [],
      currating: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decemeber",
      ],
      rating: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
      prodtype: false, //false means parts true means tools
    };

    this.onpartchange = this.onpartchange.bind(this);
    this.onyearchange = this.onyearchange.bind(this);
  }

  componentDidMount() {

    console.log(this.props.prodtype);
    if (this.props.prodtype == "tool") {
      this.setState({ prodtype: true });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { getpoptool: 0 } }
      )
      .then((res) => {
        this.setState({ popname: res.data["pname"] });
        this.setState({ popsales: res.data["count"] });
        this.setState({ poprating: res.data["rating"] });
      });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { gett5tsales: 0 } }
      )
      .then((res) => {
        this.setState({ t5sales: res.data });
      });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { gett5trating: 0 } }
      )
      .then((res) => {
        this.setState({ t5rating: res.data });
      });
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { gettools: 0 } }
      )
      .then((res) => {
        this.setState({ parts: res.data });
        console.log(res.data);
      });
      

    }
    else
    {
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { getpopprod: 0 } }
      )
      .then((res) => {
        this.setState({ popname: res.data["pname"] });
        this.setState({ popsales: res.data["count"] });
        this.setState({ poprating: res.data["rating"] });
      });
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { gett5sales: 0 } }
      )
      .then((res) => {
        this.setState({ t5sales: res.data });
      });
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { gett5rating: 0 } }
      )
      .then((res) => {
        this.setState({ t5rating: res.data });
      });
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { getparts: 0 } }
      )
      .then((res) => {
        this.setState({ parts: res.data });
        console.log(res.data);
      });
    }
    
  }
  formatValuesale = (value) => value.toFixed(0);

  onpartchange(e) {
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getrevenue.php",
        { params: { year: 0 } }
      )
      .then((res) => {
        this.setState({ years: res.data });
      });
    
    this.setState({ curpartid: e.target.value });

    if(this.state.curyear!==0)
    {
      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        {
          params: {
            curpartyear: this.state.curyear,
            curpartid: e.target.value,
          },
        }
      )
      .then((res) => {
        this.setState({ curpartsales: res.data });
      });

      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { currating: e.target.value } }
      )
      .then((res) => {
        this.setState({ currating: res.data });
        console.log(res.data);
      });


    }
  }

  onyearchange(e) {
    
    this.setState({ curyear: e.target.value });
    this.piechart.current.scrollIntoView({behavior: "smooth"})
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        {
          params: {
            curpartyear: e.target.value,
            curpartid: this.state.curpartid,
          },
        }
      )
      .then((res) => {
        this.setState({ curpartsales: res.data });
      });
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getprodanalytics.php",
        { params: { currating: this.state.curpartid } }
      )
      .then((res) => {
        this.setState({ currating: res.data });
        console.log(res.data);
      });
  }
  render() {
    return (
      <div className="revenue-parent-div">
        <div className="revenue-div">
          <div className="sales">
            <h2>SALES</h2>
            <h2>
              <span>{this.state.popsales}</span>
            </h2>
          </div>

          <div className="popular-prod">
            {this.state.prodtype && <h2>MOST POPULAR TOOL</h2>}
            {!this.state.prodtype && <h2>MOST POPULAR PART</h2>}
            <h2>
              <span>{this.state.popname}</span>
            </h2>
          </div>

          <div className="avg-review">
            <h2>AVERAGE RATING</h2>
            <h2>
              <span>{this.state.poprating}</span>
            </h2>
          </div>
        </div>
        <div className="prodgraph-div">
          {this.state.prodtype && (
            <h2 style={{ marginTop: 20 + "px" }}>TOP 5 BEST SELLING TOOLS</h2>
          )}
          {!this.state.prodtype && (
            <h2 style={{ marginTop: 20 + "px" }}>TOP 5 BEST SELLING PARTS</h2>
          )}
          <T5ProdSale
            label={this.state.t5sales.map((res) => res.pname)}
            data={this.state.t5sales.map((res) => res.count)}
          ></T5ProdSale>
            {this.state.prodtype && (
            <h2 style={{ marginTop: 20 + "px" }}>TOP 5 HIGHLY REVIEWED TOOLS</h2>
          )}
          {!this.state.prodtype && (
            <h2 style={{ marginTop: 20 + "px" }}>TOP 5 HIGHLY REVIEWED PARTS</h2>
          )}
          <T5ProdSale
            label={this.state.t5rating.map((res) => res.pname)}
            data={this.state.t5rating.map((res) => res.rating)}
          ></T5ProdSale>
          {!this.state.prodtype &&
               <h2 style={{ marginTop: 50 + "px", textAlign: "center" }}>
               PART WISE ANALYTICS
             </h2>
          }
           {this.state.prodtype &&
               <h2 style={{ marginTop: 50 + "px", textAlign: "center" }}>
               TOOL WISE ANALYTICS
             </h2>
          }
         
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 50 + "px",
              marginBottom: 50 + "px",
            }}
          >
            <select
              name="prodselc"
              className="textbox"
              onChange={this.onpartchange}
            >
              <option value="" selected disabled hidden>
                Select Product
              </option>
              {this.state.parts.map((res) => (
                <option key={res.pid} value={res.pid}>
                  {res.pname}
                </option>
              ))}
            </select>
            <select
              name="yearselc"
              className="textbox"
              onChange={this.onyearchange}
            >
              <option value="" selected disabled hidden>
                Select Year
              </option>
              {this.state.years.map((res) => (
                <option key={res.year} value={res.year}>
                  {res.year}
                </option>
              ))}
            </select>
          </div>
          <CurProd
            type="sales"
            label={this.state.months}
            data={this.state.curpartsales.map((res) => res.sum)}
          ></CurProd>
          {!this.state.prodtype &&
            <h4 ref={this.piechart} style={{ textAlign: "center" }}>PART REVIEW ANALYSIS</h4>
          }
           {this.state.prodtype &&
            <h4  ref={this.piechart} style={{ textAlign: "center" }}>TOOL REVIEW ANALYSIS</h4>
          }
         
          <ProdReview
            type="sales"
            label={this.state.rating}
            data={this.state.currating.map((res) => res.count)}
          ></ProdReview>
        </div>
      </div>
    );
  }
}

export default withRouter(Apart);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Category from "./category";
import axios from "axios";
import Product from "./product";

class ShopforParts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodcategory: [],
      brandcategory:[],
      electronics:[],
      curprodcat: "null",
      curbrandcat:"null"
    };
    this.setprodcategory = this.setprodcategory.bind(this);
    this.setbrandcategory = this.setbrandcategory.bind(this);
    this.setprodallcategory = this.setprodallcategory.bind(this);
    this.setbrandallcategory = this.setbrandallcategory.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getcategory.php",
        { params: { curcat: false } }
      )
      .then((res) => {
        this.setState({ prodcategory: res.data });
        console.log(res.data);
      });

      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getcategory.php",
        { params: { brand:true} }
      )
      .then((res) => {
        this.setState({ brandcategory: res.data });
        console.log(res.data);
      });

      axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getproduct.php"
      )
      .then((res) => {
        this.setState({ electronics: res.data });
        console.log(res.data);
      });
  }

  setprodcategory(category) {
    this.setState({ curprodcat: category });
    axios
    .get(
      "http://localhost:80/sem8project/ecom-app/ecom-app/api/getproduct.php",{params:{prodcat:category,brandcat:this.state.curbrandcat}}
    )
    .then((res) => {
      this.setState({ electronics: res.data });
      console.log(res.data);
    });
  }

  setbrandcategory(category,keyval) {
    this.setState({ curbrandcat: keyval });
    console.log(category);
    console.log(keyval);
    axios
    .get(
      "http://localhost:80/sem8project/ecom-app/ecom-app/api/getproduct.php",{params:{prodcat:this.state.curprodcat,brandcat:keyval}}
    )
    .then((res) => {
      this.setState({ electronics: res.data });
      console.log(res.data);
    });
  }
  setprodallcategory(category)
  {
    axios
    .get(
      "http://localhost:80/sem8project/ecom-app/ecom-app/api/getproduct.php",{params:{prodcat:"null",brandcat:this.state.curbrandcat}}
    )
    .then((res) => {
      this.setState({ electronics: res.data });
      console.log(res.data);
    });
  }

  setbrandallcategory(keyval)
  {
    axios
    .get(
      "http://localhost:80/sem8project/ecom-app/ecom-app/api/getproduct.php",{params:{prodcat:this.state.curprodcat,brandcat:"null"}}
    )
    .then((res) => {
      this.setState({ electronics: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="tools-div">
        <div>
          <h1 style={{ marginLeft: 20 + "px" }}>
            SHOP FOR <span>PARTS</span>
          </h1>
          <h6 style={{ marginTop: 20 + "px", marginLeft: 20 + "px" }}>
            Repair with confidence! iFixit has you covered with parts, tools,
            and free repair guides. All of our replacement parts are tested to
            meet rigorous quality standards and are backed by our
            industry-leading guarantee.
          </h6>
        </div>

        <h2 style={{ marginTop: 20 + "px", marginLeft: 20 + "px" }}>
          Product Category
        </h2>
        <div
          style={{
            display: "flex",
            marginLeft: 20 + "px",
            marginTop: 20 + "px",
          }}
          className="product-category"
        >
          {this.state.prodcategory.map((res) => (
            <Category
              key={res.etype}
              keyval="0"
              parttype={res.etype}
              setcategory={this.setprodcategory}
            />
          ))}
          <Category parttype="ALL" setcategory={this.setprodallcategory}></Category>
        </div>
        <h2 style={{ marginTop: 20 + "px", marginLeft: 20 + "px" }}>
          Brand Category
        </h2>
        <div
          style={{
            display: "flex",
            marginLeft: 20 + "px",
            marginTop: 20 + "px",
          }}
          className="product-category"
        >
            <div className="category-wrapper">
            {this.state.brandcategory.map((res) => (
            <Category
              key={res.bname}
              keyval={res.brandid}
              parttype={res.bname}
              setcategory={this.setbrandcategory}
            />
          ))}
          <Category parttype="ALL" setcategory={this.setbrandallcategory}></Category>
            </div>
         
        </div>
        <div
          className="wrapper"
          style={{ marginTop: 40 + "px", marginLeft: 0 + "px" }}
        >
          {this.state.electronics.map((result)=> <Product key={result.eid} name={result.ename} img={result.eimage} mkey={result.eid} ></Product>)}
        </div>
      </div>
    );
  }
}
export default withRouter(ShopforParts);

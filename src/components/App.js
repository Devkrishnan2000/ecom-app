import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./homepage";
import Navbar from "./navbar";
import Footer from "./footer";
import Login from "./login";
import "./css/link.css";
import CreateAccount from "./createAccount";
import axios from "axios";
import homepage from "./homepage";
import ProductPage from "./productPage";
import PartsPage from "./partsPage";
import Cartpage from "./cartpage";
import Adminpage from "./adminpage";
import Orderpage from "./orderpage";
import Invoice from "./invoice";
import Shipment from "./shipment";
import Docpage from "./docpage";
import UpdateAccount from "./updateAccount";
import Getreview from "./getreview";
import Newdoc from "./newdoc";
import Editdoc from "./editdoc";
import Editstep from "./editstep";
import Addinventory from "./addinventory";
import Location from "./location";
import Adlocation from "./adlocation";
import Tools from "./tools";
import Analytics from "./analytics";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: 0,
      username: "LOGIN",
      navenabled: "1",
    };
    this.setloginval = this.setloginval.bind(this);
    this.setlogout = this.setlogoutval.bind(this);
  }

  setloginval(usr) {
    this.setState({ isloggedIn: 1 });
    this.setState({ username: usr });
    console.log(" setloginvalval method called" + this.state.username);
  }

  setlogoutval = () => {
    this.setState({ isloggedIn: 0 });
    console.log("setlogout method called");
  };

  render() {
    axios.defaults.withCredentials = true;

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Navbar
            key={this.state.isloggedIn}
            brand="FixMe.com"
            option1="Parts"
            option3="Tools"
            islogin={this.state.isloggedIn}
            setlogoutval={this.setlogoutval}
            username={this.state.username}
          />
          <div>
            <Switch>
              <Route exact path="/">
                <HomePage setloginval={this.setloginval} />
              </Route>
              <Route path="/login">
                <Login isadmin="0" />
              </Route>
              <Route path="/createAccount" component={CreateAccount} />

              <Route path="/productPage">
                <ProductPage
                  prodname="MORARY DRIVER KIT"
                  rating="4"
                  reviewcount="4"
                  price="2000"
                  discount="30"
                  offerprice="-1"
                  stock="4"
                />
              </Route>

              <Route path="/partsPage">
                <PartsPage />
              </Route>

              <Route path="/cart">
                <Cartpage />
              </Route>

              <Route path="/adminlogin">
                <Login isadmin="1" />
              </Route>
              <Route path="/admin">
                <Adminpage
                  setnavfalse={this.setnavbarfalse}
                  setnavtrue={this.setnavbartrue}
                />
              </Route>
              <Route path="/orders">
                <Orderpage />
              </Route>
              <Route path="/invoice">
                <Invoice />
              </Route>
              <Route path="/shpping">
                <Shipment />
              </Route>
              <Route path="/doc">
                <Docpage />
              </Route>
              <Route path="/updateAcc">
                <UpdateAccount/>
              </Route>
              <Route path="/getreview">
                <Getreview/>
              </Route>
              <Route path="/newdoc">
                <Newdoc/>
              </Route>
              <Route path="/editdoc">
                <Editdoc/>
              </Route>
              <Route path="/editstep">
                <Editstep/>
              </Route>
              <Route path="/adinventory">
                <Addinventory/>
              </Route>
              <Route path="/location">
                <Location/>
              </Route>
              <Route path="/adlocation">
                <Adlocation/>
              </Route>
              <Route path="/tools">
                <Tools/>
              </Route>
              <Route path="/analytics">
                <Analytics/>
              </Route>
            </Switch>
          </div>
         
        </div>
      </Router>
    );
  }
}

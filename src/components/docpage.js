import axios from "axios";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/doc.css";
import DispStep from "./dispstep";

class Docpage extends Component {


  constructor(props)
  {
    super(props)
    this.state={

      dname:'',
      ddiff:'',
      dtime:'',
      dstep:'',
      dintro:'',
    }
  }
  componentDidMount()
  {

    console.log(this.props.location.state.pid)
    axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getdoc.php",{params:{pid:this.props.location.state.pid}}).then(res=>{
    console.log(res.data);
    this.setState({dname:res.data['dname']})
    this.setState({ddiff:res.data['ddiff']})
    this.setState({dtime:res.data['dtime']})
    this.setState({dintro:res.data['intro']})
    })


  }
  render() {
    return (
      <div className="docpage-div">
        <h1 className="heading">{this.state.dname}</h1>
        <div className="info-tab">
          <div className="info-detail">
            <img src="images\svg\difficulty.svg"></img>
            <h4>difficulty: {this.state.ddiff}</h4>
          </div>

          <div className="info-detail">
            <img src="images\svg\timer.svg"></img>
            <h4>Time Required: {this.state.dtime} hours</h4>
          </div>

          <div className="info-detail">
            <img src="images\svg\clipboard.svg"></img>
            <h4>Steps: 14</h4>
          </div>
        </div>

        <div className="content">
          <h2>Introduction</h2>
          <p style={{ marginTop: 20 + "px" }}>
           {this.state.dintro}
          </p>
         <DispStep/>
        </div>
      </div>
    );
  }
}

export default withRouter(Docpage);

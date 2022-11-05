import axios from "axios";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/doc.css";
import DispStep from "./dispstep";

class Docpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dname: "",
      ddiff: "",
      dtime: "",
      dstep: 0,
      dintro: "",
      vlink:"",
      steps: [],
    };
  }
  componentDidMount() {
    console.log(this.props.location.state.pid);
    axios
      .get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getdoc.php", {
        params: { pid: this.props.location.state.pid },
      })
      .then((res) => {
        this.setState({ dname: res.data["dname"] });
        this.setState({ ddiff: res.data["ddiff"] });
        this.setState({ dtime: res.data["dtime"] });
        this.setState({ dintro: res.data["intro"] });
        this.setState({vlink:res.data["video"]});
        axios
          .get(
            "http://localhost:80/sem8project/ecom-app/ecom-app/api/getstep.php",
            { params: { did: res.data["did"] } }
          )
          .then((step) => {
            this.setState({ steps: step.data });
            this.setState({ dstep: step.data.length });
          });
      });
  }
  render() {
    return (
      <div className="docpage-div">
        <h1 className="heading">{this.state.dname}</h1>
        <div className="info-tab">
          <div className="info-detail">
            <img src="images\svg\difficulty.svg"></img>
            <h4>Difficulty: {this.state.ddiff}</h4>
          </div>

          <div className="info-detail">
            <img src="images\svg\timer.svg"></img>
            <h4>Time Required: {this.state.dtime} hours</h4>
          </div>

          <div className="info-detail">
            <img src="images\svg\clipboard.svg"></img>
            <h4>Steps: {this.state.dstep}</h4>
          </div>
        </div>

        <div className="content">
          <h2>Introduction</h2>
          <p style={{ marginTop: 20 + "px" }}>{this.state.dintro}</p>
          {this.state.steps.map((res) => (
            <DispStep
              key={res.stid}
              stid={res.stid}
              title={res.stitle}
              image={res.stimg}
              desc={res.stdesc}
            ></DispStep>
          ))}
        </div>

        <h2 style={{textAlign:"center",marginBottom:20+"px"}}>VIDEO <span>TUTORIAL</span></h2>
        <div className="video-div">
          <iframe
            width="560"
            height="315"
            src={this.state.vlink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="contact-us">
          <h2>Still Getting Stuck ?</h2>
          <h4>Contact our team : 9074757442</h4>
        </div>
      </div>
    );
  }
}

export default withRouter(Docpage);

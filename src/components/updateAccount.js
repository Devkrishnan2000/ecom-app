import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UpdateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tmpemail:"",
      addr: "",
      phno: "",
      pin: "",
      pindat:[],
      maildat:[],
      pinflag:0,
      mailflag:0
    };

    this.onchangename = this.onchangename.bind(this);
    this.onchangeaddr = this.onchangeaddr.bind(this);
    this.onchangeemail = this.onchangeemail.bind(this);
    this.onchangephone = this.onchangephone.bind(this);
    this.onchangepincode = this.onchangepincode.bind(this);
    this.updateacc = this.updateacc.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getuserdata.php"
      )
      .then((res) => {
        this.setState({ name: res.data["cname"] });
        this.setState({ addr: res.data["caddr"] });
        this.setState({ email: res.data["cmail"] });
        this.setState({ phno: res.data["cphno"] });
        this.setState({ pin: res.data["pincode"] });
        this.setState({tmpemail:res.data["cmail"]});
      });

    axios
      .get(
        "http://localhost:80/sem8project/ecom-app/ecom-app/api/getpincode.php"
      )
      .then((res) => {
        this.setState({ pindat: res.data });
      });
    axios
      .get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getemail.php")
      .then((res) => {
        this.setState({ maildat: res.data });
      });
  }

  onchangename(e) {
    this.setState({ name: e.target.value });
  }
  onchangeaddr(e) {
    this.setState({ addr: e.target.value });
  }
  onchangeemail(e) {
    this.setState({ email: e.target.value });
  }
  onchangephone(e) {
    this.setState({ phno: e.target.value });
  }
  onchangepincode(e) {
    this.setState({ pin: e.target.value });
  }

  updateacc(e)
  {
    e.preventDefault();
    this.setState({pinflag:0})
    this.setState({mailflag:0})
    const fd = new FormData();
    this.state.pindat.map((res)=>{
        if(res.pincode=== e.target.pincode.value)
        this.state.pinflag =1;   
     }
      
     )

      if(this.state.pinflag===1)
      {
        this.state.maildat.map((res)=>{
          if(res.cmail===e.target.cmail.value)
          {
            console.log(this.state.email);
            if(e.target.cmail.value!==this.state.tmpemail)
            {
                this.state.mailflag=1;
            }
            
          }
          
        })

        if(this.state.mailflag===1)
        {
          alert("Email Already Registered");
        }
        else
        {
          if(e.target.vpass.value==='')
          {
              e.target.vpass.value = e.target.pass.value;
          }
        fd.append('cname', e.target.cname.value);
        fd.append('cmail',e.target.cmail.value);
        fd.append('opass',e.target.pass.value);
        fd.append('pass', e.target.vpass.value);
        fd.append('adr',e.target.addr.value);
        fd.append('phno',e.target.phno.value);
        fd.append('pincode',e.target.pincode.value);
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/updateuser.php",fd).then(res=>{
          if(res.data===0)
          {
            alert("Please Logout and Login to effect changes");
          }
          else if(res.data===-1)
          {
            alert("Old Password is incorrect");
          }
          else if(res.data===-2)
          {
            alert(" Session expired ,Please Login Again");
          }

        }
        )
      
        }
       
      }
      else
      alert("Sorry we dont service to this pincode");
  }

  render() {
    return (
      <div>
        <h1
          style={{
            marginLeft: 150 + "px",
            marginTop: 20 + "px",
            marginBottom: 30 + "px",
          }}
        >
         UPDATE <span>ACCOUNT</span>
        </h1>
        <div style={{justifyContent:"start",marginLeft:150+"px"}} className="Table-div">
          <form onSubmit={this.updateacc} ref={(el) => (this.myFormRef = el)}>
            <table width={1000 + "px"}>
              <tbody>
                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Name
                    </h6>
                    <input
                      type="text"
                      pattern="[a-z A-Z]*"
                      className="textbox"
                      name="cname"
                      onChange={this.onchangename}
                      value={this.state.name}
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>

                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Email
                    </h6>
                    <input
                      type="email"
                      className="textbox"
                      value={this.state.email}
                      onChange={this.onchangeemail}
                      name="cmail"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>

                <tr></tr>
                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Address
                    </h6>
                    <textarea
                      rows={5}
                      className="textbox"
                      name="addr"
                      value={this.state.addr}
                      onChange={this.onchangeaddr}
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></textarea>
                  </td>

                  <td style={{ verticalAlign: "top" }}>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Phone number
                    </h6>
                    <input
                      pattern="[0-9]{10}"
                      type="text"
                      className="textbox"
                      value={this.state.phno}
                      onChange={this.onchangephone}
                      name="phno"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Pincode
                    </h6>
                    <input
                      type="text"
                      pattern="[0-9]*"
                      className="textbox"
                      name="pincode"
                      value={this.state.pin}
                      onChange={this.onchangepincode}
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Old Password
                    </h6>
                    <input
                      type="password"
                      className="textbox"
                      name="pass"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>

                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      New Password
                    </h6>
                    <input
                      type="password"
                      className="textbox"
                      name="vpass"
                      style={{ marginTop: 20 + "px" }}
                    
                      placeholder="leave blank if not meant to be changed"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "bottom", marginTop: 20 + "px" }}>
                    <button
                      type="submit"
                      style={{ marginTop: 20 + "px", marginLeft: 22 + "px" }}
                    >
                      UPDATE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(UpdateAccount);

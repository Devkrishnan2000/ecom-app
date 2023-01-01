import React, { Component } from "react";
import "./css/table.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import  { Redirect } from 'react-router-dom'


 export default class CreatAccount extends Component {
  

    constructor(props)
    {
        super(props);
        this.state={
          pindat:[],
          maildat:[],
          pinflag:0,
          mailflag:0
        }
        this.createAc = this.createAc.bind(this);
    }

    
    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpincode.php").then(res =>{
            this.setState({pindat: res.data})
            
          }
          )
          axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getemail.php").then(res =>{
            this.setState({maildat: res.data})
            
          }
          )
    }

    createAc(e)
    {
        this.setState({pinflag:0})
        this.setState({mailflag:0})
        e.preventDefault();
        const fd = new FormData();

      if(e.target.pass.value=== e.target.vpass.value)
      {  
         this.state.pindat.map((res)=>{
            if(res.pincode=== e.target.pincode.value)
            this.state.pinflag =1;   
         }
          
         )

          if(this.state.pinflag===1)
          {
            this.state.maildat.map((res)=>{
              if(res.cmail===e.target.cmail.value)
              this.state.mailflag=1;
            })

            if(this.state.mailflag===1)
            {
              alert("Email Already Registered");
            }
            else
            {
            fd.append('cname', e.target.cname.value);
            fd.append('cmail',e.target.cmail.value);
            fd.append('pass', e.target.pass.value);
            fd.append('adr',e.target.addr.value);
            fd.append('phno',e.target.phno.value);
            fd.append('pincode',e.target.pincode.value);
            axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/createAcc.php",fd).then(res=>{}
            )
            alert("Account Created Sucessfully")
            this.props.history.push('/login');
            }
           
          }
          else
          alert("Sorry we dont service to this pincode");
     
      }
      else
      {
        alert("Passwords Doesnt Match");
      }
     
    }
  render() {
    return (
      <div>
        <h1 style={{marginLeft:150+"px",marginTop:20+"px",marginBottom:30+"px"}}>CREATE NEW <span>ACCOUNT</span></h1>
        <div className="Table-div">
          <form onSubmit={this.createAc} ref={(el) => this.myFormRef = el}>
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
                      name="cmail"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Password
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
                      Re Enter Password
                    </h6>
                    <input
                      type="password"
                      className="textbox"
                      name="vpass"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Address
                    </h6>
                    <textarea
                     rows={5}
                      className="textbox"
                      name="addr"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></textarea>
                  </td>

                  <td style={{verticalAlign:"top"}}>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Phone number
                    </h6>
                    <input
                     pattern="[0-9]{10}"
                      type="text"
                      className="textbox"
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
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                    <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>Apply</button>
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


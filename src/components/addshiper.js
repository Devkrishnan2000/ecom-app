import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";


 export default class Addshiper extends Component
{
     constructor(props)
     {
        super(props)
        this.insshiper = this.insshiper.bind(this);
     }
    insshiper(e)
    {
         e.preventDefault();
        if(e.target.prevpass.value ===e.target.apass.value)
        {
            const fd = new FormData();
            fd.append("name",e.target.aname.value);
            fd.append("usrname",e.target.ausrname.value);
            fd.append("pass",e.target.apass.value);
            axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/addshiper.php",fd).then(res=>{
                if(res.data===1)
                alert("User already exists");
                else
                alert("Shipper created Sucessfully");
            })
        }
        else
        {
            alert("pasword doesnt match");
        }
       
    }
    render()
    {
        return(<div className="shipper-div">
           <h1 style={{marginLeft:20+"px"}}>ADD <span>SHIPPER</span></h1>
           <div className="Table-div">
          <form onSubmit={this.insshiper} >
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
                      name="aname"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>

                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                     UserName
                    </h6>
                    <input
                      type="text"
                      className="textbox"
                      name="ausrname"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Enter  Password
                    </h6>
                    <input
                      type="password"
                      className="textbox"
                      name="prevpass"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>

                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Re-Enter Password
                    </h6>
                    <input
                      type="password"
                      className="textbox"
                      name="apass"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                  </td>
                </tr>
               
               
                <tr>
                <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                    <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>ADD</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        </div>)
    }
}
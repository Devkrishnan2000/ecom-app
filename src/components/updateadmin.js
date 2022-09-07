import React, { Component } from "react";

export default class UpdateAdmin extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            usrname:'',

        }
    }

    componentDidMount()
    {
        
    }
    render()
    {
        return(
             <div>
                <h2 style={{marginBottom:20+"px"}}>UPDATE ADMIN <span>DETAILS</span></h2>
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
                     UserName
                    </h6>
                    <input
                      type="text"
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
                      Enter previous Password
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
                      Enter new Password
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
                <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                    <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>Update</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
             </div>
        )
    }
}
import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Adlocation extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            pincode:[]
        }
        this.addnewloc = this.addnewloc.bind(this);
    }

    componentDidMount()
    {
        if(this.props.location.state.pindata.isupdate==true)
        {
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpincodedata.php",{params:{pincode:this.props.location.state.pindata.pincode}}).then(res=>{
                this.setState({pincode:res.data});
            })
        }
    }

    addnewloc(e)
    {
      e.preventDefault();
      if(e.target.dfrom.value<e.target.dto.value)
      {
        if(this.props.location.state.pindata.isupdate==true)
        {
            const fd = new FormData();
            fd.append("pid",this.props.location.state.pindata.pincode)
            fd.append("place",e.target.place.value);
            fd.append("dfrom",e.target.dfrom.value);
            fd.append("dto",e.target.dto.value);
            fd.append("deliv",e.target.deliv.value);
            axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adpincode.php",fd).then(res=>{
                if(res.data===0)
                {
                    this.props.history.push("/admin");
                }
                else
                {
                   alert(res.data)
                }
            })
        }
        else
        {
            const fd = new FormData();
            fd.append("pincode",e.target.pincode.value);
            fd.append("place",e.target.place.value);
            fd.append("dfrom",e.target.dfrom.value);
            fd.append("dto",e.target.dto.value);
            axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adpincode.php",fd).then(res=>{
                if(res.data===0)
                {
                    this.props.history.push("/admin");
                }
                else
                {
                   alert(res.data)
                }
            })
        }
       
      }
      else
      {
        alert("Invalid Range");
      }
    }
  render()
  {
    return(
        <div className="adinventory-div">
            {
                this.props.location.state.pindata.isupdate &&
                <h1>UPDATE <span>LOCATION</span></h1>
            }
             {
                !this.props.location.state.pindata.isupdate &&
                <h1>ADD NEW <span>LOCATION</span></h1>
            }
            <div className="Table-div">
          <form onSubmit={this.addnewloc}>
            <table width={1000 + "px"}>
              <tbody>
                <tr>
                    { !this.props.location.state.pindata.isupdate &&
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
                    }
                
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Place
                    </h6>
                    {!this.props.location.state.pindata.isupdate &&
                     <input
                     type="text"
                     pattern="[a-z A-Z]*"
                     className="textbox"
                     name="place"
                     style={{ marginTop: 20 + "px" }}
                     required
                   ></input>
                    }
                     {this.props.location.state.pindata.isupdate &&
                     <input
                     type="text"
                     pattern="[a-z A-Z]*"
                     className="textbox"
                     defaultValue={this.state.pincode.place}
                     name="place"
                     style={{ marginTop: 20 + "px" }}
                     required
                   ></input>
                    }
                    
                  </td>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Delivery time from
                    </h6>
                    {!this.props.location.state.pindata.isupdate &&
                      <input
                      type="number"
                      placeholder="days"
                      className="textbox"
                      name="dfrom"
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                    }
                     {this.props.location.state.pindata.isupdate &&
                      <input
                      type="number"
                      placeholder="days"
                      className="textbox"
                      name="dfrom"
                      defaultValue={this.state.pincode.dfrom}
                      style={{ marginTop: 20 + "px" }}
                      required
                    ></input>
                    }
                    
                  </td>
                  <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Delivery time to
                    </h6>
                    {!this.props.location.state.pindata.isupdate &&
                       <input
                       type="number"
                       placeholder="days"
                       className="textbox"
                       name="dto"
                       style={{ marginTop: 20 + "px" }}
                       required
                     ></input>
                    }
                      {this.props.location.state.pindata.isupdate &&
                       <input
                       type="number"
                       placeholder="days"
                       className="textbox"
                       defaultValue={this.state.pincode.dto}
                       name="dto"
                       style={{ marginTop: 20 + "px" }}
                       required
                     ></input>
                    }
                 
                  </td>
                </tr>
                <tr>
                  {
                    this.props.location.state.pindata.isupdate &&
                   
                        <td>
                    <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                      Deliverable
                    </h6>
                      <select name="deliv" className="textbox">
                      <option value="0">Yes</option>
                      <option value="1">No</option>
                      </select>
                  </td>
                    
                  }
                  </tr>
                <tr>
                <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                    {!this.props.location.state.pindata.isupdate &&
                        <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>INSERT</button>
                    }
                        {this.props.location.state.pindata.isupdate &&
                        <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>UPDATE</button>
                    }
                    
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

export default withRouter(Adlocation);
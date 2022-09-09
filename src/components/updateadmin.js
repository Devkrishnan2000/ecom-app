import axios from "axios";
import React, { Component } from "react";

export default class UpdateAdmin extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            usrname:'',
            prevpass:'',

        }

        this.onnamechange = this.onnamechange.bind(this);
        this.onusrchange = this.onusrchange.bind(this);
    }

    componentDidMount()
    {
       axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getadmindata.php").then(res=>{
        this.setState({name:res.data['aname'],usrname:res.data['ausrname']});

         
       }) 
    }

    onnamechange(e)
    {
      this.setState({name:e.target.value});
    }

    onusrchange(e)
    {
      this.setState({usrname:e.target.value});
    }

    onupdate(e)
    {
      e.preventDefault();
      const fd = new FormData();
      fd.append('aname',e.target.aname.value);
      fd.append('ausrname',e.target.ausrname.value);
      fd.append('prevpass',e.target.prevpass.value);
      fd.append('apass',e.target.apass.value);
      axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/updateadmin.php",fd).then(res=>{
        if(res.data===-1)
        {
          alert("Previous password incorrect");
        }
        else if(res.data===0)
        {
          alert("Admin Updated Sucessfully");
        }
        else
        {
          alert("Unexpected Error Occured Please try again later");
        }
      })

    }
    render()
    {
        return(
             <div>
                <h2 style={{marginBottom:20+"px"}}>UPDATE ADMIN <span>DETAILS</span></h2>
                <div className="Table-div">
          <form onSubmit={this.onupdate} ref={(el) => this.myFormRef = el}>
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
                      value={this.state.name}
                      onChange={this.onnamechange}
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
                      value={this.state.usrname}
                      onChange={this.onusrchange}
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
                      name="prevpass"
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
                      name="apass"
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
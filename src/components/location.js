import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Location extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            pincode:[]
        }
        this.adnewloc = this.adnewloc.bind(this);
        this.editpincode = this.editpincode.bind(this);
    }

    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getpincodedata.php").then(res=>{
            this.setState({pincode:res.data});
        })
    }

    adnewloc()
    {
        let pindata ={pincode:-1, isupdate:false}
        this.props.history.push({
            pathname :"/adlocation",
            state :{pindata: pindata}
        })
    }

    editpincode(pincode)
    {
        let pindata ={pincode:pincode, isupdate:true}
        this.props.history.push({
            pathname :"/adlocation",
            state :{pindata: pindata}
        })
    }

    render()
    {
        return(
                <div className="adddoc-div">
                  <h1>LOCATION <span>MANAGEMENT</span></h1>
                  <button onClick={this.adnewloc}>ADD NEW LOCATION</button>
                  <table style={{marginTop:120+"px"}} className="order-table" >
                <thead>
                <tr>
                    <th>Pincode</th>
                    <th>Place</th>
                    <th>Delivery time from</th>
                    <th>Delivery time to</th>
                    <th>Deliverable</th>
                </tr>
                </thead>
                <tbody>
                  {
                    this.state.pincode.map((res=><tr key={res.pincode}>
                        <td>{res.pincode}</td>
                        <td>{res.place}</td>
                        <td>{res.dfrom} days</td>
                        <td>{res.dto} days</td>
                        <td>{res.deliverable==0 &&
                             <p>Yes</p>}
                            {res.deliverable==1 &&
                             <p>No</p>}
                             </td>
                             <td><button  onClick={this.editpincode.bind(this,res.pincode)}><img src="images\svg\edit.svg"/></button></td>
                    </tr>))
                  }
                </tbody>
                    </table>        
                </div>
        )
            
    }
}
export default withRouter(Location)
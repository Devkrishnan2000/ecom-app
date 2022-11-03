import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class GetReturn extends Component
{
    constructor(props)
    {
        super(props)
        this.placereturn = this.placereturn.bind(this);
    }

    placereturn(e)
    {
      e.preventDefault();
       const fd = new FormData();
       fd.append("pdinfo",e.target.rtoption.value);
       fd.append("rdesc",e.target.content.value);
       fd.append("rimg",e.target.rimg.files[0]);
       fd.append("oid",this.props.location.state.oid);
       fd.append("pid",this.props.location.state.pid);
       axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/addreturn.php",fd).then(res=>{
          if(res.data==0)
          {
            this.props.history.push({
               pathname:"/orders",
            })
          }
       })

    }
    render()
    {
        return(
            <div className="getreview-page">
            <h1>RETURN <span>PRODUCT</span></h1>
            <h2>Return For : {this.props.location.state.pname}</h2>
            <form onSubmit={this.placereturn}>
               <h5>Reason For Return</h5>
                <input style={{marginLeft:20+"px"}} type="radio" name="rtoption" value="Shippment Damage"  required></input>
                <label style={{marginLeft:10+"px"}} className="text">Shipment Damage</label>
                <input style={{marginLeft:20+"px"}} type="radio" name="rtoption" value="Defective Product" required></input>
                <label style={{marginLeft:10+"px"}} className="text">Defective Product</label>
               <h5>Content</h5>
               <textarea className="textbox" name="content" placeholder="Reason For Returning this product"  rows={10} required></textarea> 
               <div style={{marginTop:20+"px",marginLeft:20+"px"}}>
                <label >Add Image of Damaged Product</label>
                <br></br>
                <input   style={{marginTop:10+"px"}} type="file" name="rimg" accept=".jpg,.jpeg,.png" required></input>
               </div>
               <button style={{marginTop:20+"px",marginBottom:50+"px",marginLeft:20+"px"}}>SUBMIT</button>
            </form>
           </div>
        )
    }

}
export default withRouter(GetReturn);
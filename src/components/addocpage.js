import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/addoc.css"

class AddocPage extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            doc:[]
        }
        this.newdoc = this.newdoc.bind(this);
    }
    newdoc()
    {
        this.props.history.push("/newdoc");
    }
    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getdocdetails.php").then(res=>{
            console.log(res.data);
            this.setState({doc:res.data});
        })
    }
     render()
     {
        return(
              <div className="adddoc-div">
               <h1>DOCUMENTATION</h1>
               <button onClick={this.newdoc}>NEW DOCUMENTATION</button>  
               <table style={{marginTop:120+"px"}} className="order-table" >
                <thead>
                <tr>
                    <th>Document ID</th>
                    <th>Document Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.doc.map((result=> <tr key={result.did}>
                        <td>{result.did}</td>
                        <td>{result.dname}</td>
                        <td><button  className="button-black">Edit</button></td>
                    </tr>
                    
                        ))}
                </tbody>
                    </table>
              </div>
        )
     }
}

export default withRouter(AddocPage)
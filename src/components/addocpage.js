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
        this.gotoeditdoc = this.gotoeditdoc.bind(this);
        this.deletedoc = this.deletedoc.bind(this);
    }
    newdoc()
    {
        this.props.history.push("/newdoc");
    }
    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getdocdetails.php").then(res=>{
            this.setState({doc:res.data});
        })
    }

    gotoeditdoc(did)
    {
         this.props.history.push({
            pathname : "/editdoc",
            state:{did : did}
         })
    }

    deletedoc(did)
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/deldoc.php",{params:{did :did}}).then(res=>{
            this.setState({doc:res.data})
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
                        <td>
                            <button className="button-red" onClick={this.deletedoc.bind(this,result.did)} style={{marginLeft:20+"px"}}><img src="images\svg\delete.svg"/></button>
                            <button onClick={this.gotoeditdoc.bind(this,result.did)}  className="button-black"><img src="images\svg\edit.svg"/></button>
                        </td>
                    </tr>
                    
                        ))}
                </tbody>
                    </table>
              </div>
        )
     }
}

export default withRouter(AddocPage)
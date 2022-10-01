import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Editdoc extends Component
{

    constructor(props)
    {
        super(props)
         this.state={
            dname:'',
            ddiff:'',
            doctime:'',
            dintro:'',
            steps:[]
         }

         this.updatedoc = this.updatedoc.bind(this);
         this.gotoeditstep = this.gotoeditstep.bind(this);
    }
    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getdocdetails.php",{params:{did:this.props.location.state.did}}).then(res=>{
            console.log(res.data['dname']);
            this.setState({dname:res.data['dname']});
            this.setState({ddiff:res.data['ddiff']});
            this.setState({doctime:res.data['dtime']});
            this.setState({dintro:res.data['intro']});
        })
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getstep.php",{params:{did:this.props.location.state.did}}).then(res=>{
            this.setState({steps:res.data});
        })
    }

    updatedoc(e)
    {
        e.preventDefault();
        const fd = new FormData();
       fd.append("did",this.props.location.state.did)
       fd.append("dname",e.target.dname.value)
       fd.append("ddiff",e.target.diff.value)
       fd.append("dtime",e.target.dtime.value)
       fd.append("dintro",e.target.intro.value)
       axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/updatedoc.php",fd).then(res=>{
        if(res.data===0)
        {
            alert("Document Updated sucessfully");
        }

       })
    }

    gotoeditstep(stid)
    {
        let docdata ={did:this.props.location.state.did,stid:stid}
        this.props.history.push(
            {
                pathname :"/editstep",
                state : {doc:docdata}
            }
        )
    }
    render()
    {
        return(
            <div className="newdoc-div">
            <h1>EDIT <span>DOCUMENTATION</span></h1>
            <form onSubmit={this.updatedoc} >
                <div className="init-details">

                    <div className="docname">
                    <h6>Documentation Name</h6>
                    <input type='text' pattern="[a-z A-Z 0-9]*" className="textbox" name="dname" placeholder="Enter Document Name" defaultValue={this.state.dname} required ></input>
                    </div>

                    <div className="docdiff">
                    <h6>Documentation Difficulty</h6>
                    <select name="diff" className="textbox" defaultValue={this.state.ddiff}>
                     <option value="easy">easy</option>
                     <option value="moderate">moderate</option>
                     <option value="difficult">difficult</option>
                    </select>
                    </div>

                    <div className="doctime">
                    <h6>Documentation Time</h6>
                    <input type='number' name="dtime"  className="textbox" placeholder="Time In Hours" defaultValue={this.state.doctime} required></input>
                    </div>    
                </div>
                <div className="intro">
                <h6>Introduction</h6>
                <textarea rows={10} name="intro" className="textbox" placeholder="Introduction" defaultValue={this.state.dintro} required></textarea>
                </div>
                <button>UPDATE</button>
            </form>
             <h2>EDIT <span>STEPS</span></h2>
            <table style={{marginTop:30+"px",marginBottom:50+"px"}} className="order-table" >
                <thead>
                <tr>
                    <th style={{textAlign:"start"}}>Step title</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.steps.map((result=> <tr key={result.stid}>
                        <td style={{textAlign:"start"}}>{result.stitle}</td>
                        <td style={{textAlign:"end"}}><button onClick={this.gotoeditstep.bind(this,result.stid)}   className="button-black"><img src="images\svg\edit.svg"/></button>
                        </td>
                    </tr>
                    
                        ))}
                </tbody>
                    </table>
            </div>
        )
    }
}
export default withRouter(Editdoc);
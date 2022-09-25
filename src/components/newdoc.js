import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/newdoc.css";
import Steps from "./steps";
import axios from "axios";
class NewDoc extends Component
{
     constructor(props)
     {
        super(props)
        this.state={
            docid:'-1',
            shownext : false,
            valid:true,
            stepcount :1
        }
        this.getdocinfo = this.getdocinfo.bind(this);
        this.getdocid = this.getdocid.bind(this);
        this.addnewstep = this.addnewstep.bind(this);
        this.adddoc = this.adddoc.bind(this);
        this.goadmin = this.goadmin.bind(this);
     }

     getdocinfo(e)
     {
       e.preventDefault();
       this.adddoc(e);
       this.setState({shownext:true});

     }

     getdocid()
     {
      return this.state.docid;
     }

     addnewstep()
     {
        this.setState({stepcount: this.state.stepcount+1});
     }

     adddoc(e)
     {
       const fd = new FormData();
       fd.append("dname",e.target.dname.value)
       fd.append("ddiff",e.target.diff.value)
       fd.append("dtime",e.target.dtime.value)
       axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adddoc.php",fd).then(res=>{
         
         if(res.data===-2)
         {
           alert("Please login and try again");
         }
         else if(res.data===-1)
         {
           this.setState({valid:false});
            alert("Same Document already Exists");
          
         } 
         else
         {
          this.setState({valid:true});
           this.state.docid = res.data;
         }
       
       })
     }

     goadmin()
     {
       this.props.history.push("/admin")
     }

    render()
    {

        return(
              <div className="newdoc-div">
                <h1>NEW <span>DOCUMENTATION</span></h1>
                <form onSubmit={this.getdocinfo} >
                    <div className="init-details">

                        <div className="docname">
                        <h6>Documentation Name</h6>
                        <input type='text' pattern="[a-z A-Z]*" className="textbox" name="dname" placeholder="Enter Document Name" required ></input>
                        </div>

                        <div className="docdiff">
                        <h6>Documentation Difficulty</h6>
                        <select name="diff" className="textbox">
                         <option value="easy">easy</option>
                         <option value="moderate">moderate</option>
                         <option value="difficult">difficult</option>
                        </select>
                        </div>

                        <div className="doctime">
                        <h6>Documentation Time</h6>
                        <input type='number' name="dtime"  className="textbox" placeholder="Time In Hours" required></input>
                        </div>    
                    </div>
                    <button>NEXT</button>
                </form>
                {
                  this.state.shownext && this.state.valid &&  
                        <div className="step-outterdiv">
                         <h2>ADD STEPS</h2>
                         <Steps stepcount={this.state.stepcount} addnewstep={this.addnewstep} getdocid={this.getdocid}/>
                         <button className="button" onClick={this.goadmin}>DONE</button>
                        </div>
                }

              </div>
        )
    }
}
export default withRouter(NewDoc);
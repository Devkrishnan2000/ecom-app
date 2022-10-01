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
            dtime :1,
            shownext : false,
            valid:true,
            stepcount :1,
            electronics:[],
            elecprouct:[],
            prodempty:false
        }
        this.getdocinfo = this.getdocinfo.bind(this);
        this.getdocid = this.getdocid.bind(this);
        this.addnewstep = this.addnewstep.bind(this);
        this.adddoc = this.adddoc.bind(this);
        this.goadmin = this.goadmin.bind(this);
        this.getprod = this.getprod.bind(this);
        this.onchangetime = this.onchangetime.bind(this);
     }

     componentDidMount()
     {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getelectronics.php").then(res=>{
          console.log(res.data);
          this.setState({electronics:res.data})
        })
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

     onchangetime(e)
     {
      if(e.target.value!=='0')
      this.setState({dtime:e.target.value});
     }

     adddoc(e)
     {
       const fd = new FormData();
       fd.append("dname",e.target.dname.value)
       fd.append("ddiff",e.target.diff.value)
       fd.append("dtime",e.target.dtime.value)
       fd.append("dintro",e.target.intro.value)
       fd.append("elecname",e.target.elecname.value)
       fd.append("elecprod",e.target.elecprod.value)
       axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adddoc.php",fd).then(res=>{
      console.log(res.data);
         
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

     getprod(e)
     {
       console.log(e.target.value);
       axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getelecprod.php",{params:{eid:e.target.value}}).then(
        res=>{
          if(res.data!='')
          {
            this.setState({elecprouct:res.data})
            this.setState({prodempty:false})
            console.log(res.data);
          }
          else
          {
            this.setState({prodempty:true})
          }
          
        }
       )
       
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
                        <input type='text' pattern="[a-z A-Z 0-9]*" className="textbox" name="dname" placeholder="Enter Document Name" required ></input>
                        </div>

                        <div className="docdiff">
                        <h6>Documentation Difficulty</h6>
                        <select name="diff" className="textbox" required>
                         <option value="easy">easy</option>
                         <option value="moderate">moderate</option>
                         <option value="difficult">difficult</option>
                        </select>
                        </div>

                        <div className="doctime">
                        <h6>Documentation Time</h6>
                        <input type='number' name="dtime"  className="textbox" value={this.state.dtime} onChange={this.onchangetime} placeholder="Time In Hours" required></input>
                        </div>    
                    </div>
                    <div className="init-details" style={{justifyContent:"start",marginTop:20+"px"}}>
                  <div className="docname">
                        <h6>Electronic name</h6>
                        <select name="elecname" className="textbox" onChange={this.getprod}>
                         {
                          this.state.electronics.map((res=> <option key={res.eid} value={res.eid}>{res.ename}</option>))
                         }
                        </select>
                       
                        </div>

                        <div className="docdiff"style={{marginLeft:220+"px"}} >
                        <h6>Electronic product</h6>
                        <select name="elecprod" className="textbox" required>
                        {!this.state.prodempty &&
                          this.state.elecprouct.map((res=> <option key={res.pid} value={res.pid}>{res.pname}</option> ))
                        }
                        </select>
                        </div>
                  </div>
                    <div className="intro">
                    <h6>Introduction</h6>
                    <textarea rows={10} name="intro" className="textbox" placeholder="Introduction" required></textarea>
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
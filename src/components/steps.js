import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/step.css";

 class Steps extends Component
{
   
     constructor(props)
     {
        super(props)

        this.state={
         file:'',
         isedit:false,
         stitle:'',
         sdesc:'',
        }
        this.addstep = this.addstep.bind(this);
        
        this.onChangefile = this.onChangefile.bind(this);
        this.form = React.createRef();

     }
      componentDidMount()
      {
         if(typeof this.props.location.state === "undefined")
         this.setState({isedit:false})
         else
         {
            this.setState({isedit:true})
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getstep.php",{params:{did:this.props.location.state.doc['did'],stid:this.props.location.state.doc['stid']}}).then(res=>{
              this.setState({stitle:res.data['stitle']})
              this.setState({sdesc:res.data['stdesc']})
            })
         }
        
      }

     addstep(e)
     {
        e.preventDefault();
        const fs = new FormData();
      
        fs.append("stitle",e.target.stitle.value)
        fs.append("stdesc",e.target.sdesc.value)
        fs.append("stimg",this.state.file)
        if(this.state.isedit===true)
        {
         fs.append("did",this.props.location.state.doc['did'])
         fs.append("stid",this.props.location.state.doc['stid'])
         axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/updatestep.php",fs).then(res=>
         {
          console.log(res.data);
          alert("Updated sucessfully");
          this.props.history.push("/admin");
         }
         ) 
        }
        else
        {
         fs.append("did",this.props.getdocid());
         fs.append("stid",this.props.stepcount)
         this.props.addnewstep();
         this.form.current.reset();
         axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/addstep.php",fs).then(res=>
         {
          console.log(res.data);
         }
         ) 
        }
               
     }
     
     onChangefile(e)
     {
      this.setState({file:e.target.files[0]})
     }

    render()
    {
         
        return(
            <div className="step-div">
               {this.state.isedit &&
                 <h5>STEP {this.props.location.state.doc['stid']}</h5>
               }
               {!this.state.isedit &&
                   <h5>STEP {this.props.stepcount}</h5>
               }
            
             <form ref={this.form}  onSubmit={this.addstep}>
                <h6>Step title</h6>
                <input type='text' className="textbox" name="stitle"  placeholder="Title" style={{width: 80+"vw"}} defaultValue={this.state.stitle} required></input>
                <h6>Step description</h6>
                <textarea className="textbox" name="sdesc"style={{width: 80+"vw"}} rows={5} defaultValue={this.state.sdesc} ></textarea>
                <h6>Step Image</h6>
                { !this.state.isedit &&
                   <input type="file" name="simage" accept=".jpg,.jpeg,.png" onChange={this.onChangefile} required ></input>
                }
                  { this.state.isedit &&
                   <input type="file" name="simage" accept=".jpg,.jpeg,.png" onChange={this.onChangefile}  ></input>
                }
               
               
                <button className="button-black">
                  {
                  !this.state.isedit &&
                  <p>SAVE & NEXT STEP</p>
                  }
                  {
                  this.state.isedit &&
                  <p>UPDATE</p>
                  }
                </button>
             </form>
            </div>
        )
    }
}
export default withRouter(Steps)
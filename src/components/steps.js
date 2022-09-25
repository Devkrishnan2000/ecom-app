import axios from "axios";
import React, { Component } from "react";
import "./css/step.css";

export default class Steps extends Component
{
   
     constructor(props)
     {
        super(props)

        this.state={
         file:''
        }
        this.addstep = this.addstep.bind(this);
        
        this.onChangefile = this.onChangefile.bind(this);
        this.x = this.x.bind(this);
        this.form = React.createRef();

     }
    
      async x(fs)
       {
         
       }
     addstep(e)
     {
        e.preventDefault();
        const fs = new FormData();
        fs.append("did",this.props.getdocid());
        fs.append("stid",this.props.stepcount)
        fs.append("stitle",e.target.stitle.value)
        fs.append("stdesc",e.target.sdesc.value)
        fs.append("stimg",this.state.file)
        this.props.addnewstep();
        this.form.current.reset();
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/addstep.php",fs).then(res=>
        {
         console.log(res.data);
        }
        )
        
          
     }
     
     onChangefile(e)
     {
      this.setState({file:e.target.files[0]})
     }

    render()
    {
         
        return(
            <div className="step-div">
             <h5>STEP {this.props.stepcount}</h5>
             <form ref={this.form}  onSubmit={this.addstep}>
                <h6>Step title</h6>
                <input type='text' className="textbox" name="stitle"  placeholder="Title" style={{width: 80+"vw"}} required></input>
                <h6>Step description</h6>
                <textarea className="textbox" name="sdesc"style={{width: 80+"vw"}} rows={5} ></textarea>
                <h6>Step Image</h6>
                <input type="file" name="simage" accept=".jpg,.jpeg,.png" onChange={this.onChangefile} required ></input>
                <button className="button-black"> SAVE & NEXT STEP</button>
             </form>
            </div>
        )
    }
}
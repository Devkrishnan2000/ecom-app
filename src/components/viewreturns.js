import axios from "axios";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class ViewReturns extends Component
{
    static gdesc = ""
    static gimg=""
    static goid=""
    constructor(props)
    {
        super(props)
        this.state={
            retinfo:[],
            visible:false,
            listempty:false,
        }
      

        this.showmore = this.showmore.bind(this);
        this.showless = this.showless.bind(this);
        this.acceptclaim = this.acceptclaim.bind(this);
        this.rejectclaim = this.rejectclaim.bind(this);
    }
    componentDidMount()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getreturn.php").then(res=>{
            console.log(res.data);
            if(res.data!=-1)
            {
                this.setState({retinfo:res.data});
                this.setState({listempty:false});
            }
            else
            this.setState({listempty:true});
        })
    }

    showmore(img,desc,oid)
    {
      console.log(img+","+desc+","+oid)
      this.gdesc = desc;
      this.gimg = img;
      this.goid = oid;
      this.setState({visible:true});
    }

    showless()
    {
        this.setState({visible:false});
    }

    acceptclaim()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/addreturn.php",{params:{oid:this.goid,response:true}})
        this.setState({visible:false});
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getreturn.php").then(res=>{
            console.log(res.data);
            if(res.data!=-1)
            {
                this.setState({retinfo:res.data});
                this.setState({listempty:false});
            }
            else
            this.setState({listempty:true});
        })
    }
    rejectclaim()
    {
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/addreturn.php",{params:{oid:this.goid,response:false}})
        this.setState({visible:false});
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getreturn.php").then(res=>{
            console.log(res.data);
            if(res.data!=-1)
            {
                this.setState({retinfo:res.data});
                this.setState({listempty:false});
            }
            else
            this.setState({listempty:true});
        })
    }
    render()
    {
        return(
            <div className="adddoc-div">
            <h1>RETURN <span>Management</span></h1>
            {!this.state.listempty &&
              <table style={{marginTop:50+"px"}} className="order-table" >
              <thead>
              <tr>
                  <th>Order ID</th>
                  <th>Product Name</th>
                  <th>Return Reason</th>
              </tr>
              </thead>
              <tbody>
              
                  {this.state.retinfo.map((result=> <tr key={result.oid}>
                      <td>{result.oid}</td>
                      <td>{result.pname}</td>
                      <td>{result.pdinfo}</td>
                      <td>
                          <button onClick={this.showmore.bind(this,result.dpimg,result.rdesc,result.oid)}  className="button-black">VIEW MORE INFO</button>
                      </td>
                  </tr>
                  
                      ))
                  }
                  
              </tbody>
                  </table>
            }
            {this.state.listempty &&
                <h2 style={{textAlign:"center",marginTop:20+"px"}}>NO PENDING RETURNS</h2>
            }
            
                 {this.state.visible &&
                 <div className="modal">
                 <div className="overlay"></div>
                 <div className="modal-content">
                   <h2 style={{marginTop:30+"px",marginBottom:20+"px",textAlign:"center"}}>MORE INFORMATION</h2>
                   <h4 style={{marginBottom:10+"px"}}>Product Image</h4>
                   <img src={this.gimg} height={300+"px"} width={400+"px"}  alt="Image Not Found"></img>
                   <h4 style={{marginBottom:10+"px",marginTop:10+"px"}}>Damage Description</h4>
                   <p>{this.gdesc}</p>
                   <button onClick={this.rejectclaim} className="button-black">REJECT CLAIM</button>
                   <button onClick={this.acceptclaim} style={{marginRight:10+"px"}}>ACCEPT CLAIM</button>
                   <button className="close-modal" onClick={this.showless}>CLOSE</button>
                 </div>
                 </div>
             }
           </div>
        )
    }
}
export default withRouter(ViewReturns);
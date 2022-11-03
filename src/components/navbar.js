import React from "react";
import { Component } from "react";
import "./css/navcss.css";
import cart from "./images/navbar/cart.svg";
import search from "./images/navbar/search.svg";
import { Link,withRouter  } from "react-router-dom";
import login from "./login";
import DropDown from "./dropdown";
import axios from "axios";

 class Navbar extends Component {
     
          constructor(props)
          {
            super(props);
            this.state={
              visible:0,
              searchterm:"",
              searchres:[],
              searchvisible:false,
              usrname:"LOGIN",
            }
            this.setvisible = this.setvisible.bind(this);
            this.setinvisible = this.setinvisible.bind(this);
            this.dispdropdown =this.dispdropdown.bind(this);
            this.setlogout =this.setlogout.bind(this);
            this.onchange = this.onchange.bind(this);
            this.clear = this.clear.bind(this);
          }


         componentDidMount()
         {
          console.log('navbar called');
          if(this.props.islogin==1)
          {
            this.setState({usrname:this.props.username});
          }

         
         }

          setlogout()
          {
            axios.get('http://localhost:80/sem8project/ecom-app/ecom-app/api/logout.php').then(res=>{
              console.log("logged out");
              this.setState({usrname:"LOGIN"});

            })
           
            this.props.setlogoutval();
            this.props.history.push("/");
          }

          onchange(e)
          {
            this.setState({searchterm:e.target.value})
            axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/search.php",{params:{search:e.target.value}}).then(res=>{
              console.log(res.data);
              if(res.data!="")
              {
                this.setState({searchvisible:true})
                this.setState({searchres:res.data});
              }
              else
              {
                this.setState({searchvisible:false})
              }
              
            })
          }
          clear()
          {
            this.setState({searchvisible:false})
            this.setState({searchterm:""})
          }

    
      componentDidUpdate()
      {
       
      }

          setvisible()
          {
            this.state.visible=1;
            this.forceUpdate();
          }
          setinvisible()
          {
            this.state.visible=0;
            this.forceUpdate();
          }

          dispdropdown()
          {
           if(this.state.visible==1&&this.state.usrname!="LOGIN")
           {
            return(
                 <DropDown logout={this.setlogout}/>
            )
           }
          }
          
      
         
          

  render() {
    return (
      <div onMouseLeave={this.setinvisible}>
        <ul className="nav-list">
        <li>
            <a className='brand' href="/">{this.props.brand}</a>
          </li>
            <li>
            <Link to={{pathname:'/parts',state:false}}>{this.props.option1}</Link>
            </li>
            <li>
              <Link to={{pathname:'/tools',state:true}}>{this.props.option3}</Link>
            </li>
            <li>
              <div className="search-box">
               <img  src={search}></img> 
               <input  type='text'placeholder="Search for parts" onChange={this.onchange} value={this.state.searchterm} className="nav-textbox"></input>
              </div>
            </li>
            <li className='align-right'>
              <Link to="/login"style={{marginRight:20+"px"}} onMouseEnter={this.setvisible}>{this.state.usrname}</Link>
            </li>
            
          
          
          
     
        </ul>
        {this.dispdropdown()}
        <ul className="search-list">  
        {this.state.searchvisible &&
        this.state.searchres.map((result)=> <li  key={result.pname}><Link onClick={this.clear}  style={{textDecoration:"none"}} to={{pathname:'/productPage', state:{id:result.pid}}}>{result.pname}</Link></li>)}     
        </ul>
      </div>
    );
  }
}
export default withRouter(Navbar);

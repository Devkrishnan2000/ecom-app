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
              usrname:"LOGIN",
            }
            this.setvisible = this.setvisible.bind(this);
            this.setinvisible = this.setinvisible.bind(this);
            this.dispdropdown =this.dispdropdown.bind(this);
            this.setlogout =this.setlogout.bind(this);
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
              <a href="#">{this.props.option1}</a>
            </li>
            <li>
              <Link to="/tools">{this.props.option3}</Link>
            </li>
            <li>
              <div className="search-box">
               <img  src={search}></img>
               <input type='text'placeholder="Search for parts" className="nav-textbox"></input>
              </div>
            </li>
            <li className='align-right'>
              <Link to="/login"style={{marginRight:20+"px"}} onMouseEnter={this.setvisible}>{this.state.usrname}</Link>
            </li>
            
          
          
          
          
          
        </ul>
        {this.dispdropdown()}
      </div>
    );
  }
}
export default withRouter(Navbar);

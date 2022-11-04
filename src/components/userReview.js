import React, { Component } from "react";
import Review from "./review";
import axios from "axios";

export default class UserReview extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            review:[],
            isreview:false
        }
        this.load_reviews = this.load_reviews.bind(this);
    }
    componentDidMount()
    {
        console.log(this.props.pid);
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/showreview.php",{params:{pid:this.props.pid}}).then(res=>{
            if(res.data!==-1)
            {   this.setState({isreview:true});
                this.setState({review:res.data});
            }
            else if(res.data===-1)
            {
                this.setState({isreview:false});
            }
            
        })
    }

    load_reviews()
    {
      if(this.state.isreview===true)
      {
          return(
            this.state.review.map((result)=><Review key={result.cid}  usrname={result.cname} rating={result.rrating} title={result.rtitle} content={result.rdesc}/>)
          )
         
      }
      else
       return(
         <h5 style={{marginTop:20+"px",marginBottom:30+"px"}}>No Reviews</h5>
       )
    }
    render()
    {
        return(
            <div style={{marginTop:50+"px", marginLeft:20+"px" ,marginRight:20+"px"}}>
                <h2>USER REVIEWS</h2>
                {this.load_reviews()}
            
              
            </div>
        )
    }
}
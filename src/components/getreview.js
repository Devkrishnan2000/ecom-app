import axios from "axios";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/getreview.css";
import Score from "./score";
import SetRating from "./setrating";

class GetReview extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            rating:0,
            score:0,
            ispart:false
        }
        this.setrscore = this.setrscore.bind(this);
        this.setrat = this.setrat.bind(this);
        this.subreview = this.subreview.bind(this);
    }

    setrscore(score)
    {
        this.setState({score:score});
    }
    setrat(rating)
    {
      this.setState({rating:rating});
    }

    subreview(e)
    {
        e.preventDefault();
        if(this.state.rating!=0)
        {
            if(this.state.ispart==true && this.state.score=="0")
            {
                alert("Please provide a valid score");
            }
            else
            {
                const fd = new FormData();
                console.log(this.props.location.state.pid);
                fd.append("pid",this.props.location.state.pid);
                fd.append("title",e.target.title.value);
                fd.append("content",e.target.content.value);
                fd.append("rating",this.state.rating);
                fd.append("score",this.state.score);
                axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/addreview.php",fd).then(
                    res=>{
                        if(res.data==0)
                        {
                            this.props.history.push('/orders');
                        }
                        else if(res.data==-1)
                        {
                            alert("please login and try again");
                        }
                    }
                )
            }
           
        }
        else
        {
            alert("Please Provide valid rating")
        }
       
        
    }

    componentDidMount()
    {
        if(this.props.location.state.ptype==="part")
        this.setState({ispart:true})
        else
        this.setState({ispart:false})
    }
    render()
    {
        return(
            <div className="getreview-page">
             <h1>ADD <span>REVIEW</span></h1>
             <h2>Review For : {this.props.location.state.pname}</h2>
             <form onSubmit={this.subreview}>
                <h5>Title</h5>
                <input type='text' className="textbox" name='title' placeholder="Max 70 characters" required ></input>
                <h5>Content</h5>
                <textarea className="textbox" name="content" placeholder="Enter your Review"  rows={10} required></textarea>
                <h5>Rating</h5>
                <SetRating setrat={this.setrat}/>
                
               
                {this.state.ispart &&
                  <div>
                  <h5>Repairability Score</h5>
                  <p>A score which determines how easy or difficult the repair was it ranges from 1-10 where 1 stands for most difficult repair and 10 stands for easiest repair</p>
                  <Score setscore={this.setrscore}/>
                  </div>
                }
                
                <button style={{marginTop:50+"px",marginBottom:50+"px",marginLeft:20+"px"}}>SUBMIT</button>
             </form>
            </div>
        )
    }
}

export default withRouter(GetReview);
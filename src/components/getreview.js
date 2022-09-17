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
            score:0
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
        console.log(this.state.rating);
        console.log(this.state.score);
    }
    render()
    {
        return(
            <div className="getreview-page">
             <h1>ADD <span>REVIEW</span></h1>
             <h2>Review For : Morary Driver Kit</h2>
             <form onSubmit={this.subreview}>
                <h5>Title</h5>
                <input type='text' className="textbox" name='title' placeholder="Max 70 characters" ></input>
                <h5>Content</h5>
                <textarea className="textbox" name="content" placeholder="Enter your Review"  rows={10}></textarea>
                <h5>Rating</h5>
                <SetRating setrat={this.setrat}/>
                <h5>Repairability Score</h5>
                <p>A score which determines how easy or difficult the repair was it ranges from 1-10 where 1 stands for most difficult repair and 10 stands for easiest repair</p>
                <Score setscore={this.setrscore}/>
                <button style={{marginTop:50+"px",marginBottom:50+"px",marginLeft:20+"px"}}>SUBMIT</button>
             </form>
            </div>
        )
    }
}

export default withRouter(GetReview);
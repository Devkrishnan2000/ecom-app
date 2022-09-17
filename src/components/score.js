import React, { Component } from "react";
import "./css/score.css";

export default class Score extends Component
{
    constructor(props)
    {
        super(props);
        this.s1 = React.createRef();
        this.s2 = React.createRef();
        this.s3 = React.createRef();
        this.s4 = React.createRef();
        this.s5 = React.createRef();
        this.s6 = React.createRef();
        this.s7 = React.createRef();
        this.s8 = React.createRef();
        this.s9 = React.createRef();
        this.s10 = React.createRef();

      
    this.selecscore = this.selecscore.bind(this);
    this.setdef = this.setdef.bind(this);
    }

    selecscore(e)
    {
       e.preventDefault();
       
       switch(e.target.id)
       {
         case "s1": this.setdef();
         this.props.setscore(1);
         this.s1.current.className="";
         break;
         case "s2":this.setdef();
         this.props.setscore(2);
             this.s2.current.className="";
         break;
         case "s3": this.setdef();
         this.props.setscore(3);
         this.s3.current.className="";
         break;
         case "s4":this.setdef();
         this.props.setscore(4);
             this.s4.current.className="";
         break;
         case "s5":this.setdef();
         this.props.setscore(5);
             this.s5.current.className="";
         break;
         case "s6":this.setdef();
         this.props.setscore(6);
             this.s6.current.className="";
         break;
         case "s7":this.setdef();
         this.props.setscore(7);
         this.s7.current.className="";
         break;
         case "s8":this.setdef(); 
         this.props.setscore(8);
         this.s8.current.className="";
         break;
         case "s9": this.setdef();
         this.props.setscore(9);
         this.s9.current.className="";
         break;
         case "s10":this.setdef();
         this.props.setscore(10); 
         this.s10.current.className="";
         break;
       }
       
    }
    setdef()
    {
        this.s1.current.className="button-black";
        this.s2.current.className="button-black";
        this.s3.current.className="button-black";
        this.s4.current.className="button-black";
        this.s5.current.className="button-black";
        this.s6.current.className="button-black";
        this.s7.current.className="button-black";
        this.s8.current.className="button-black";
        this.s9.current.className="button-black";
        this.s10.current.className="button-black";
    }
    render()
    {
        return(
            <div className="score-div">
             <button id="s1" ref={this.s1} className="button-black" onClick={this.selecscore}>1</button>
             <button id="s2" ref={this.s2}  className="button-black" onClick={this.selecscore}>2</button>
             <button id="s3" ref={this.s3}   className="button-black" onClick={this.selecscore}>3</button>
             <button id="s4" ref={this.s4}  className="button-black" onClick={this.selecscore}>4</button>
             <button id="s5" ref={this.s5}  className="button-black" onClick={this.selecscore}>5</button>
             <button id ="s6" ref={this.s6}  className="button-black" onClick={this.selecscore}>6</button>
             <button id ="s7" ref={this.s7}  className="button-black" onClick={this.selecscore}>7</button>
             <button id ="s8"ref={this.s8}  className="button-black" onClick={this.selecscore}>8</button>
             <button id ="s9"ref={this.s9}  className="button-black" onClick={this.selecscore}>9</button>
             <button id ="s10"ref={this.s10}  className="button-black" onClick={this.selecscore}>10</button>
            </div>
        )
    }


}
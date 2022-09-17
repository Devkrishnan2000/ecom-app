import React, { Component } from "react";
import "./css/setrating.css";
export default class SetRating extends Component {
  constructor(props) {
    super(props);
    this.star1 = React.createRef();
    this.star2 = React.createRef();
    this.star3 = React.createRef();
    this.star4 = React.createRef();
    this.star5 = React.createRef();

    this.state = {
      curate: 0,
    };
    this.onhover = this.onhover.bind(this);
    this.offhover = this.offhover.bind(this);
    this.setrating = this.setrating.bind(this);
  }

  onhover(e) {
    switch (e.target.id) {
      case "star5":
        this.star5.current.src = "images/star/singlestar1.svg";
      case "star4":
        this.star4.current.src = "images/star/singlestar1.svg";
      case "star3":
        this.star3.current.src = "images/star/singlestar1.svg";
      case "star2":
        this.star2.current.src = "images/star/singlestar1.svg";
      case "star1":
        this.star1.current.src = "images/star/singlestar1.svg";
    }
  }
  offhover() {
    switch (this.state.curate) {
      case 0:
        this.star1.current.src = "images/star/singlestar0.svg";
        this.star2.current.src = "images/star/singlestar0.svg";
        this.star3.current.src = "images/star/singlestar0.svg";
        this.star4.current.src = "images/star/singlestar0.svg";
        this.star5.current.src = "images/star/singlestar0.svg";
        break;
      case 1:
        this.star2.current.src = "images/star/singlestar0.svg";
        this.star3.current.src = "images/star/singlestar0.svg";
        this.star4.current.src = "images/star/singlestar0.svg";
        this.star5.current.src = "images/star/singlestar0.svg";
        break;
      case 2:
        this.star3.current.src = "images/star/singlestar0.svg";
        this.star4.current.src = "images/star/singlestar0.svg";
        this.star5.current.src = "images/star/singlestar0.svg";
        break;
      case 3:
        this.star4.current.src = "images/star/singlestar0.svg";
        this.star5.current.src = "images/star/singlestar0.svg";
        break;
      case 4:
        this.star5.current.src = "images/star/singlestar0.svg";
        break;
      case 5:
        this.star1.current.src = "images/star/singlestar1.svg";
        this.star2.current.src = "images/star/singlestar1.svg";
        this.star3.current.src = "images/star/singlestar1.svg";
        this.star4.current.src = "images/star/singlestar1.svg";
        this.star5.current.src = "images/star/singlestar1.svg";
    }
  }

  setrating(e) {
    
    switch(e.target.id)
    {
        case "star5":
            this.props.setrat(5);
            this.setState({curate:5});
            
            break;
          case "star4":
            this.props.setrat(4);
            this.setState({curate:4});
            break;
          case "star3":
            this.props.setrat(3);
            this.setState({curate:3});
            break;
          case "star2":
            this.props.setrat(2);
            this.setState({curate:2});
            break;
          case "star1":
            this.props.setrat(1);
            this.setState({curate:1});
            break;
           
    }
    
    
  }
  render() {
    return (
      <div className="rating-div">
        <img
          id="star1"
          ref={this.star1}
          onMouseEnter={this.onhover}
          onMouseLeave={this.offhover}
          onClick={this.setrating}
          src="images\star\singlestar0.svg"
        ></img>
        <img
          id="star2"
          ref={this.star2}
          onMouseEnter={this.onhover}
          onMouseLeave={this.offhover}
          onClick={this.setrating}
          src="images\star\singlestar0.svg"
        ></img>
        <img
          id="star3"
          ref={this.star3}
          onMouseEnter={this.onhover}
          onMouseLeave={this.offhover}
          onClick={this.setrating}
          src="images\star\singlestar0.svg"
        ></img>
        <img
          id="star4"
          ref={this.star4}
          onMouseEnter={this.onhover}
          onMouseLeave={this.offhover}
          onClick={this.setrating}
          src="images\star\singlestar0.svg"
        ></img>
        <img
          id="star5"
          ref={this.star5}
          onMouseEnter={this.onhover}
          onMouseLeave={this.offhover}
          onClick={this.setrating}
          src="images\star\singlestar0.svg"
        ></img>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./css/category.css";

export default class Category extends Component
{
      constructor(props)
      {
        super(props);
        this.callcategory = this.callcategory.bind(this);
      }

      callcategory(e)
      {
          this.props.setcategory(this.props.parttype);
      }
    render()
    {
        return(
            <h6 onClick={this.callcategory}  className="category-div">{this.props.parttype}</h6>
        )
    }
}
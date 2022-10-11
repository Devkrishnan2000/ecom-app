import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export default class CurProd extends Component
  {
    constructor(props)
    {
        super(props);
    }
  render() {
    return (
        <div style={{width:85+"vw",marginTop:20+"px",marginBottom:20+"px"}}>
            <Line
            height={300}
            width={50}
            options={{maintainAspectRatio:false}}
             data={{
                labels :this.props.label,
                datasets: [
                    {
                      label: this.props.type,
                      data: this.props.data,
                      borderColor: '#00ADB5',
                      backgroundColor: '#00ADB5',
                    }
                  ],
             }}
              >

            </Line>
        </div>
     
    );
  }
  }
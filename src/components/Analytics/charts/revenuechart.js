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

export default class RevenueChart extends Component {

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
                labels :['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','Decemeber'],
                datasets: [
                    {
                      label: this.props.type,
                      data: this.props.revenuedat.map((res=>res.sum)),
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

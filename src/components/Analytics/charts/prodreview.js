import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default class ProdReview extends Component
{
    render()
    {
        return(
            <div style={{width:85+"vw",marginTop:20+"px",marginBottom:20+"px"}}>
                <Pie
                height={300}
                width={50}
                options={{maintainAspectRatio:false}}
                data={{
                    labels :this.props.label,
                    datasets: [
                        {
                          label: this.props.type,
                          data: this.props.data,
                          borderColor:['#DD5353','#FF731D','#FFDE00','#9CFF2E','#38E54D'] ,
                          backgroundColor: ['#DD5353','#FF731D','#FFDE00','#9CFF2E','#38E54D']
                        }
                      ],
                 }}
                >

                </Pie>
                
            </div>
        )
    }
}
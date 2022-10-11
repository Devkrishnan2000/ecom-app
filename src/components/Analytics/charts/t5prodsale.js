import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default class T5ProdSale extends Component
{
    render()
    {
        return(
            <div>
                <Bar
                 height={300}
                 width={50}
                 data={{labels:this.props.label,
                    datasets: [
                      {
                        label: 'sales',
                        data: this.props.data,
                        backgroundColor: 'rgba(0, 173, 181, 0.5)',
                      }
                    ],}}
                 options={{maintainAspectRatio:false}}
                >

                </Bar>
            </div>
        )
    }
}
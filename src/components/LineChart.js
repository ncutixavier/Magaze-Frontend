import React from 'react';
import { Line } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);

const data = {
  labels: [
    'Shop 1',
    'Shop 2',
    'Shop 3',
    'Shop 4',
    'Shop 5',
    'Shop 6',
    'Shop 7',
    'Shop 8',
    'Shop 9',
    'Shop 10',
  ],
  datasets: [
    {
      label: 'Products',
          data: [12, 19, 3, 5, 2, 3, 21, 91, 31, 53, 22, 38],
      fill: false,
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()}, 0.3)`,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} width={100} height={70} />
  </>
);

export default LineChart;

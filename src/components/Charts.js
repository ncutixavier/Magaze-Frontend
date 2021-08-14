import React from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);

const data = {
  labels: ['Shop 1', 'Shop 2', 'Shop 3', 'Shop 4', 'Shop 5'],
  datasets: [
    {
      label: 'Transaction',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        `rgb(${rand()}, ${rand()}, ${rand()})`,
        `rgb(${rand()}, ${rand()}, ${rand()})`,
        `rgb(${rand()}, ${rand()}, ${rand()})`,
        `rgb(${rand()}, ${rand()}, ${rand()})`,
        `rgb(${rand()}, ${rand()}, ${rand()})`,
        `rgb(${rand()}, ${rand()}, ${rand()})`,
      ],
      borderColor: [],
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

const Charts = () => (
  <>
    <Bar data={data} options={options} width={100} height={70} />
  </>
);

export default Charts;

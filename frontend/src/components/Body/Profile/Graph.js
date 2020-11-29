import React from 'react';
import { Scatter } from 'react-chartjs-2';

//MUI
import { makeStyles } from '@material-ui/core/styles';
// import { Typography } from '@material-ui/core';

// const barData = {
//   labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'cambridge', 'New Bedford'],
//   datasets: [
//     {
//       label: 'Population',
//       data: [
//         12342,
//         23423,
//         123234,
//         423223,
//         333333
//       ],
//       backgroundColor: [
//         'blue',
//         'blue',
//         'blue',
//         'red',
//         'red',
//         'red',
//       ]
//     }
//   ],
// }

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export const ScatterGraph = (props) => {
  const classes = useStyles();

  const incomingData = {
    display: true,
    datasets: [
      {
        label: 'Typing Speed (WPM)',
        backgroundColor: '#2a9d8f',
        pointRadius: 10,
        data: props.speed.map((wpm, index) => {
          return {
            x: index,
            y: wpm,
          }
        })
      }, {
        label: 'Errors',
        backgroundColor: '#e76f51',
        pointRadius: 10,
        data: props.errors.map((error, index) => {
          return {
            x: index,
            y: error,
          }
        })
      }, {
        label: 'Number of keys',
        backgroundColor: '#e9c46a',
        pointRadius: 10,
        data: props.letters.map((letter, index) => {
          return {
            x: index,
            y: letter,
          }
        })
      },
    ]
  }

  return (
    <div className={classes.root}>
      <Scatter
        data={incomingData}
        options={{ maintainAspectRatio: false }, options}
      />
    </div>
  )
}

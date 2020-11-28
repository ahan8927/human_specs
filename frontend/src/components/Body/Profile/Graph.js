import React, { useState } from 'react';
import { Bar, Bubble } from 'react-chartjs-2';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const chartData = {
  labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'cambridge', 'New Bedford'],
  datasets: [
    {
      label: 'Population',
      data: [
        12342,
        23423,
        123234,
        423223,
        333333
      ],
      backgroundColor: [
        'blue',
        'blue',
        'blue',
        'red',
        'red',
        'red',
      ]
    }
  ],
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

export const BarGraph = (props) => {
  // const [data] = useSelector(state => );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h5' >Speed Data</Typography>
        <Typography variant='subtitle2' >This chart shows how overall typing speed changes over time.</Typography>
      </div>
      <div >
        {/* <h3>This chart shows how overall typing speed changes over time.</h3> */}
        <Bar
          data={chartData}
          width={500}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  )
}

// export const ScatterGraph = (props) => {
//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.root}>
//         <Bubble
//           data={chartData}
//           width={500}
//           height={500}
//           options={{ maintainAspectRatio: false }}
//         />
//       </div>
//     </>
//   )
// }

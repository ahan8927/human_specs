import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//Components
import { ScatterGraph } from './Graph';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  statTable: {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '1rem',
    justifyContent: 'center'
  },
  statTable_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '8rem',

    padding: '1rem',
    border: '.05rem solid black',
    borderRadius: '.5rem',
  },
  statTable_label: {
    color: 'black',
  },
  statTable_number: {
    color: 'black',
  },
  chart: {
    width: '100%'
  },
}));

const initialData = {
  frequency: 0,
  speed: [0],
  time: [0],
  score: [0],

}

const TypingStats = (props) => {
  const classes = useStyles();
  const loadedData = useSelector(state => state.stats.user.typing);

  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState(initialData)

  const arrSum = function (arr) {
    const num = arr.reduce(function (a, b) {
      return a + parseFloat(b)
    }, 0);
    return num.toFixed(2)
  }

  const calculateTime = (time) => {
    const hr = Math.trunc(time * (1 / 60))
    const min = Math.trunc(((time * (1 / 60)) - hr) * 60)
    const sec = Math.trunc(((((time * (1 / 60)) - hr) * 60) - min) * 60)
    return `${(hr < 10) ? 0 : ''}${hr}:${(min < 10) ? 0 : ''}${min}:${(sec < 10) ? 0 : ''}${sec}`
  }

  const statTable = [
    {
      label: 'Total Time:',
      number: calculateTime(arrSum(data.time)),
    },
    {
      label: 'Total Samples:',
      number: data.score.length,
    },
    {
      label: 'Top Speed (WPM):',
      number: Math.max(...data.speed),
    },
    {
      label: 'Avg Speed (WPM):',
      number: Math.floor(arrSum(data.speed) / data.speed.length),
    },
    {
      label: 'Top Score',
      number: Math.max(...data.score),
    },
  ]

  useEffect(() => {
    setData(loadedData, setIsLoaded(true))

  }, [loadedData])

  return isLoaded && (
    <div className={classes.root}>
      <div className={classes.statTable}>
        {statTable.map((stat, idx) => (
          <div key={idx} className={classes.statTable_container}>
            <Typography variant='subtitle2' className={classes.statTable_label}>{stat.label}</Typography>
            <Typography variant='subtitle1' className={classes.statTable_number}>{stat.number}</Typography>
          </div>
        ))}
      </div>
      <ScatterGraph {...data} />
    </div>
  )
}

export default TypingStats

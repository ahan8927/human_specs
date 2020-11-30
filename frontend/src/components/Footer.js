import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Typography, Link } from '@material-ui/core';

const Footer = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography color='primary'>
        left
      </Typography>
      <div>
        <ErrorOutlineIcon color='primary' />
        <Typography color='primary'>
          Cloned Application!
        </Typography>
        <Typography color='primary'>
          Inspiration taken from <Link href='https://github.com/Miodec'>Miodec</Link>
        </Typography>
      </div>
    </div>
  )
}

export default Footer

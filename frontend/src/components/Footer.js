import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Typography, Link } from '@material-ui/core';

const Footer = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        left
      </div>
      <div>
        <ErrorOutlineIcon />
        <Typography>
          Cloned Application!
        </Typography>
        <Typography>
          Inspiration taken from <Link href='https://github.com/Miodec'>Miodec</Link>
        </Typography>
      </div>
    </div>
  )
}

export default Footer

// import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#EEE7E4',
      main: '#EEE7E4',
      dark: '#222020',
    },
    secondary: {
      light: '#334455',
      main: '#334455',
      dark: '#888786',
    },
    ternary: {
      light: '#0EDA61',
      main: '#0EDA61',
      dark: '#0EDA61',
    },
    text: {
      primary: {
        light: '#673B1D',
        main: '#673B1D',
        dark: '#9A9998',
      },
      secondary: {
        light: '#000000',
        main: '#000000',
        dark: '#888786',
      },
      disabled: {
        light: '#8A8690',
        main: '#8A8690',
        dark: '#5F5D5D',
      },
      white: {
        light: '#FFFFFF',
        main: '#FFFFFF',
        dark: '#FFFFFF',
      }
    },
    background: {
      light: '#EEE7E4',
      main: '#EEE7E4',
      dark: '#222020',
    },
    keyboard: {
      primary: {
        light: '#EFEFEE',
        main: '#EFEFEE',
        dark: '#363636',
      },
      secondary: {
        light: '#E3E3E1',
        main: '#E3E3E1',
        dark: '#292929',
      },
      background: {
        light: '#DFD9D9',
        main: '#DFD9D9',
        dark: '#494444',
      }
    }
  }
})

export default theme

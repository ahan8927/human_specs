import React, { useContext } from 'react';

import { AuthContext } from '../../context/Context';

import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Help = () => {
  const { setAuthDialog } = useContext(AuthContext);

  return (
    <>
      <DialogTitle id="form-dialog-title">Help</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {/* BONUS: fillout settings */}
          This is the Help Page.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAuthDialog(false)} color="primary">
          Got it!
        </Button>
      </DialogActions>
    </>
  )
}

export default Help;

import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';

const ModalContext = React.createContext();

const useStyles = makeStyles(() => ({
  modal: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  modal_background: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: rgba(0, 0, 0, 0.7),
  },
  modal_content: {
    position: 'absolute',
    backgroundColor: 'white',
  }
}));

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  const classes = useStyles();

  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <div className={classes.modal_background} onClick={onClose} />
      <div className={classes.modal_content}>
        {children}
      </div>
    </div>,
    modalNode
  );
}

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React, { useState, useImperativeHandle } from 'react';

function Message(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('success');
  const [text, setText] = useState('Message');

  useImperativeHandle(props.onRef, () => {
    return { openMsg: handleOpen };
  });

  const handleClose = function () {
    setOpen(false);
  }

  const handleOpen = function (type='success', text='message') {
    setType(type);
    setText(text);
    setOpen(true);
  }

  return(
    <Snackbar
      anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
      open={open}
      autoHideDuration={1000}
      onClose={handleClose}
      key={props.vertical + props.horizontal}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>{text}</Alert>
    </Snackbar>
  );
}

export default Message;
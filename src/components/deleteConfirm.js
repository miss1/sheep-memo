import React, {useImperativeHandle } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';

export default function DeleteConfirm(props) {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(props.onRef, () => {
    return { openDialog: handleClickOpen };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.doDelete();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">删除</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{display: 'flex', alignItems: 'center'}}>
          <InfoIcon sx={{color: '#ef5350'}}/>
          确定删除这条数据吗？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleSubmit} autoFocus>确定</Button>
      </DialogActions>
    </Dialog>
  );
}

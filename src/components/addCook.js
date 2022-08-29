import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useState, useImperativeHandle } from "react";
import Message from '../components/message';
import Loading from "./loading";

export default function AddCookDialog(props) {
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [msg, setMsg] = useState('message');
  const [msgType, setMsgType] = useState('success');
  const [cookName, setCookName] = useState('');
  const [openLoading, setOpenLoading] = useState(false);

  useImperativeHandle(props.onRef, () => {
    return { openDialog: handleClickOpen };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeMsg = () => {
    setOpenMsg(false);
  }

  const handleSubmit = () => {
    handleClose();
    setOpenLoading(true);
    const query = React.$bmob.Query("Cookbook");
    query.set('name',cookName);
    query.set('frequency',0);
    query.save().then(res => {
      toggleMsgBox(true, 'success', 'Add Success');
      props.refreshPage();
      setOpenLoading(false);
    }).catch(err => {
      toggleMsgBox(true, 'error', 'update error');
      setOpenLoading(false);
    })
  };

  const toggleMsgBox = function (open, type, text) {
    setMsg(text);
    setMsgType(type);
    setOpenMsg(open);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>添加新菜</DialogTitle>
        <DialogContent>
          <DialogContentText>
            没有找到你想吃的菜吗？告诉我你想吃啥！
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="name"
            size="small"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setCookName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit}>提交</Button>
        </DialogActions>
      </Dialog>
      <Message vertical="top" horizontal="center" open={openMsg} type={msgType} text={msg} close={closeMsg}/>
      <Loading open={openLoading}/>
    </div>
  );
}

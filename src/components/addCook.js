import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, {useState, useImperativeHandle, useContext } from "react";
import {GlobalContext} from "./globalProvider";

export default function AddCookDialog(props) {
  const [open, setOpen] = useState(false);
  const [cookName, setCookName] = useState('');
  const global = useContext(GlobalContext);

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
    handleClose();
    global.showLoading();
    const query = React.$bmob.Query("Cookbook");
    query.set('name',cookName);
    query.set('frequency',0);
    query.save().then(res => {
      global.showMessage("success", "Add Success");
      props.refreshPage();
      global.hideLoading();
    }).catch(err => {
      global.showMessage("error", err.error)
      global.hideLoading();
    })
  };

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
    </div>
  );
}

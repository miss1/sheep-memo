import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Message from "./message";
import Loading from "./loading";
import React, {useState, useImperativeHandle } from "react";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';

export default function AddPlan(props) {
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [msg, setMsg] = useState('message');
  const [msgType, setMsgType] = useState('success');
  const [planName, setPlanName] = useState('');
  const [planDes, setPlanDes] = useState('');
  const [type, setType] = useState('info');
  const [time, setTime] = useState(dayjs());

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

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleDateChange = (newValue) => {
    setTime(newValue);
  }

  const handleSubmit = () => {
    if (planName === '') return;
    handleClose();
    setOpenLoading(true);
    const query = React.$bmob.Query("Plan");
    query.set('title', planName);
    query.set('describe', planDes);
    query.set('type', type);
    query.set('time', dayjs(time).format('YYYY-MM-DD'));
    query.save().then(res => {
      toggleMsgBox(true, 'success', 'Add Success');
      props.refreshPage();
      setOpenLoading(false);
    }).catch(err => {
      toggleMsgBox(true, 'error', 'error');
      setOpenLoading(false);
    })
  }

  const toggleMsgBox = function (open, type, text) {
    setMsg(text);
    setMsgType(type);
    setOpenMsg(open);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>添加新计划</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Plan type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={type}
              onChange={handleTypeChange}>
              <FormControlLabel value="success" control={<Radio size="small" />} label="已完成" />
              <FormControlLabel value="error" control={<Radio size="small" />} label="计划中" />
              <FormControlLabel value="info" control={<Radio size="small" />} label="未来" />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            label="plan name"
            size="small"
            type="text"
            sx={{ mb: 2, mt: 1 }}
            error={planName === ''}
            onChange={(e) => setPlanName(e.target.value)}/>
          <TextField
            variant="outlined"
            label="describe"
            size="small"
            type="text"
            sx={{ mb: 2 }}
            onChange={(e) => setPlanDes(e.target.value)}/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={1}>
              <MobileDatePicker
                label="Start time"
                inputFormat="YYYY-MM-DD"
                value={time}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </Stack>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit}>添加</Button>
        </DialogActions>
      </Dialog>
      <Message vertical="top" horizontal="center" open={openMsg} type={msgType} text={msg} close={closeMsg}/>
      <Loading open={openLoading}/>
    </div>
  );
}
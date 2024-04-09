import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React, {useState, useImperativeHandle, useContext } from "react";
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
import {GlobalContext} from "./globalProvider";

export default function AddPlan(props) {
  const [open, setOpen] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planDes, setPlanDes] = useState('');
  const [type, setType] = useState('info');
  const [time, setTime] = useState(dayjs());
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

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleDateChange = (newValue) => {
    setTime(newValue);
  }

  const handleSubmit = async () => {
    if (planName === '') return;
    handleClose();
    const param = {
      describe: planDes,
      time: dayjs(time).valueOf(),
      title: planName,
      type: type
    }
    const res = await global.doRequest(`https://createtrip-drmnut5neq-uc.a.run.app`, 'PUT', param);
    global.showMessage("success", res);
    props.refreshPage();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new Plan</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Plan type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={type}
              onChange={handleTypeChange}>
              <FormControlLabel value="success" control={<Radio size="small" />} label="completed" />
              <FormControlLabel value="error" control={<Radio size="small" />} label="planned" />
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

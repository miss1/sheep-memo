import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React, {useState, useImperativeHandle, useContext } from "react";
import Typography from "@mui/material/Typography";
import {GlobalContext} from "./globalProvider"
import dayjs from "dayjs";

export default function AddMenu(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('0');
  const [time, setTime] = useState(dayjs());
  const [objectId, setObjectId] = useState('');
  const [name, setName] = useState('');
  const global = useContext(GlobalContext);

  useImperativeHandle(props.onRef, () => {
    return { openDialog: handleClickOpen };
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (obj) => {
    setObjectId(obj.id);
    setName(obj.name);
    setOpen(true);
    setTime(dayjs());
    setType('0');
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleDateChange = (newValue) => {
    setTime(newValue);
  };

  const handleSubmit = () => {
    // handleClose();
    // const pointer = React.$bmob.Pointer('Cookbook');
    // const poiID = pointer.set(objectId);
    // const query = React.$bmob.Query('DailyMenu');
    // query.set('time', dayjs(time).format('YYYY-MM-DD'));
    // query.set('type', type);
    // query.set('menu', poiID);
    // global.doRequest(query, 'put').then(res => {
    //   global.showMessage("success", "Add Success");
    // });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>点菜</DialogTitle>
        <DialogContent>
          <Typography variant="h6">{name}</Typography>
          <FormControl sx={{mb: 1, mt: 1}}>
            <FormLabel id="time-radio-group-label">时间</FormLabel>
            <RadioGroup
              row
              aria-labelledby="time-radio-group-label"
              name="time-radio-buttons-group"
              value={type}
              onChange={handleTypeChange}>
              <FormControlLabel value="0" control={<Radio size="small" />} label="早餐" />
              <FormControlLabel value="1" control={<Radio size="small" />} label="午餐" />
              <FormControlLabel value="2" control={<Radio size="small" />} label="晚餐" />
            </RadioGroup>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={1}>
              <MobileDatePicker
                label="日期"
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
    </div>
  );
}

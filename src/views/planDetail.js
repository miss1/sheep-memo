import Header from "../components/header";
import React, { useState, useEffect, useContext } from 'react';
import Fab from "@mui/material/Fab";
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import DeleteConfirm from "../components/deleteConfirm"
import { useHistory } from 'react-router-dom';
import {GlobalContext} from "../components/globalProvider"

export default function PlanDetail(props) {
  const [detail, setDetail] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planDes, setPlanDes] = useState('');
  const [type, setType] = useState('info');
  const [time, setTime] = useState(dayjs());
  const [planDetail, setPlanDetail] = useState(dayjs());
  let confirmDialogRef = React.createRef();
  let history = useHistory();
  const global = useContext(GlobalContext);

  const getInfo = async () => {
    const res = await global.doRequest(`https://querytrip-drmnut5neq-uc.a.run.app?id=${props.match.params.id}`);
    console.log(res)
    setDetail(res);
    setInfo(res);
  }

  const setInfo = (data) => {
    setPlanName(data.title);
    setPlanDes(data.describe);
    setType(data.type);
    setTime(data.time ? dayjs(data.time) : dayjs());
    setPlanDetail(data.detail);
  }

  const typeIcon = (type) => {
    switch (type) {
      case 'success':
        return (<CheckCircleIcon sx={{color: '#4caf50'}}/>);
      case 'error':
        return (<InfoIcon sx={{color: '#ef5350'}}/>);
      case 'info':
        return (<InfoIcon sx={{color: '#03a9f4'}}/>);
      default:
        return (<InfoIcon sx={{color: '#03a9f4'}}/>);
    }
  }

  const saveDetail = async () => {
    if (planName === '') return;
    const param = {
      describe: planDes,
      detail: planDetail,
      time: dayjs(time).valueOf(),
      title: planName,
      type: type
    }
    const res = await global.doRequest(`https://updatetrip-drmnut5neq-uc.a.run.app?id=${detail.id}`, 'POST', param);
    global.showMessage("success", res);
    setShowEdit(false);
    getInfo();
  }

  const doFabAction = () => {
    if (showEdit) setInfo(detail);
    setShowEdit(!showEdit);
  }

  const deletePlan = () => {
    confirmDialogRef.current.openDialog("Are you sure you want to delete this data?");
  }

  const doDelete = async () => {
    const res = await global.doRequest(`https://deletetrip-drmnut5neq-uc.a.run.app?id=${detail.id}`, 'DELETE');
    global.showMessage("success", res);
    setShowEdit(false);
    history.go(-1);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll">
          {showEdit
            ? <div className="plan-detail-edit" style={{display: 'flex', flexDirection: 'column'}}>
              <TextField
                variant="outlined"
                label="plan name"
                size="small"
                type="text"
                sx={{ mb: 2, mt: 1 }}
                value={planName}
                error={planName === ''}
                onChange={(e) => setPlanName(e.target.value)}/>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Plan type</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={type}
                  onChange={(e) => setType(e.target.value)}>
                  <FormControlLabel value="success" control={<Radio size="small" />} label="completed" />
                  <FormControlLabel value="error" control={<Radio size="small" />} label="planned" />
                </RadioGroup>
              </FormControl>
              <TextField
                variant="outlined"
                label="describe"
                size="small"
                type="text"
                value={planDes}
                sx={{ mb: 2 }}
                onChange={(e) => setPlanDes(e.target.value)}/>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={1}>
                  <MobileDatePicker
                    label="Start time"
                    inputFormat="YYYY-MM-DD"
                    value={time}
                    onChange={(newValue) => setTime(newValue)}
                    renderInput={(params) => <TextField {...params} size="small" />}
                  />
                </Stack>
              </LocalizationProvider>
              <TextField
                variant="outlined"
                label="Detail"
                size="small"
                type="text"
                value={planDetail}
                fullWidth={true}
                multiline={true}
                rows={12}
                sx={{ mb: 2, mt: 1 }}
                onChange={(e) => setPlanDetail(e.target.value)}/>
              <div style={{display: "flex"}}>
                <Button variant="contained" onClick={saveDetail} sx={{width: '30%'}}>保存</Button>
                <Button variant="contained" color="error" onClick={deletePlan} sx={{width: '30%', margin: "0 5px"}}>删除</Button>
              </div>
            </div>
            : <div className="plan-detail-content">
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant="h6">{detail.title}</Typography>
                {typeIcon(detail.type)}
              </div>
              <Typography variant="subtitle1">{detail.describe}</Typography>
              <Typography variant="subtitle1" sx={{mt: 2}}>时间</Typography>
              <Typography variant="subtitle2">{dayjs(detail.time).format('MM/DD/YYYY')}</Typography>
              <Typography variant="subtitle1" sx={{mt: 2}}>计划</Typography>
              <Typography variant="subtitle2" sx={{whiteSpace: "pre-line"}}>{detail.detail}</Typography>
            </div>
          }
        </div>
      </div>
      <Fab onClick={doFabAction} color={showEdit ? 'warning' : 'primary'} sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        {showEdit
          ? <CloseIcon/>
          : <EditIcon/>
        }
      </Fab>
      <DeleteConfirm onRef={confirmDialogRef} doDelete={doDelete}/>
    </div>
  );
}

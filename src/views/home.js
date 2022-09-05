import Header from '../components/header'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import React, {useEffect, useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import DeleteConfirm from "../components/deleteConfirm"
import {GlobalContext} from "../components/globalProvider"
import dayjs from "dayjs";

function Home() {
  const [plan, setPlan] = useState({});
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [special, setSpecial] = useState([]);
  const global = useContext(GlobalContext);
  let history = useHistory();
  let confirmDialogRef = React.createRef();

  const queryMenu = () => {
    const menuQuery = React.$bmob.Query("DailyMenu");
    menuQuery.equalTo("time", "==", dayjs().format('YYYY-MM-DD'));
    menuQuery.include('menu','post')
    global.doRequest(menuQuery, 'get').then(res => {
      setBreakfast(res.filter((val) => val.type === '0'));
      setLunch(res.filter((val) => val.type === '1'));
      setDinner(res.filter((val) => val.type === '2'));
    });
  };

  const queryPlan = () => {
    const planQuery = React.$bmob.Query("Plan");
    planQuery.equalTo("type", "==", "error");
    planQuery.order('-time');
    planQuery.limit(1);
    global.doRequest(planQuery, 'get').then(res => {
      if (res.length > 0) {
        setPlan(res[0]);
      } else {
        setPlan({ objectId: '', title: '-', time: '-'});
      }
    });
  };

  const queryHomeData = () => {
    queryPlan();
    queryMenu();
  };

  const handleToPlanDetail = (id) => {
    if (id) {
      history.push({pathname: '/plan-detail/' + id});
    }
  };

  const handleDeleteFood = (item, time) => {
    confirmDialogRef.current.openDialog(`确定从${time}中删除：${item.menu.name}？`, item.objectId);
  };

  const doDeleteFood = (id) => {
    global.showLoading();
    const query = React.$bmob.Query("DailyMenu");
    global.doRequest(query, 'delete', id).then(res => {
      global.showMessage("success", "Delete Success")
      queryMenu();
    });
  };

  useEffect(() => {
    let timer = null;
    queryHomeData();
    const specialQuery = React.$bmob.Query("Special");
    specialQuery.order('time');
    specialQuery.equalTo("type", "==", 2);
    global.doRequest(specialQuery, 'get').then(res => {
      if (res && res.length > 0) {
        setSpecial(res[0]);
        timer = setInterval(() => {
          setSpecial(res[Math.floor(Math.random() * res.length)]);
        }, 3000);
      }
    });
    return () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
  } , []);

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll">
          <div
            className="home-time animate__animated animate__fadeInDown"
            style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
            <AccessTimeFilledIcon sx={{color: '#F19595'}}/>
            <Typography variant="h5" color="#F19595">{dayjs().format('YYYY-MM-DD')}</Typography>
          </div>
          <Box>
            <Stack spacing={2}>
              <CardActionArea
                className="animate__animated animate__fadeInLeft"
                sx={{backgroundColor: "rgb(253, 237, 237)", borderRadius: "4px", padding: "15px"}}
                onClick={() => handleToPlanDetail(plan.objectId)}>
                <Typography variant="subtitle1" color="text.secondary">最近的计划</Typography>
                <Typography variant="subtitle2" sx={{mt: 1}}>{plan.title}</Typography>
                <Typography variant="subtitle2">{plan.time}</Typography>
              </CardActionArea>
              <div
                className="animate__animated animate__fadeInRight"
                style={{backgroundColor: "rgb(229, 246, 253)", borderRadius: "4px", padding: "15px"}}>
                <Typography variant="subtitle1" color="text.secondary">今日菜单</Typography>
                <Typography variant="subtitle2" sx={{mt: 2}}>早餐</Typography>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  {breakfast.map((item) => (
                    <Chip
                      key={item.objectId}
                      label={item.menu.name}
                      onDelete={() => handleDeleteFood(item, "早餐")}
                      deleteIcon={<CloseIcon />}
                      sx={{margin: "5px"}}/>
                  ))}
                </div>
                <Typography variant="subtitle2" sx={{mt: 2}}>午餐</Typography>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  {lunch.map((item) => (
                    <Chip
                      key={item.objectId}
                      label={item.menu.name}
                      onDelete={() => handleDeleteFood(item, "午餐")}
                      deleteIcon={<CloseIcon />}
                      sx={{margin: "5px"}}/>
                  ))}
                </div>
                <Typography variant="subtitle2" sx={{mt: 2}}>晚餐</Typography>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  {dinner.map((item) => (
                    <Chip
                      key={item.objectId}
                      label={item.menu.name}
                      onDelete={() => handleDeleteFood(item, "晚餐")}
                      deleteIcon={<CloseIcon />}
                      sx={{margin: "5px"}}/>
                  ))}
                </div>
              </div>
            </Stack>
          </Box>
        </div>
      </div>
      <div style={{position: "absolute", bottom: "20px", display: "flex", justifyContent: "center", width: "100%"}}>
        <Chip
          className="animate__animated animate__flipInX"
          label={special.name + " (" + special.time + ")"}
          sx={{margin: "5px", backgroundColor: "rgb(237, 247, 237)"}}/>
      </div>
      <DeleteConfirm onRef={confirmDialogRef} doDelete={doDeleteFood}/>
    </div>
  );
}

export default Home;
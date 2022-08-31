import Header from '../components/header'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import React, {useEffect, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import DeleteConfirm from "../components/deleteConfirm"
import Loading from "../components/loading";
import Message from "../components/message";
import dayjs from "dayjs";

function Home() {
  const [openLoading, setOpenLoading] = useState(false);
  const [plan, setPlan] = useState({});
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [specialDay, setSpecialDay] = useState([]);
  const [special, setSpecial] = useState([]);
  const [msg, setMsg] = useState('message');
  const [msgType, setMsgType] = useState('success');
  const [openMsg, setOpenMsg] = useState(false);
  let history = useHistory();
  let confirmDialogRef = React.createRef();
  let timer = null;

  useEffect(() => {
    const planQuery = React.$bmob.Query("Plan");
    planQuery.equalTo("type", "==", "error");
    planQuery.order('-time');
    planQuery.limit(1);
    planQuery.find().then(res => {
      if (res.length > 0) {
        setPlan(res[0]);
      } else {
        setPlan({
          objectId: '',
          title: '-',
          time: '-'
        });
      }
    });

    const menuQuery = React.$bmob.Query("DailyMenu");
    menuQuery.equalTo("time", "==", dayjs().format('YYYY-MM-DD'));
    menuQuery.include('menu','post')
    menuQuery.find().then(res => {
      setBreakfast(res.filter((val) => val.type === '0'));
      setLunch(res.filter((val) => val.type === '1'));
      setDinner(res.filter((val) => val.type === '2'));
    })

    const specialQuery = React.$bmob.Query("Special");
    specialQuery.order('time');
    specialQuery.equalTo("type", "==", 2);
    specialQuery.find().then(res => {
      setSpecialDay(res);
      if (res && res.length > 0) {
        setSpecial(res[0]);
        timer = setInterval(() => {
          setSpecial(res[Math.floor(Math.random() * res.length)]);
        }, 3000);
      }
    })

    return () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
  }, [setPlan, setBreakfast, setLunch, setDinner, setSpecialDay]);

  const queryMenu = () => {
    const menuQuery = React.$bmob.Query("DailyMenu");
    menuQuery.equalTo("time", "==", dayjs().format('YYYY-MM-DD'));
    menuQuery.include('menu','post')
    menuQuery.find().then(res => {
      setOpenLoading(false);
      setBreakfast(res.filter((val) => val.type === '0'));
      setLunch(res.filter((val) => val.type === '1'));
      setDinner(res.filter((val) => val.type === '2'));
    }).then(err => {
      setOpenLoading(false);
    });
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
    setOpenLoading(true);
    const query = React.$bmob.Query("DailyMenu");
    query.destroy(id).then(res => {
      toggleMsgBox(true, 'success', 'Delete Success');
      queryMenu();
    }).catch(err => {
      setOpenLoading(false);
      toggleMsgBox(true, 'error', 'error');
    })
  };

  const toggleMsgBox = function (open, type, text) {
    setMsg(text);
    setMsgType(type);
    setOpenMsg(open);
  }

  const closeMsg = () => {
    setOpenMsg(false);
  }

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll">
          <div className="home-time" style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
            <AccessTimeFilledIcon sx={{color: '#F19595'}}/>
            <Typography variant="h5" color="#F19595">2022-08-30</Typography>
          </div>
          <Box>
            <Stack spacing={2}>
              <CardActionArea
                sx={{backgroundColor: "rgb(253, 237, 237)", borderRadius: "4px", padding: "15px"}}
                onClick={() => handleToPlanDetail(plan.objectId)}>
                <Typography variant="subtitle1" color="text.secondary">最近的计划</Typography>
                <Typography variant="subtitle2" sx={{mt: 1}}>{plan.title}</Typography>
                <Typography variant="subtitle2">{plan.time}</Typography>
              </CardActionArea>
              <div style={{backgroundColor: "rgb(229, 246, 253)", borderRadius: "4px", padding: "15px"}}>
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
        <Chip label={special.name + " (" + special.time + ")"} sx={{margin: "5px", backgroundColor: "rgb(237, 247, 237)"}}/>
      </div>
      <DeleteConfirm onRef={confirmDialogRef} doDelete={doDeleteFood}/>
      <Message vertical="top" horizontal="center" open={openMsg} type={msgType} text={msg} close={closeMsg}/>
      <Loading open={openLoading}/>
    </div>
  );
}

export default Home;
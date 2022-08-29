import Header from "../components/header";
import '../assets/plan.css'
import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CardActionArea from '@mui/material/CardActionArea';
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function Plan() {
  const [alignment, setAlignment] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const query = React.$bmob.Query("Plan");
    query.order('-time');
    if (alignment) query.equalTo("type", "==", alignment);
    query.find().then(res => {
      console.log(res)
      setList(res);
    });
  }, [setList]);

  const getList = (type) => {
    const query = React.$bmob.Query("Plan");
    query.order('-time');
    if (type) query.equalTo("type", "==", type);
    query.find().then(res => {
      console.log(res)
      setList(res);
    });
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    getList(newAlignment);
  };

  const showPlanDetail = (id) => {
    console.log(id)
  }

  const doAddPlan = () => {
    console.log(123)
  }

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{mt: '5px'}}
            aria-label="Platform">
            <ToggleButton size="small" value="success">已完成</ToggleButton>
            <ToggleButton size="small" value="error">计划中</ToggleButton>
            <ToggleButton size="small" value="info">未来</ToggleButton>
          </ToggleButtonGroup>
          <div className='plan-content'>
            {list.map((item) => (
              <CardActionArea sx={{mt: '10px'}} key={item.objectId} onClick={() => showPlanDetail(item.objectId)}>
                <Alert severity={item.type}>
                  <AlertTitle>{item.title}</AlertTitle>
                  {item.describe} — <strong>{item.time || '/'}</strong>
                </Alert>
              </CardActionArea>
            ))}
          </div>
        </div>
      </div>
      <Fab onClick={doAddPlan} color='primary' sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        <AddIcon/>
      </Fab>
    </div>
  );
}

export default Plan;
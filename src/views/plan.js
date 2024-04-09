import Header from "../components/header";
import '../assets/plan.css'
import React, { useState, useEffect, useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CardActionArea from '@mui/material/CardActionArea';
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import AddPlan from "../components/addPlan";
import { useHistory } from "react-router-dom";
import {GlobalContext} from "../components/globalProvider"
import dayjs from "dayjs";

function Plan() {
  const [alignment, setAlignment] = useState('');
  const [list, setList] = useState([]);
  let history = useHistory();
  let addPlanRef = React.createRef();
  const global = useContext(GlobalContext);

  const getList = async (newAlignment) => {
    const type = newAlignment === undefined ? alignment : newAlignment;
    const res = await global.doRequest(`https://querytrips-drmnut5neq-uc.a.run.app?type=${type}`);
    setList(res);
  }

  const handleChange = (event, newAlignment) => {
    getList(newAlignment);
    setAlignment(newAlignment);
  };

  const showPlanDetail = (id) => {
    history.push({pathname: '/plan-detail/' + id});
  }

  const doAddPlan = () => {
    addPlanRef.current.openDialog();
  }

  useEffect(() => {
    getList()
  }, []);

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
            <ToggleButton size="small" value="">all</ToggleButton>
            <ToggleButton size="small" value="success">completed</ToggleButton>
            <ToggleButton size="small" value="error">planned</ToggleButton>
          </ToggleButtonGroup>
          <div className='plan-content'>
            {list.map((item) => (
              <CardActionArea
                className="animate__animated animate__fadeInUp"
                sx={{mt: '10px'}} key={item.id} onClick={() => showPlanDetail(item.id)}>
                <Alert severity={item.type}>
                  <AlertTitle>{item.title}</AlertTitle>
                  {item.describe} -- <strong>{dayjs(item.time).format('MM/DD/YYYY')}</strong>
                </Alert>
              </CardActionArea>
            ))}
          </div>
        </div>
      </div>
      <Fab onClick={doAddPlan} color='primary' sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        <AddIcon/>
      </Fab>
      <AddPlan onRef={addPlanRef} refreshPage={getList}/>
    </div>
  );
}

export default Plan;

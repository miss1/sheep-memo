import Header from "../components/header";
import '../assets/special.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useEffect, useState, useContext } from "react";
import Fab from '@mui/material/Fab';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {GlobalContext} from "../components/globalProvider";

function Special() {
  const [list, setList] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [showTimeLine, setShowTimeLine] = useState(true);
  const global = useContext(GlobalContext);

  dayjs.extend(duration)

  const getLists = () => {
    // const query = React.$bmob.Query("Special");
    // query.order('time');
    // global.doRequest(query, 'get').then(res => {
    //   let data = res.map(val => {
    //     if (val.type === 1) {
    //       val.duration = '';
    //       val.days = dayjs(val.time).diff(dayjs(), 'day');
    //     } else {
    //       let d = dayjs().diff(dayjs(val.time), 'day');
    //       let t = val.time
    //       if (d < 0)
    //       let _data = dayjs.duration(dayjs().diff(dayjs(val.time)));
    //       val.duration = _data.years() + ' Years ' + _data.months() + ' Month ' + _data.days() + ' Day';
    //       val.days = dayjs().diff(dayjs(val.time), 'day');
    //     }
    //     return val;
    //   });
    //   let timeList = data.filter(val => val.type === 2);
    //   setList(data);
    //   setTimeline(timeList);
    // });
  }

  const doAction = () => {
    setShowTimeLine(!showTimeLine);
  }

  useEffect(getLists, []);

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        {showTimeLine
          ? <div className="page-scroll special-timeline">
            <Timeline position="alternate" className="animate__animated animate__fadeIn">
              {timeline.map((item) => (
                <TimelineItem key={item.objectId}>
                  <TimelineSeparator>
                    <TimelineDot color='success' />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{item.name} ({item.time})</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            <Typography variant="string" sx={{textAlign: 'center'}}>to be continued</Typography>
          </div>
          : <div className="page-scroll special-page">
            {list.map((item) => (
              <Card
                className="animate__animated animate__fadeInUp"
                key={item.objectId}
                sx={{width: {xs: '100%', md: '49%'}, margin: '5px 0'}}>
                <CardContent sx={{m: 0, p: 0}}>
                  <div className={item.type === 1 ? 'special-head-down' : 'special-head-up'}>
                    <p>{item.name}</p>
                    <p>{item.type === 1 ? 'Arrives in' : 'Already'}</p>
                  </div>
                  <p className="special-content">{item.days}</p>
                  <p className="special-sub-content">{item.duration}</p>
                  <p className="special-foot">{item.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      </div>
      <Fab
        className={`animate__animated animate__bounceIn`}
        onClick={doAction} color={showTimeLine ? 'warning' : 'primary'}
           sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        <SwapHorizIcon/>
      </Fab>
    </div>
  );
}

export default Special;

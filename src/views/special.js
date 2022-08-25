import Header from "../components/header";
import '../assets/special.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { queryData } from '../api/connectSqlite'
import { QUERY_SPECIAL_DAYS, QUERY_SPECIAL_DAYS_Timeline } from '../api/sql'
import React, { useEffect, useState } from "react";
import Fab from '@mui/material/Fab';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Typography from '@mui/material/Typography';
import moment from "moment";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Special() {
  const [list, setList] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [showTimeLine, setShowTimeLine] = useState(false);
  useEffect( () => {
    let data = queryData(QUERY_SPECIAL_DAYS);
    data = data.map(val => {
      if (val.type === 1) {
        val.duration = '';
        val.days = moment(val.time).diff(moment(), 'days');
      } else {
        let { _data } = moment.duration(moment().diff(moment(val.time)));
        val.duration = _data.years + ' Years ' + _data.months + ' Month ' + _data.days + ' Day';
        val.days = moment().diff(moment(val.time), 'days');
      }
      return val;
    });
    setList(data);
    setTimeline(queryData(QUERY_SPECIAL_DAYS_Timeline));
  },[setList]);

  const doAction = () => {
    setShowTimeLine(!showTimeLine);
  }

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        {showTimeLine
          ? <div className="page-scroll special-timeline">
            <Timeline position="alternate">
              {timeline.map((item) => (
                <TimelineItem key={item.title}>
                  <TimelineSeparator>
                    <TimelineDot color='success' />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{item.title} ({item.time})</TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            <Typography variant="string" sx={{textAlign: 'center'}}>to be continued</Typography>
          </div>
          : <div className="page-scroll special-page">
            {list.map((item) => (
              <Card key={item.title} sx={{width: {xs: '100%', md: '49%'}, margin: '5px 0'}}>
                <CardContent sx={{m: 0, p: 0}}>
                  <div className={item.type === 1 ? 'special-head-down' : 'special-head-up'}>
                    <p>{item.title}</p>
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
      <Fab onClick={doAction} color={showTimeLine ? 'warning' : 'primary'}
           sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        <SwapHorizIcon/>
      </Fab>
    </div>
  );
}

export default Special;
import Header from "../components/header";
import '../assets/special.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { queryData } from '../api/connectSqlite'
import { QUERY_SPECIAL_DAYS } from '../api/sql'
import React, { useEffect, useState } from "react";
import moment from "moment";

function Special() {
  const [list, setList] = useState([]);
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
  },[setList]);
  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll special-page">
          {list.map((item) => (
            <Card key={item.title} sx={{ width: { xs: '100%', md: '49%' }, margin: '5px 0' }}>
              <CardContent sx={{ m: 0, p: 0 }}>
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
      </div>
    </div>
  );
}

export default Special;
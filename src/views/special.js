import Header from "../components/header";
import '../assets/special.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { queryAllSpecialDay } from '../api/connectSqlite'
import React, { useEffect, useState } from "react";

function Special() {
  const [list, setList] = useState([]);
  useEffect( () => {
    setList(queryAllSpecialDay());
  },[setList]);
  return (
    <div className="page">
      <Header/>
      <div className="content-page special-page">
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
  );
}

export default Special;
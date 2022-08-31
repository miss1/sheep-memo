import '../assets/login.css'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Message from '../components/message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';
import {pink} from "@mui/material/colors";
import Loading from "../components/loading";

function Login() {
  let history = useHistory();
  const [password, setPassword] = useState('');
  const [openMsg, setOpenMsg] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);

  const doLogin = () => {
    setOpenLoading(true);
    React.$bmob.User.login('ccc',password).then(res => {
      setOpenLoading(false);
      history.replace({pathname: '/home'});
      history.go(0);
    }).catch(err => {
      setOpenLoading(false);
      setOpenMsg(true);
    });
  }

  const closeMsg = () => {
    setOpenMsg(false);
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-title">
          <span>Y</span>
          <FavoriteIcon className="animate__animated animate__flip" sx={{ color: pink[500], fontSize: 40 }}/>
          <span>C</span>
        </div>
        <TextField
          variant="outlined"
          label="password"
          size="small"
          type="password"
          sx={{ mb: 2 }}
          onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" onClick={doLogin}>Login</Button>
      </div>
      <Message vertical="top" horizontal="center" open={openMsg} type='error' text='Wrong Password!' close={closeMsg}/>
      <Loading open={openLoading}/>
    </div>
  );
}

export default Login;
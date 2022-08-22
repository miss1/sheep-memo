import '../assets/login.css'
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Message from '../components/message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';
import {pink} from "@mui/material/colors";
import { checkPassword } from '../api/connectSqlite'

function Login() {
  let history = useHistory();
  const [password, setPassword] = useState('');
  let messageRef = React.createRef();

  const doLogin = () => {
    const userInfo = checkPassword();
    if (userInfo.password === password) {
      history.replace({pathname: '/home'});
      history.go(0);
    } else {
      messageRef.current.openMsg('error', 'Wrong Password!');
    }
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-title"><span>Y</span><FavoriteIcon sx={{ color: pink[500], fontSize: 40 }}/><span>C</span></div>
        <TextField
          variant="outlined"
          label="password"
          size="small"
          type="password"
          sx={{ mb: 2 }}
          onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" onClick={doLogin}>Login</Button>
      </div>
      <Message onRef={messageRef} vertical="top" horizontal="center"/>
    </div>
  );
}

export default Login;
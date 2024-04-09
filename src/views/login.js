import '../assets/login.css'
import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';
import {pink} from "@mui/material/colors";
import {GlobalContext} from "../components/globalProvider"

function Login() {
  let history = useHistory();
  const [password, setPassword] = useState('');
  const global = useContext(GlobalContext);

  const doLogin = () => {
    history.replace({pathname: '/home'});
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
    </div>
  );
}

export default Login;

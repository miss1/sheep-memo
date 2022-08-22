import '../assets/login.css'
import { Button, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';
import {pink} from "@mui/material/colors";

function Login() {
  let history = useHistory();

  let doLogin = () => {

    // history.replace({pathname: '/home'});
    // history.go(0);
  }

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-title"><span>Y</span><FavoriteIcon sx={{ color: pink[500], fontSize: 40 }}/><span>C</span></div>
        <TextField variant="outlined" label="password" size="small" sx={{ mb: 2 }}/>
        <Button variant="contained" onClick={doLogin}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
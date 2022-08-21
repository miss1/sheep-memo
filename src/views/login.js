import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();

  let doLogin = () => {
    history.replace({pathname: '/home'});
    history.go(0);
  }

  return (<Button variant="contained" onClick={doLogin}>Hello World</Button>);
}

export default Login;
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './views/login'
import Home from './views/home'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './views/login'
import Home from './views/home'

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </div>
    </HashRouter>
  );
}

export default App;

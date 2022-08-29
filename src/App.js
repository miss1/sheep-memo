import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './views/login';
import Home from './views/home';
import Special from './views/special'
import Plan from './views/plan'
import Letter from './views/letter'
import Cook from './views/cook'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/special">
          <Special />
        </Route>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/letter">
          <Letter />
        </Route>
        <Route path="/cook">
          <Cook />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './views/login';
import Home from './views/home';
import Special from './views/special';
import Plan from './views/plan';
import PlanDetail from './views/planDetail';
import Cook from './views/cook';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/special" component={Special} />
        <Route path="/plan" component={Plan} />
        <Route path="/plan-detail/:id" component={PlanDetail} />
        <Route path="/recipes" component={Cook} />
        <Route path="/" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;

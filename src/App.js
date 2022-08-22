import React, { useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './views/login';
import Home from './views/home';
import { connectDB } from './api/connectSqlite'

function App() {
  useEffect( () => { connectDB().then(); });

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

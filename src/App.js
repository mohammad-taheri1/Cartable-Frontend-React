import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Task from "./pages/Task";

const App = () => {
  return (
    <div className="rounded container-fluid main-container">
      <div className="row">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/task/:id" exact>
            <Task />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

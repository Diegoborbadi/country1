import {Route, Switch } from 'react-router-dom';
import Create from "./create/create"
import Detail from "./detail/detail"
import Home from "./home/home"

import "./App.css"

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/:id" component={Detail} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
  );
}


export default App

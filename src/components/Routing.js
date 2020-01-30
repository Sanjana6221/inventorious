import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Routing extends Component {
  <Switch>
    <Route exact path="/create">
    <Create />
    </Route>
    <Route exact path="/edit/:id">
    <Edit />
    </Route>
    <Route exact path="/">
    <Home />
    </Route>
  </Switch>
}

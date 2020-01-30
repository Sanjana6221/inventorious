import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Table from './components/Table';
import Form from './components/Form';
import Api from './components/Api';

import Create from './components/Create';
import Home from './components';
import Edit from './components/Edit';

export default class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (element) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== element
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    const tableData = this.state

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">MY APP</Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'./'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'./create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'./index'} className="nav-link">Index</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <h2>React CRUD Tutorial</h2>
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
        {/* <Api /> */}
        <Form handleSubmit={this.handleSubmit}/>
        <Table tableData={tableData} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}
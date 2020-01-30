import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table'
import Form from './components/Form'

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
      // characters: this.state.characters.concat(character)
      characters: [...this.state.characters, character]
    })
  }

  render() {
    const tableData = this.state

    return (
      <div className="container">
        <h2>React CRUD Tutorial</h2>
        <Form handleSubmit={this.handleSubmit}/>
        <Table tableData={tableData} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}
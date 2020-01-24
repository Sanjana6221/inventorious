import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

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
        <Form handleSubmit={this.handleSubmit}/>
        <Table tableData={tableData} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}
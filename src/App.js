import React, {Component} from 'react'
import Table from './Table'

export default class App extends Component {
  state = {
    characters: [
      {
        name: "Sanjana",
        job: "Software Development",
      },
      {
        name: "ABC",
        job: "Tester",
      },
      {
        name: "Dee",
        job: "Aspiring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      }
    ],
  }

  removeCharacter = (element) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== element
      })
    })
  }

  render() {
    const tableData = this.state

    return (
      <div className="container">
        <Table tableData={tableData} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}
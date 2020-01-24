import React, {Component} from 'react'

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const tableContent = props.tableData.characters.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.name}</td>
        <td>{element.job}</td>
        <td>
          <button onClick={()=> props.removeCharacter(index) }>Delete</button>
        </td>
      </tr>
    )
  })

  return(
    <tbody>{tableContent}</tbody>
  )
}

export default class Table extends Component {

  render (){
    const {tableData, removeCharacter} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody tableData={tableData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}
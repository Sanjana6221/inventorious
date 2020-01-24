import React, {Component} from 'react'

export default class Api extends Component { 
    state = {
        data: [],
    }

    componentDidMount() {
        const url =  'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        }) 
    }

    render () {
        const {data} = this.state

        const result = data.map((element, index) => {
            return <li key={index}>{element}</li>
        })
        return <ul>{result}</ul>
    }
}

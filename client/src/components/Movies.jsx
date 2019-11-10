import React, { Component } from 'react'
import axios from "axios"

export default class Movies extends Component {
    state = {
        movies =[]

    }

    componentDidMount = () => {
        axios.get('/api/movie')
            .then((response) => {
                this.setState({ movies: response.data })
            })
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}

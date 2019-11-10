import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Movies extends Component {
    state = {
        movies: []

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
                <h1>Films In Atl</h1>
                {this.state.movies.map((movie) => {
                    return (
                        <div key={movie._id}>
                            <Link to={"/movies/" + movie._id}><h5>{movie.name}</h5></Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

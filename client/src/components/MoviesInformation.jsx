import React, { Component } from 'react'
import axios from 'axios'


export default class MoviesInformation extends Component {
    state={
        movie: {}
    }

    deleteMovie = () =>{
        axios.delete('/api/movie/' + this.props.maych.params.id)
            .then((response) =>{
                this.setState({ deleted: true})
                console.log(response)
            })
    }

    componentDidMount = () =>{
        axios.get('/api/movie' + this.props.match.params.id)
            .then((response) =>{
                this.setState({ movie: response.data })
                console.log(this.state)
            })
    }

    render() {
        if(this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return(
                <div>
                    Movie has been deleted
                </div>
            )
        }else{
            return (
                <div>
                    <h1>Movie Information </h1>
                    <h5>name: {this.state.movie.name}</h5>
                    <h5>genre: {this.state.movie.genre}</h5>
                    <h5>releaseYear: {this.state.movie.releaseYear}</h5>
                    
                    <button onClick={this.deleteMovie}>Deleted</button>
                </div>
            )
        }
    }
}
           



import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'



export default class CreateMovies extends Component {
    state = {
        redirect: false,
        newMovie: {
            name: '',
            genre: '',
            releaseYear: ''
        },
        createdMovieId: null
    }
    handelNewMovie = (evt) => {
        const attributeName = evt.target.name;
        const attributeValue = evt.target.value;
        const newMovie = { ...this.state.newMovie };
        newMovie[attributeName] = attributeValue; 
        this.setState({ newMovie })
    }

    addNewMovie = (evt) => {
        evt.preventDefault();

        axios.get('/api/movie', this.state.newMovie)
            .then(createdMovieId => {
                const newState = { ...this.state }
                newState.createdMovieId = createdMovie._id
                newState.redirect = true
                this.setState(newState)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewMovie} >

                    {this.state.redirect ? (<Redirect to={`/movies${this.state.createdPainterId}`} />) : null}

                    <div>
                        <input
                            name='name'
                            type='text'
                            placeholder='name'
                            value={this.state.newMovie.name}
                            onChange={this.handelNewMovie}
                        />
                    </div>
                    <div>
                        <input
                            name='genre'
                            type='text'
                            placeholder='genre'
                            value={this.state.newMovie.genre}
                            onChange={this.handelNewMovie}
                        />
                    </div>
                    <div>
                        <input
                            name='releaseYear'
                            type='text'
                            placeholder='releaseYear'
                            value={this.state.newMovie.releaseYear}
                            onChange={this.handelNewMovie}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

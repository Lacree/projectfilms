const express = require('express')

const MovieApi = require('../models/Movies.js')

const movieRouter = express.Router()

//getAll
movieRouter.get('/', (req, res) => {
    MovieApi.getAllMovies()
        .then((allMovies) => {
            res.json(allMovies)
        })
})

//getOne
movieRouter.get('/:id', (req, res) => {
    MovieApi.getSingleMovie(req.params.id)
        .then((singleMovie) => {
            res.json(singleMovie)
        })
})

//updateMovie

movieRouter.put('/:id', (req, res) => {
    MovieApi.updateMovies(req.params.id, req.body)
        .then((updatedMovie) => {
            res.json(updatedMovie)
        })
})


//create
movieRouter.post('/', (req, res) => {
    MovieApi.createMovie(req.body)
        .then((createdMovie) => {
            res.json(createdMovie)
        })
})

//delete
movieRouter.delete('/:id', (req, res) => {
    MovieApi.deleteMovie(req.params.id)
        .then((deletedMovie) => {
            res.json(deletedMovie)
        })
})

module.exports = {
    movieRouter
}
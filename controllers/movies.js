cosnt express = require('express')

const moviesApi = require('../models/Movies.js')

const MoviesRouter = express.Router()

MoviesRouter.get('/edit/:id', (req, res) =>{
    moviesApi.getOneMovie(req.params.id)
        .then((singleMovie) =>{
            res.
        })


})

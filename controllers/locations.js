const express = require('express')

const LocationsApi = require('../models/Locations.js')

const locationRouter = express.Router()

// movieRouter.get('/edit/:id', (req, res) => {
//     MovieApi.getOneMovie(req.params.id)
//         .then((singleMovie) => {
//           res.json('editMovieForm', singleMovie)
//         })
// })

// movieRouter.get('/new', (req, res) => {
//     res.json('createMovieForm')
// })

//getAll
locationRouter.get('/', (req, res) => {
    LocationApi.getAllLocations()
        .then((getAllLocations) => {
            res.json(getAllLocations)
        })
})

//getOne
locationRouter.get('/:id', (req, res) => {
    LocationApi.getOneLocation(req.params.id)
        .then((singleLocation) => {

            res.json(singleLocation)
        })
})

//update

locationRouter.put('/:id', (req, res) => {
    LocationApi.updateLocation(req.params.id, req.body)
        .then((updatedLocation) => {
            res.json(updatedLocation)
        })
})


//create
locationRouter.post('/', (req, res) => {
    LocationApi.createLocation(req.body)
        .then((createdLocation) => {
            res.json(createdLocation)
        })
})

//delete
locationRouter.delete('/:id', (req, res) => {
    LocationApi.deleteLocation(req.params.id)
        .then((deletedLocation) => {
            res.json(deletedLocation)
        })
})

module.exports = {
    locationRouter
}
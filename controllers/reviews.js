const express = require('express')

const ReviewApi = require('../models/Reviews.js')

const reviewRouter = express.Router()

//getAll
reviewRouter.get('/', (req, res) => {
    ReviewApi.getAllReviews()
        .then((AllReviews) => {
            res.json(AllReviews)
        })
})

//getOne
reviewRouter.get('/:id', (req, res) => {
    ReviewApi.getoneReview(req.params.id)
        .then((singleReview) => {
            res.json(singleReview)
        })
})

//updateReviews
reviewRouter.put('/:id', (req, res) => {
    ReviewApi.updateReviews(req.params.id, req.body)
        .then((updatedReview) => {
            res.json(updatedReview)
        })

})

//createReview
reviewRouter.post('/', (req, res) => {
    ReviewApi.createReviews(req.body)
        .then((createdReview) => {
            res.json(createdReview)
        })
})

//deleteReview
reviewRouter.delete('/:id', (req, res) => {
    ReviewApi.deleteReview(req.params.id)
        .then((deletedReview) => {
            res.json(deletedReview)
        })
})

module.exports = {
    reviewRouter
}
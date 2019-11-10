const mongoose = require('./connections.js')

const ReviewsSchema = new mongoose.Schema({
   stars: Number,
   review: String
})

const ReviewsCollection = mongoose.model('review', ReviewsSchema)

//getAllReviews
const getAllReviews = () => {
    return ReviewsCollection.find({})
}

//getoneReview
const getoneReview = (id) => {
    return ReviewsCollection.findById(id)
}

//createReviews
const createReviews = (reviewData) => {
    return ReviewsCollection.create(reviewData)
}

//updateReviews
const updateReviews = (id, reviewData) => {
    return ReviewsCollection.updateOne({ _id: id }, reviewData)
}

//deleteReviews
const deleteReviews = (id) => {
    return ReviewsCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllReviews,
    getoneReview,
    createReviews,
    updateReviews,
    deleteReviews
}
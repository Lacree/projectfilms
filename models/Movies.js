const mongoose = require('./connections.js')

const MoviesSchema = new mongoose.Schema({
    name: String,
    genre: String,
    releaseYear: Number
})

const MovieCollection = mongoose.model('Movie', MoviesSchema)

//getAllMovies
const getAllMovies = () => {
    return MovieCollection.find({})
}

//getOneMovie
const getSingleMovie = (id) => {
    return MovieCollection.findById(id)
}

//createMovie
const createMovie = (movieData) => {
    return MovieCollection.create(movieData)
}

//updateMovies
const updateMovies = (id, movieData) => {
    return MovieCollection.updateOne({ _id: id }, movieData)
}

//deleteMovies
const deleteMovie = (id) => {
    return MovieCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllMovies,
    getSingleMovie,
    createMovie,
    updateMovies,
    deleteMovie
}
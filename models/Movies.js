const mongoose = require('./connections.js')

const MoviesSchema = new mongoose.Schema({
    name: String,
    genre: String,
    releaseYear: Number
})

const MoviesCollection = mongoose.model('Movie', MoviesSchema)

//getAllMovies
const getAllMovies = () => {
    return MoviesCollection.find({})
}

//getOneMovie
const getSingleMovie = (id) => {
    return MoviesCollection.findById(id)
}

//createMovie
const createMovie = (movieData) => {
    return MoviesCollection.create(movieData)
}

//updateMovies
const updateMovies = (id, movieData) => {
    return MoviesCollection.updateOne({ _id: id }, movieData)
}

//deleteMovies
const deleteMovie = (id) => {
    return MoviesCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllMovies,
    getSingleMovie,
    createMovie,
    updateMovies,
    deleteMovie
}
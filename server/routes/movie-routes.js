const router = require('express').Router();

const {
    getAllMovies,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movie-controller')

router
    .route('/')
    .get(getAllMovies)
    .post(createMovie);

router
    .route('/:movieId')
    .put(updateMovie)
    .delete(deleteMovie);

module.exports = router;
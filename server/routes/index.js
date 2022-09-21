const router = require('express').Router();
const movieRoutes = require('./movie-routes');

router.use('/api/movies', movieRoutes);

module.exports = router;
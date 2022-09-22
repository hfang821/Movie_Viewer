const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    Title: {
        type: String,
    },
    
    Year: {
        type: Number,
    },

    Director: {
        type: String,
    },
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
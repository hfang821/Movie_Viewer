const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    Title: {
        type: String,
        required: true,
    },
    
    Year: {
        type: Number,
        required: true,
    },

    Director: {
        type: String,
        required: true,
    },
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;
const { Movie } = require('../models');

module.exports = {
    
    getAllMovies(req, res){
        Movie.find({})
        .select('-__v')
        .then(dbMovieData => {
            if(!dbMovieData){
                res.status(404).json({message: 'No movies yet.'});
                return;
            }
            res.json(dbMovieData);
        })
        .catch(err=>{
            console.log(err);
            res.status(400).json(err);
        });
    },

    createMovie({body}, res){
        Movie.create(body)
            .then(dbMovieData => res.json(dbMovieData))
            .catch(err => res.status(400).json(err));
    },

    updateMovie({params,body}, res){
        Movie.findOneAndUpdate(
            {_id: params.movieId},
            body,
            {new: true},
        )
        .then(dbMovieData =>{
            if(!dbMovieData){
                res.status(404).json({message: 'Movie not found'});
                return;
            }
            res.json(dbMovieData);
        })
        .catch(err => res.status(400).json(err));
    },

    deleteMovie({params,body}, res){
        Movie.findOneAndDelete({_id: params.movieId})
            .then(dbMovieData =>{
                if(!dbMovieData){
                    res.status(404).json({message: 'Movie not found'});
                    return;
                }
                res.json(dbMovieData);
            })
            .catch(err => res.status(400).json(err));
    }
};
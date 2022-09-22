export const getMovies = () => {
  return fetch("/api/movies", {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => {
     response.json();
     console.log(response);
}) 
};

export const createMovie = (dbMovieData) => {
  return fetch("/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dbMovieData),
  });
};

export const updateMovie = (dbMovieData, movieId) => {
    return fetch(`/api/movies/${movieId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dbMovieData),
      });
};

export const deleteMovie = (movieId) => {
  return fetch(`/api/movies/${movieId}`, {
    method: "DELETE",
  });
};

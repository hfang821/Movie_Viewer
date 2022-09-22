import axios from "axios";
import React, { useState } from "react";

export default function PopUp(props) {
  const [movie, setMovie] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleDirectorChange = (event) => {
    setDirector(event.target.value);
  };

  const handleFormSubmit = () => {
    if (props.addMovie) {
      axios
        .post(`${props.baseUrl}`, {
          Title: movie,
          Year: year,
          Director: director,
        })
        .then(() => {
          alert("Movie has been added.");
          window.location.reload();
        });
    } else {
      axios
        .put(`${props.baseUrl}${props.movieId}`, {
          Title: movie,
          Year: year,
          Director: director,
        })
        .then(() => {
          alert("Movie has been changed.");
        });
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}

        <form className="editForm">
          <label>Movie Name</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(event) => handleMovieChange(event)}
          ></input>
          <label>Year</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(event) => handleYearChange(event)}
          ></input>
          <label>Director Name</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(event) => handleDirectorChange(event)}
          ></input>
          <button
            style={{
              backgroundColor: "#28A745",
              color: "white",
              borderRadius: "5px",
              height: "50px",
              width: "201px",
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "10px",
            }}
            onClick={() => {
              handleFormSubmit();
            }}
          >
            Submit Changes
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

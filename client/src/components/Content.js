import React, { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "./PopUp";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const baseURL = process.env.baseURL || "http://localhost:3001/api/movies/";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#171515",
    },
    secondary: {
      main: "#2F2929",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: customTheme.palette.primary.main,
  },
  "&:nth-of-type(even)": {
    backgroundColor: customTheme.palette.secondary.main,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Content() {
  const [movies, setMovies] = useState("");
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [addMovie, setAddMovie] = useState(false);

  //Get request
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovies(response.data);
    });
  }, []);

  if (!movies) return null;

  //Delete request
  const handleDelete = (id) => {
    axios.delete(`${baseURL}${id}`).then(() => {
      //Temporarily using this approach (Will switch to delete and show later)
      window.location.reload();
    });
  };

  //Post request
  const handleAddMovie = () => {
    setAddMovie(true);
    setButtonPopUp(true);
  };

  return (
    <div style={{ marginTop: "-103px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
          <TableHead>
            <TableRow style={{ maxHeight: "20%" }}>
              <StyledTableCell
                style={{
                  backgroundColor: "#BA2B2B",
                  fontWeight: "bolder",
                  fontFamily: "Montserrat",
                }}
              >
                Number
              </StyledTableCell>
              <StyledTableCell
                style={{
                  backgroundColor: "#BA2B2B",
                  fontWeight: "bolder",
                  fontFamily: "Montserrat",
                }}
              >
                Movie Name
              </StyledTableCell>
              <StyledTableCell
                style={{
                  backgroundColor: "#BA2B2B",
                  fontWeight: "bolder",
                  fontFamily: "Montserrat",
                }}
              >
                Year
              </StyledTableCell>
              <StyledTableCell
                style={{
                  backgroundColor: "#BA2B2B",
                  fontWeight: "bolder",
                  fontFamily: "Montserrat",
                }}
              >
                Director
              </StyledTableCell>
              <StyledTableCell
                style={{
                  backgroundColor: "#BA2B2B",
                  fontWeight: "bolder",
                  fontFamily: "Montserrat",
                }}
              >
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <StyledTableRow>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {movies.indexOf(movie) + 1}
                </StyledTableCell>
                <StyledTableCell style={{ fontFamily: "Montserrat" }}>
                  {movie.Title}
                </StyledTableCell>
                <StyledTableCell style={{ fontFamily: "Montserrat" }}>
                  {movie.Year}
                </StyledTableCell>
                <StyledTableCell style={{ fontFamily: "Montserrat" }}>
                  {movie.Director}
                </StyledTableCell>
                <StyledTableCell>
                  <button type="button" onClick={() => handleDelete(movie._id)}>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      style={{
                        color: "white",
                        margin: "0 60px 0 0",
                        paddingBottom: "3px",
                        fontSize: "25px",
                      }}
                    ></FontAwesomeIcon>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAddMovie(false);
                      setButtonPopUp(true);
                      setMovieId(movie._id);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{
                        color: "white",
                        margin: "0 60px 0 0",
                        paddingBottom: "3px",
                        fontSize: "25px",
                      }}
                    ></FontAwesomeIcon>
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button
        onClick={() => {
          handleAddMovie();
        }}
      >
        <FontAwesomeIcon
          icon={faSquarePlus}
          style={{
            color: "white",
            margin: "-60px 1987px -28px 2px",
            paddingBottom: "3px",
            fontSize: "35px",
          }}
        ></FontAwesomeIcon>
      </button>

      <PopUp
        trigger={buttonPopUp}
        setTrigger={setButtonPopUp}
        baseUrl={baseURL}
        movieId={movieId}
        addMovie={addMovie}
      >
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{
              color: "#FF9C07",
              margin: "0 10px 0 0",
              paddingBottom: "3px",
              fontSize: "50px",
            }}
          ></FontAwesomeIcon>
          <h1 style={{ color: "white", marginTop: "9px" }}>
            Need to {addMovie ? "Add a Movie" : "Change"}?
          </h1>
        </div>
      </PopUp>
    </div>
  );
}

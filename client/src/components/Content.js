import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
// import { getMovies, createMovie, updateMovie, deleteMovie} from '../utils/API';

const baseURL = "http://localhost:3001/api/movies/";

const customTheme = createTheme({
    palette:{
        primary: {
            main: '#171515'
        },
        secondary: {
            main: '#2F2929'
        }
    }
})

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
    '&:nth-of-type(odd)': {
      backgroundColor: customTheme.palette.primary.main,
    },
    '&:nth-of-type(even)': {
        backgroundColor: customTheme.palette.secondary.main,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function Content() {
    const [movies, setMovies] = useState('');

    //Get request
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setMovies(response.data);
      });
    }, []);

    if (!movies) return null;
    console.log(movies);

    //Delete request
    const handleDelete = (id) => {
      console.log(id);
      axios.delete(`${baseURL}${id}`)
          .then(() => {
            alert("Movie has been deleted.");
          })
      //Temporarily using this approach (Will switch to delete and show later)
      window.location.reload();
    }

    return (
        <div style={{marginTop: '-103px'}}>
        <FontAwesomeIcon icon={faSquarePlus} style={{color:'white', margin:'-39px 2000px 11px 14px', paddingBottom:'3px', fontSize:'35px'}}></FontAwesomeIcon>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
            <TableRow style={{maxHeight: "20%"}}>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}}>Number</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}}>Movie Name</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}}>Year</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}}>Director</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}}>Actions</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {movies.map((movie) => (
                <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                {movies.indexOf(movie)+1}
                </StyledTableCell>
                <StyledTableCell>{movie.Title}</StyledTableCell>
                <StyledTableCell>{movie.Year}</StyledTableCell>
                <StyledTableCell>{movie.Director}</StyledTableCell>
                <StyledTableCell>
                    <button type="button" onClick={() => handleDelete(movie._id)}><FontAwesomeIcon icon={faTrashCan} style={{color:'white', margin:'0 60px 0 0', paddingBottom:'3px', fontSize:'25px'}}></FontAwesomeIcon></button>
                    <button><FontAwesomeIcon icon={faPenToSquare} style={{color:'white', margin:'0 60px 0 0', paddingBottom:'3px', fontSize:'25px'}}></FontAwesomeIcon></button>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
    }

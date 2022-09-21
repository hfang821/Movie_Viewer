import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme } from '@mui/material/styles';
import { getMovies, createMovie, updateMovie, deleteMovie} from '../utils/API';

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
  
  function createData(id, movieName, year, director) {
    return { id, movieName, year, director};
  }
  


  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];


export default function Content() {

    const getMovieInfo = async () => {
        try {
            const response = await getMovies();

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
            <TableRow style={{maxHeight: "20%"}}>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}}>Number</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}} >Movie Name</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}} >Year</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}} >Director</StyledTableCell>
                <StyledTableCell style={{backgroundColor: "#BA2B2B", fontWeight: "bolder"}} align="right">Actions</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.movieName}</StyledTableCell>
                <StyledTableCell>{row.year}</StyledTableCell>
                <StyledTableCell>{row.director}</StyledTableCell>
                <StyledTableCell align="right">delete/Edit</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
    }

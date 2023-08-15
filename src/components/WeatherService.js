import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import axios from 'axios';

const WeatherService = () => {
  axios
    .get(
      'http://api.weatherapi.com/v1/current.json?key=f6e22bcaa225462ea27125904231508&q=London'
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <Container>
      <TextField
        id='filled-search'
        label='City'
        type='search'
        variant='filled'
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell align='right'>Weather</TableCell>
              <TableCell align='right'>Temperature</TableCell>
              <TableCell align='right'>Wind</TableCell>
              <TableCell align='right'>Humidity</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default WeatherService;

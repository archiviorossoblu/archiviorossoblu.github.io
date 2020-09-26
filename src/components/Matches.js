import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
  },
});

export default function Matches({matches, seasonID}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="left">Giornata</StyledTableCell>
              <StyledTableCell>Data</StyledTableCell>
              <StyledTableCell>Partita</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {matches.length > 0 ? (
            matches.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left">{row.day}</StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>
            {row.home} {row.gh} - {row.ga} {row.away}
                </StyledTableCell>
              </StyledTableRow>
            ))
      ):(
        seasonID.length>0 ? ( 
        <StyledTableRow key='none'>
          <StyledTableCell align="right" colSpan={4}>
            <LinearProgress />
          </StyledTableCell>  
        </StyledTableRow>  
        ):(
          <StyledTableRow key='none'>
          <StyledTableCell align="right" colSpan={4}>Seleziona stagione.</StyledTableCell>  
        </StyledTableRow>  
        ))}
          </TableBody>
        </Table>
    </TableContainer>
  );
}

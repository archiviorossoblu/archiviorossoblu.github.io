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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  }
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
})
);

export default function Players({players, seasonID, seasonLabel}) {
  const classes = useStyles();
  console.log("season", seasonID);
  console.log("seasonLabel", seasonLabel);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Rosa Stagione {seasonLabel}
          </Typography>
        </Toolbar>
    </AppBar>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>      
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Giocatore</StyledTableCell>
            <StyledTableCell>Ruolo</StyledTableCell>
            <StyledTableCell>Numero</StyledTableCell>
            <StyledTableCell>Presenze</StyledTableCell>
            <StyledTableCell>Gol</StyledTableCell>
            <StyledTableCell>Paese</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {players.length > 0 ? (
            players.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.surname} {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.role}</StyledTableCell>
                <StyledTableCell>{row.number}</StyledTableCell>
                <StyledTableCell>{row.appearances}</StyledTableCell>
                <StyledTableCell>{row.goals}</StyledTableCell>
                <StyledTableCell>{row.country}</StyledTableCell>
              </StyledTableRow>
            ))
      ):(
        seasonID.length>0 ? ( 
        <StyledTableRow key='none'>
          <StyledTableCell align="right" colSpan={6}>
            <LinearProgress />
          </StyledTableCell>  
        </StyledTableRow>  
        ):(
          <StyledTableRow key='none'>
          <StyledTableCell align="right" colSpan={6}>Seleziona stagione.</StyledTableCell>  
        </StyledTableRow>  
        ))}
          </TableBody>
        </Table>
    </TableContainer>
    </Paper>
    </div>
  );
}

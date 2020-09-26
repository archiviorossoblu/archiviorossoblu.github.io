import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import escareRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 12,
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }}));

export default function Seasons({seasons, seasonSelect}) {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const handleQuery = (query) => {
    console.log("query", query);
    setQuery(query);
  };

  let filteredSeasons = seasons;
  if (query) {
    const searchMatch = new RegExp(escareRegExp(query),'i');
    filteredSeasons = seasons.filter((season) => searchMatch.test(season.year));
    console.log(filteredSeasons, filteredSeasons);
  }
  filteredSeasons.sort(sortBy('-year'));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Stagioni Cagliari Calcio
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SportsSoccerIcon />
            </div>
            <InputBase
              placeholder="Cerca.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={(event => handleQuery(event.target.value))}            
            />
          </div>
        </Toolbar>
      </AppBar>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>      
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Anno</StyledTableCell>
              <StyledTableCell align="right">Serie</StyledTableCell>
              <StyledTableCell align="right">Punti</StyledTableCell>
              <StyledTableCell align="right">Posizione</StyledTableCell>
              <StyledTableCell align="right">V</StyledTableCell>
              <StyledTableCell align="right">P</StyledTableCell>
              <StyledTableCell align="right">S</StyledTableCell>
              <StyledTableCell align="right">GF</StyledTableCell>
              <StyledTableCell align="right">GS</StyledTableCell>
              <StyledTableCell align="right">DR</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {filteredSeasons.length > 0 ? (
              filteredSeasons.map((row) => (
                <StyledTableRow key={row.id} onClick={() => seasonSelect(row.id, row.year)}>
                  <StyledTableCell component="th" scope="row">{row.year} </StyledTableCell>
                  <StyledTableCell align="right">{row.league}</StyledTableCell>
                  <StyledTableCell align="right">{row.points}</StyledTableCell>
                  <StyledTableCell align="right">{row.position}</StyledTableCell>
                  <StyledTableCell align="right">{row.v}</StyledTableCell>
                  <StyledTableCell align="right">{row.d}</StyledTableCell>
                  <StyledTableCell align="right">{row.l}</StyledTableCell>
                  <StyledTableCell align="right">{row.gf}</StyledTableCell>
                  <StyledTableCell align="right">{row.gs}</StyledTableCell>
                  <StyledTableCell align="right">{row.dr}</StyledTableCell>
                </StyledTableRow>
              ))
        ):(
          <StyledTableRow key='none'>
              <StyledTableCell align="right" colSpan={10}>
                <LinearProgress />
              </StyledTableCell>  
          </StyledTableRow>  
          )}
            </TableBody>
          </Table>
      </TableContainer>
      </Paper>
    </div>  
  );
}
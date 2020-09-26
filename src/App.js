import React, { useState, useEffect } from 'react';
import './App.css';
//import Header from './components/Header'
import SeasonDetails from './components/SeasonDetails.js'
import Footer from './components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import * as ARBApi from './utils/ARBApi';
import {Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();
  
  const [seasonID, setSeasonID] = useState(0);
  const [seasonLabel, setSeasonLabel] = useState('');
  const [seasons, setSeasons] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (seasonID === 0){
      ARBApi.getAll(`seasons`, seasonID).then((seasons) => {
        setSeasons(seasons);
      });
    }
  }, [seasonID]);

  const changeSeason = (seasonID, year) => {
    ARBApi.getAllByID(`players`, seasonID).then((players) => {
      setPlayers(players);
    });
    ARBApi.getAllByID(`matches`, seasonID).then((matches) => {
      setMatches(matches);
    });
    setSeasonID(seasonID);
    setSeasonLabel(year);
  }

  return( 
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SeasonDetails 
              players={players} 
              matches={matches} 
              seasons={seasons} 
              seasonID={seasonID} 
              seasonLabel={seasonLabel} 
              onSeasonSelect={changeSeason}>
            </SeasonDetails>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Footer 
              title='Archiviorossoblu.it' 
              subtitle='stiamo tornando'>
            </Footer>
          </Paper>
        </Grid>
      </Grid>
  )
  }

          /*
          <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Seasons seasons={seasons} onSeasonSelect={changeSeason}></Seasons>
          </Paper>
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        */
  /*
  <Box className={classes.root}>
      <Header title='Archiviorossoblu.it' subtitle='stiamo tornando'></Header>
      <Box component="main" className={classes.main}>
        <Content 
          seasons={seasons} 
          players={players} 
          matches={matches} 
          changeSeasonDetails={onChangeSeason} 
          seasonID={seasonID}>
        </Content>
      </Box>  
    </Box>
    */

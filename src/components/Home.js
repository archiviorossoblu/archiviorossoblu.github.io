import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Seasons from './Seasons.js'

export default function Welcome({seasons, onSeasonSelect}) {
    return (
        <Fragment>
            <Typography variant='subtitle1' gutterBottom><b>ArchivioRossoBlu.it</b> nasce dalla passione per il <b>Cagliari Calcio</b> e le <b>statistiche</b> di un gruppo di ragazzi. Il sito contiene dati aggiornati dalla stagione <b>1947/1948</b> ad oggi.</Typography>  
            <Seasons seasons={seasons} seasonSelect={onSeasonSelect}></Seasons>
        </Fragment> 
    )
}
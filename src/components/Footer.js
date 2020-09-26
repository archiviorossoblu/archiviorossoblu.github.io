import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({title, copyright}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="subtitle1" className={classes.title}>
            {title} {copyright} 
          </Typography>
          <Typography variant='subtitle2'><p>Questo sito <b>NON</b> è collegato in nessun modo al Cagliari Calcio spa. I marchi e i loghi presenti sul sito sono dei rispettivi proprietari.
            Questo sito non è testata giornalistica e viene aggiornato senza alcuna periodicità.Non può essere considerato in alcun modo un prodotto editoriale ai sensi della legge n. 62 del 7 marzo 2001</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

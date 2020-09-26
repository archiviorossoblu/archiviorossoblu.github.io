import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import Home from './Home.js'
import Players from './Players.js'
import Matches from './Matches.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SeasonDetails({players, matches, seasonID, seasons, onSeasonSelect, seasonLabel}) {
  const classes = useStyles();
  const [valueTab, setValueTab] = useState(0);
  
  useEffect(() => {
    if (seasonID>0){
      setValueTab(1);
    }
  }, [seasonID]);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={valueTab}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" icon={<HomeIcon />} href="/home" {...a11yProps(0)} />
          <LinkTab label="Rosa" icon={<PeopleIcon />} href="/players" {...a11yProps(1)}/>
          <LinkTab label="Campionato" icon={<EventIcon />} href="/matches" {...a11yProps(2)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={valueTab} index={0}>
        <Home seasons={seasons} onSeasonSelect={onSeasonSelect}></Home>
      </TabPanel>
      <TabPanel value={valueTab} index={1} selected>
        <Players players={players} seasonID={seasonID} seasonLabel={seasonLabel}></Players>
      </TabPanel>
      <TabPanel value={valueTab} index={2}>
        <Matches matches={matches} seasonID={seasonID}></Matches>
      </TabPanel>
    </div>
  );
}
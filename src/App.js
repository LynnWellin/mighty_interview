import React from 'react';
import logo from './logo.svg';
import './App.css';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const backgroundImage = 'http://abobaseball-booking.clients.mighty.design/Background.jpg';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  info: {
    display: 'flex',
    width: '100vw',
    height: '50vh',
  },
  landing: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    background: 'gray',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    color: '#ffffff'
  },
  header: {
    padding: '50px 50px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: '#ffffff'
  },
  navbar: {
    zIndex: '2',
    '& button': {
      color: '#ffffff',
      background: 'none',
      border: 'none',
      margin: '20px',
    },
    '& label': {
      padding: '20px'
    }
  },
  background: {
    background: '#00000090',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 1,
    '& button': {
      background: 'red',
      padding: '20px',
      color: '#ffffff',
      fontSize: '20px',
      border: 'none'
    }
  },
  infoPanel: {
    // flex: 1,
    // maxWidth: '48%',
    // margin: '1%',
    background: 'grey'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Hero />
      <div className={classes.info}>
      <Info/>
      <Map />
      </div>
      <footer>

      </footer>
    </div>
  );
}

function Map() {
  const classes = useStyles();
  return (
    <div className={classes.infoPanel}></div>
  )
}

function Info() {
  const classes = useStyles();
  return (
    <div className={classes.infoPanel}></div>
  )
}

function Hero() {
  const classes = useStyles();
  return (
  <div className={classes.landing}>
    <div className={classes.background}/>
    <div className={classes.header}>
      <label>contact info | phone </label>
      <div className={classes.navbar}>
        <button>Book Batting</button>
        <button>Book Golf</button>
        <button>Shop</button>
      </div>
    </div>
    <div className={classes.mainContent}>
      <h1>This is the Title</h1>
      <p>Description Description Description Description Description Description Description Description Description Description Description Description </p>
      <button>Click Here</button>
    </div>
  </div>
  )
}


export default App;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Info from './components/Info';
import Map from './components/Map';
import Hero from './components/Hero';
import Footer from './components/Footer';

const useStyles = makeStyles({
    container: {
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    },
    info: {
        margin: '0 2%',
        display: 'flex',
    },
});

function App() {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);

    function setScreenWidth() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', setScreenWidth);
        return () => window.removeEventListener('resize', setScreenWidth);
    });

    return (
        <div className={classes.container}>
            <Hero width={width} />
            <div className={classes.info} style={{ flexDirection: width > 600 ? 'row' : 'column' }}>
                <Info />
                <Map />
            </div>
            <Footer />
        </div>
    );
}

export default App;

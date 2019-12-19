import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from './Header';
import Content from './LandingContent';

const backgroundImage = 'http://abobaseball-booking.clients.mighty.design/Background.jpg';

const useStyles = makeStyles({
    landing: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: 'gray',
        color: '#ffffff',
    },
    background: {
        background: '#00000066',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
});

export default function Hero({ width }) {
    const classes = useStyles();
    return (
        <div className={classes.landing}>
            <div className={classes.background} />
            <div className={classes.background} />
            <Header width={width} />
            <Content width={width} />
        </div>
    );
}

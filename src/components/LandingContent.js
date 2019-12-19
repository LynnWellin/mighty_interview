import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { theme } from '../css/theme';

const useStyles = makeStyles({
    mainContent: {
        maxWidth: '950px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1,
        '& button': {
            background: theme.palette.red,
            padding: '20px 100px',
            color: '#ffffff',
            fontSize: '20px',
            fontWeight: 'bold',
            border: 'none',
            margin: '10px',
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    desktop: {
        '& h1': {
            fontSize: '50px',
            margin: '10px',
        },
    },
    mobile: {
        '& h1': {
            fontSize: '2em',
            margin: '10px',
        },
    },
});

export default function Content({ width }) {
    const classes = useStyles();
    return (
        <div className={clsx(classes.mainContent, width > 650 ? classes.desktop : classes.mobile)}>
            <div className={classes.details}>
                <h1>ABO BASEBALL TRAINING FACILITY</h1>
                <p>
                    We have 2 fully functional cages with multiple pitching machine access. Cages
                    convert into open training area for all practical needs including dry land
                    training, infield, pitching, and all baseball fundamentals.
                </p>
                <button>BOOK NOW</button>
            </div>
        </div>
    );
}

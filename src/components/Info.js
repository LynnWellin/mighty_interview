import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { theme } from '../css/theme';

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        padding: '40px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hoursInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& h2': {
            color: theme.palette.red,
            padding: '5px 0',
            margin: 0,
        },
        '& label': {
            fontWeight: 'bold',
            lineHeight: '1.5em',
        },
    },
    detail: {
        padding: '15px 5px',
    },
    infoPanel: theme.classes.infoPanel,
});

export default function Info() {
    const classes = useStyles();
    return (
        <div className={clsx(classes.infoPanel, classes.container)}>
            <div className={classes.hoursInfo}>
                <h2>FACILITY HOURS</h2>
                <label>MONDAY - FRIDAY: 2PM - 10PM</label>
                <label>SATURDAY: 9AM - 10PM</label>
                <label>SUNDAY: 12PM - 6PM</label>
            </div>
            <label className={classes.detail}>CLOSED ON ALL STATUTORY HOLIDAYS</label>
            <div className={classes.hoursInfo}>
                <h2>FACILITY RATES</h2>
                <label>BATTING CAGES: $55/HOUR</label>
                <label>GOLF SIMULATOR: $45/HOUR</label>
            </div>
            <label className={classes.detail}>
                FOR CUSTOM RESERVATIONS PLEASE CALL 1-519-535-9230
            </label>
        </div>
    );
}

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        width: '100%',
        padding: '50px 10%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        color: '#ffffff',
        '& label': {
            fontWeight: 'bold',
            padding: '20px',
        },
    },
    mobile: {
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
    },
    navMobile: {
        display: 'flex',
        flexDirection: 'column',
        '& button': {
            margin: '5px',
        },
    },
    navDesk: {
        '& button': {
            margin: '20px',
        },
    },
    navbar: {
        zIndex: '2',
        '& button': {
            color: '#ffffff',
            background: 'none',
            border: 'none',
            fontWeight: 'bold',
        },
    },
});

export default function Header({ width }) {
    const classes = useStyles();
    return (
        <div className={clsx(classes.header, width < 650 && classes.mobile)}>
            <label>1-519-535-9230 | INFO@ABOBASEBALL.COM</label>
            <div
                className={clsx(
                    classes.navbar,
                    (width < 601 && classes.navMobile) || classes.navDesk
                )}
            >
                <button>BOOK BATTING CAGE</button>
                <button>BOOK GOLF SIMULATOR</button>
                <button>SHOP</button>
            </div>
        </div>
    );
}

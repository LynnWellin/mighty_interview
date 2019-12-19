import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { theme } from '../css/theme';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles({
    footer: {
        minHeight: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 2%',
    },
    links: {
        color: theme.palette.red,
        marginLeft: '20px',
    },
    copyright: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: '20px',
    },
    icon: {
        marginRight: '20px',
        fontSize: '1.2em',
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className={classes.links}>
                <InstagramIcon className={classes.icon} />
                <TwitterIcon className={classes.icon} />
                <FacebookIcon className={classes.icon} />
            </div>
            <div className={classes.copyright}>
                <CopyrightIcon fontSize="small" />
                2019, ABOBASEBALL
            </div>
        </footer>
    );
}

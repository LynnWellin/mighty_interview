import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { theme } from '../css/theme';

const mapImage = '/images/map.png';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        overflow: 'hidden',
    },
    address: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5% 0',
        '& label': {
            lineHeight: '1.3em',
        },
    },
    map: {
        backgroundImage: `url(${mapImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        flex: 1,
        background: 'lightgray',
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    infoPanel: theme.classes.infoPanel,
});

export default function Map() {
    const classes = useStyles();
    return (
        <div className={clsx(classes.infoPanel, classes.container)}>
            <div className={classes.map}>
                {/* <img src={mapImage} className={classes.image} /> */}
            </div>
            <div className={classes.address}>
                <label style={{ fontWeight: 'bold' }}>37 TILLSON ST.</label>
                <label>TILLSONBURG, ON N4G 0B7</label>
                <label>info@abobaseball.com</label>
            </div>
        </div>
    );
}

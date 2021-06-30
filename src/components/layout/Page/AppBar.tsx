import { FC } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ToggleProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        shift: {
            marginLeft: theme.appDrawer.drawerWidth,
            width: `calc(100% - ${theme.appDrawer.drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        hide: {
            display: 'none',
        },
    })
);

export const AppBar: FC<ToggleProps> = ({ isOpen, toggleState }) => {
    const classes = useStyles();

    return (
        <MUIAppBar
            color="inherit"
            position="fixed"
            className={clsx(classes.root, {
                [classes.shift]: isOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleState}
                    edge="start"
                    className={clsx({
                        [classes.hide]: isOpen,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Beauty
                </Typography>
            </Toolbar>
        </MUIAppBar>
    );
};

import { FC } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { SectionIcons } from './SectionIcon';
import { ToggleProps, Section, SectionIconsEnum } from '../types';
import { toolbarCss } from '../common/css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: theme.appDrawer.drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            background: 'red',
        },
        drawerOpen: {
            width: theme.appDrawer.drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        ...toolbarCss(theme),
    })
);

export const Drawer: FC<ToggleProps & { sections: Section[] }> = ({
    isOpen,
    toggleState,
    sections,
}) => {
    const classes = useStyles();

    return (
        <MUIDrawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={toggleState}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {sections.map((item) => (
                    <ListItem button key={item.title}>
                        <SectionIcons type={item.icon} />
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
                <ListItem button>
                    <SectionIcons type={SectionIconsEnum.logout} />
                    <ListItemText primary={'Log Out'} />
                </ListItem>
                {/* <Button startIcon={<IconButton />}>Log Out</Button> */}
            </List>
        </MUIDrawer>
    );
};

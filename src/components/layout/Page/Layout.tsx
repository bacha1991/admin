import { FC, useState, useCallback } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from './AppBar';
import { Drawer } from './Drawer';
import { config } from './config';
import { toolbarCss } from './common/css';

// var a = makeStyles((theme: Theme) => console.log(theme));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        ...toolbarCss(theme),
    })
);

export const PageLayout: FC = ({ children }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggleState = useCallback(() => setOpen((s) => !s), []);

    // a();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar isOpen={open} toggleState={toggleState} />
            <Drawer
                isOpen={open}
                toggleState={toggleState}
                sections={config.sections}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
};

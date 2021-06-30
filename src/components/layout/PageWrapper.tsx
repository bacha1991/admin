import { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default,
        },
    })
);

export const PageWrapper: FC = ({ children }) => {
    const classes = useStyles();

    return <div className={classes.root}>{children}</div>;
};

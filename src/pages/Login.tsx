import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PageWrapper } from 'src/components/layout/PageWrapper';

import { useUserLogin } from 'src/context/user';

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        },
        userName: {
            display: 'block',
            // flexWrap: 'wrap',
            // '& > *': {
            //     margin: theme.spacing(1),
            //     width: theme.spacing(16),
            //     height: theme.spacing(16),
            // },
        },
    };
});

const LoginPage: FC = () => {
    const classes = useStyles();
    const { login, isLoading } = useUserLogin();

    return (
        <PageWrapper>
            <Container className={classes.wrapper}>
                <Box width={'20rem'}>
                    <Box mb={1}>
                        <Typography variant="h4" component="h4" align="left">
                            Beauty
                        </Typography>
                        <Typography variant="h6" component="h6" align="left">
                            Admin Dashboard
                        </Typography>
                    </Box>
                    {isLoading && <CircularProgress />}
                    <form action="">
                        <Box mb={1}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                            />
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() =>
                                login(
                                    '',
                                    ''
                                )
                            }
                        >
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default LoginPage;

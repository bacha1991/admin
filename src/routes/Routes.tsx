import { FC } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    RouteComponentProps,
} from 'react-router-dom';
import { AuthorizedRoute } from './AuthorizedRoute';
import { useUser } from 'src/context/user';
import { LOGIN_PATH, ROOT_PATH } from './constants';
import LoginPage from 'src/pages/Login';
import HomePage from 'src/pages/Home';
import NotFound from 'src/pages/404';

const Routes: FC<RouteComponentProps> = () => {
    const {
        state: { isLoggedin },
    } = useUser();

    return (
        <Switch>
            <AuthorizedRoute exact path={ROOT_PATH}>
                <HomePage />
            </AuthorizedRoute>
            <AuthorizedRoute path="/products/:id">
                <HomePage />
            </AuthorizedRoute>
            <AuthorizedRoute path="/contact-us">
                <HomePage />
            </AuthorizedRoute>
            <Route path={LOGIN_PATH}>
                {isLoggedin ? <Redirect to={ROOT_PATH} /> : <LoginPage />}
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
};

export const RoutersWrap: FC = () => {
    return (
        <Router>
            <Route component={Routes} />
        </Router>
    );
};

export default RoutersWrap;

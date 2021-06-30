import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useUser } from 'src/context/user';
import { LOGIN_PATH } from './constants';

export const AuthorizedRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const user = useUser();

    console.log(user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.state.isLoggedin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: LOGIN_PATH,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

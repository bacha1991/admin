import { useContext, useEffect } from 'react';
import { UserContext } from './Provider';
import { useLogin } from 'src/api';

export const useUser = () => {
    const user = useContext(UserContext);

    return user;
};

export const useUserLogin = () => {
    const { setUser } = useUser();
    const { result, fetch } = useLogin();

    useEffect(() => {
        result.data && setUser(true);
    }, [result, setUser]);

    return { login: fetch, isLoading: result.loading };
};

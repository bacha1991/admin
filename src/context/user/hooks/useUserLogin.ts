import { useEffect } from 'react';
import { useUser } from './useUser';
import { useLogin } from 'src/api';

export const useUserLogin = () => {
    const { setUser } = useUser();
    const { result, fetch } = useLogin();

    useEffect(() => {
        result.data && setUser(true);
    }, [result, setUser]);

    return { login: fetch, isLoading: result.loading };
};

import { HOST, AUTHORIZATION_TOKEN } from 'src/api/constants';

import { usePost } from 'src/utils/hooks/fetch';

export const useLogin = () => {
    const { result, fetch: post } = usePost();

    return {
        result,
        fetch: (email: string, password: string) =>
            post(`${HOST}/auth`, {
                mode: 'cors',
                headers: {
                    Authorization: AUTHORIZATION_TOKEN,
                },
                body: JSON.stringify({ email, password }),
            }),
    };
};

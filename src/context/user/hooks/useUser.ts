import { useContext } from 'react';
import { UserContext } from '../Provider';

export const useUser = () => {
    const user = useContext(UserContext);

    return user;
};

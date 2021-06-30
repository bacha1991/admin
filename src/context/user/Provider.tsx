import { createContext, FC } from 'react';
import { useUserReducer } from './hooks';
import { UserState } from './types/state';
import { initialUserState } from './state';

type Context = {
    state: UserState;
    setUser: (status: boolean) => void;
};

export const UserContext = createContext<Context>({
    state: initialUserState,
    setUser: () => {},
});

export const UserProvider: FC = ({ children }) => {
    const { state, setUser } = useUserReducer();

    return (
        <UserContext.Provider
            value={{
                state,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

import { useReducer, Reducer, useCallback } from 'react';
import { ActionNames, ActionTypes } from '../types/action';
import { UserState } from '../types/state';
import { setUserAction } from '../actions';
import { initialUserState } from '../state';

const reducer: Reducer<UserState, ActionTypes> = (state, action) => {
    if (action.type === ActionNames.SET) {
        return { isLoggedin: true };
    }

    return state;
};

export const useUserReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialUserState);
    const setUser = useCallback((s: boolean) => {
        dispatch(setUserAction(s));
    }, []);

    return { state, dispatch, setUser };
};

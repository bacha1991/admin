import { SetUserAction, ActionNames } from './types/action';

export const setUserAction: (p: boolean) => SetUserAction = (
    isLoading: boolean
) => ({
    type: ActionNames.SET,
    payload: {
        isLoading,
    },
});

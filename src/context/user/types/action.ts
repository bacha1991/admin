export enum ActionNames {
    SET = 'SET',
}

type Action<T> = {
    type: ActionNames;
    payload: T;
};

export type SetUserAction = Action<{ isLoading: boolean }>;

export type ActionTypes = SetUserAction;

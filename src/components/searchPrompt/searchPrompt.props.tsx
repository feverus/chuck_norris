import * as I from '~Store/storeInterfaces';

export type StateType = {
    status: string;
    inputRef: React.RefObject<HTMLInputElement>;
};

export type ApiType = {
    handleInput: (value: string) => void;
};

export type UseSearchPrompt = () => [
    state: StateType,
    api: ApiType
];
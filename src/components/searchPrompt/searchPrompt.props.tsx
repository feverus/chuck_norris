import * as I from '~Store/storeInterfaces';

export type StateType = {
    sample: number;
};

export type ApiType = {
    sampleApi: () => void;
};

export type UseSearchPrompt = () => [
    state: StateType,
    api: ApiType
];
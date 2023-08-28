import * as I from '~Store/storeInterfaces';

export type StateType = {
    sample: number;
};

export type ApiType = {
    sampleApi: () => void;
};

export type UseContent = () => [
    state: StateType,
    api: ApiType
];
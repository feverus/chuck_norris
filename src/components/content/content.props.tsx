import * as I from '~Store/storeInterfaces';

export type UseContent = () => [
    items: I.ApiSearchDataItem[],
    hasMore: boolean,
    getMore: () => void,
];
export interface ApiSearchDataItem {
    categories: string[],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string,   
}

export interface ApiSearchData {
    total: number,
    result: ApiSearchDataItem[],
}
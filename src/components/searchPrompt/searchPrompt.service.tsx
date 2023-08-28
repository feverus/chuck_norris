import { useState, useEffect } from 'react'
import * as I from '~Store/storeInterfaces'
import searchDataStore from '~Store/searchDataStore'
import {getApiSearch} from '~Api/getApi'
import { UseSearchPrompt } from './searchPrompt.props'

const useSearchPrompt:UseSearchPrompt = () => {    

    const [data, setData] = useState<number>(1)

    useEffect(() => {
        console.log('welcome to main')
    }, [])

    const sampleApi = () => {
        return
    }

    const state = {
        sample: data,
    }

    const api = {
        sampleApi:sampleApi,
    }

    return (
        [state, api]
    )
}
export default useSearchPrompt
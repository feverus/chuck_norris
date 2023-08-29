import { useState, useEffect } from 'react'
import * as I from '~Store/storeInterfaces'
import { UseMain } from './main.props'

const useMain:UseMain = () => {    

    const [data, setData] = useState<number>(1)

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
export default useMain
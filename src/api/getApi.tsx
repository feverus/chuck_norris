import ky from 'ky'
import * as I from '~Store/storeInterfaces'
import urlApi  from './urlApi'

export const getApiSearch = async (queryString: string): Promise<I.ApiSearchData|string> => {
	try {
		const json:any = await ky.get(`${urlApi}?query=${queryString}`).json()
		return json
	} catch (error) {
		return (error as Error).message
	}
}
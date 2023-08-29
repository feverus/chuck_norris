import { useEffect, useState } from 'react'
import * as I from '~Store/storeInterfaces'
import searchDataStore from '~Store/searchDataStore'
import { UseContent } from './content.props'

const useContent:UseContent = () => {   
	const itemsInPart = 50 
	const [items, setItems] = useState<I.ApiSearchDataItem[]>([])
	const [part, setPart] = useState(0)
	const [hasMore, setHasMore] = useState(true)

	useEffect(() => {
		setPart(0)
		setHasMore(true)
		getMore()
	}, [searchDataStore.searchData])	

	const getMore = () => {
		const maxToLoad = itemsInPart * (part + 1)
		if (maxToLoad > searchDataStore.searchData.length)
			setHasMore(false)
		setItems(searchDataStore.searchData.slice(0, maxToLoad))
		setPart(part + 1)
	}

	return (
		[items, hasMore, getMore]
	)
}
export default useContent
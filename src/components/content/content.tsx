import searchDataStore from '~Store/searchDataStore'
import C from './content.module.scss'
import { Joke } from './joke'
import useContent from './content.service'
import InfiniteScroll from 'react-infinite-scroller'

export function Content() {
	const [items, hasMore, getMore] = useContent()

	return (
		searchDataStore.searchData.length > 0 ? 
			<InfiniteScroll
				pageStart={0}
				loadMore={getMore}
				hasMore={hasMore}
				className={C.jokes}
			>
				{items.map(item => 
					<Joke
						item={item}
						key={item.id}
					/>)
				} 
			</InfiniteScroll>
			:
			<></>
	)
}
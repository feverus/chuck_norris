import searchDataStore from '~Store/searchDataStore'
import C from './content.module.scss'
import { Joke } from './joke'

export function Content() {
	return (
		searchDataStore.searchData.length > 0 ? 
			<div className={C.jokes}>
			{searchDataStore.searchData.map(item => 
				<Joke
					item={item}
					key={item.id}
				/>)
			}		
			</div>
			:
			<></>
	)
}
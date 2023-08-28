import searchDataStore from '~Store/searchDataStore'
import useMain from "./main.service"
import C from './content.module.scss'
import Content from '~Components/content'
import SearchPrompt from '~Components/searchPrompt'

export function Main() {
	const [state, api] = useMain() 

	return (
		<section>
			<SearchPrompt />
			<Content />
		</section>
	)
}
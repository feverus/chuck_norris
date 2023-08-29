import searchDataStore from '~Store/searchDataStore'
import useMain from "./main.service"
import C from './main.module.scss'
import Content from '~Components/content'
import SearchPrompt from '~Components/searchPrompt'

export function Main() {
	const [state, api] = useMain() 

	return (
		<main>
			<SearchPrompt />
			<Content />
		</main>
	)
}
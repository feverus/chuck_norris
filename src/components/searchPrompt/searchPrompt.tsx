import searchDataStore from '~Store/searchDataStore'
import useSearchPrompt from "./searchPrompt.service";
import C from './content.module.scss'

export function SearchPrompt() {
	const [state, api] = useSearchPrompt() 

	return (
		<>hello</>
	)
}
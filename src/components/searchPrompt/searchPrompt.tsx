import searchDataStore from '~Store/searchDataStore'
import useSearchPrompt from "./searchPrompt.service";
import C from './searchPrompt.module.scss'

export function SearchPrompt() {
	const [state, api] = useSearchPrompt() 

	return (<>
		<div className={C.search}>
			<input
				type="text"
				placeholder="Search jokes..." 
				ref={state.inputRef}
				onChange={(e) => api.handleInput(e.target.value)}
			/>
		</div>
		<div className={C.status}>
			{state.status}
		</div>
	</>)
}
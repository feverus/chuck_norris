import useSearchPrompt from "./searchPrompt.service"
import C from './searchPrompt.module.scss'

export function SearchPrompt() {
	const [status, inputRef, handleInput] = useSearchPrompt() 

	return (<>
		<div className={C.search}>
			<input
				type="text"
				placeholder="Search jokes..." 
				ref={inputRef}
				onChange={(e) => handleInput(e.target.value)}
			/>
		</div>
		<div className={C.status}>
			{status}
		</div>
	</>)
}
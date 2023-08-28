import searchDataStore from '~Store/searchDataStore'
import useContent from "./content.service";
import C from './content.module.scss'

export function Content() {
	const [state, api] = useContent() 

	return (
		<>hello</>
	)
}
import {observer, inject} from "mobx-react";
import {SearchPrompt} from './searchPrompt'

export default
	inject('searchDataStore')
	(observer(SearchPrompt));

export type { UseSearchPrompt } from './searchPrompt.props'
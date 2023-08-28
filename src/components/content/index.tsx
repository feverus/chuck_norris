import {observer, inject} from "mobx-react";
import {Content} from './content'

export default
	inject('searchDataStore')
	(observer(Content));

export type { StateType, ApiType, UseContent } from './content.props'
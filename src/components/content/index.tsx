import {observer, inject} from "mobx-react";
import {Content} from './content'

export default
	inject('searchDataStore')
	(observer(Content));

export type { UseContent } from './content.props'
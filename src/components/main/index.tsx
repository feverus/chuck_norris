import {observer, inject} from "mobx-react";
import {Main} from './main'

export default
	inject('searchDataStore')
	(observer(Main));

export type { StateType, ApiType, UseMain } from './main.props'
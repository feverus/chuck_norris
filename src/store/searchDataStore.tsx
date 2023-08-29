import {makeAutoObservable, observable, action} from 'mobx'
import * as I from '~Store/storeInterfaces'

export class SearchDataStore {
	searchData:I.ApiSearchDataItem[] = []

	constructor() {
		makeAutoObservable(this, {
			setSearchData: action,
		})
		this.searchData = observable.array(
			this.searchData, {deep:true}
		)
	}
	
	setSearchData(data:I.ApiSearchDataItem[]) {
			this.searchData = data
	}
}

const searchDataStore = new SearchDataStore()
export default searchDataStore
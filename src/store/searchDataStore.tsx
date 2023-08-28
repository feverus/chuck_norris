import {makeAutoObservable, observable, action} from 'mobx'
import * as I from '~Store/storeInterfaces'

export class SearchDataStore {
	total: number = 0
	searchData:I.ApiSearchDataItem[] = []

	constructor() {
		makeAutoObservable(this, {
			setSearchData: action,
		})
		this.searchData = observable.array(
			this.searchData, {deep:true}
		)
	}
	
	setSearchData(data:I.ApiSearchData) {
			this.searchData = data.result
			this.total = data.total
	}
}

const searchDataStore = new SearchDataStore()
export default searchDataStore
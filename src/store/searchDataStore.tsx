import {makeAutoObservable, observable, action} from 'mobx'
import * as I from '~Store/storeInterfaces'

export class SearchDataStore {
	unmountingDuration = 250
	searchData:I.ApiSearchDataItem[] = []
	isUnmounting = false

	constructor() {
		makeAutoObservable(this, {
			setSearchData: action,
			isUnmounting: observable,
		})
		this.searchData = observable.array(
			this.searchData, {deep:true}
		)
	}
	
	setSearchData(data:I.ApiSearchDataItem[]) {
		if (this.searchData.length !== 0) this.isUnmounting = true
		setTimeout(() => {
			this.isUnmounting = false
			this.searchData = data
		}, this.unmountingDuration)
	}
}

const searchDataStore = new SearchDataStore()
export default searchDataStore
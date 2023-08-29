import { useState, useEffect, useRef } from 'react'
import * as I from '~Store/storeInterfaces'
import searchDataStore from '~Store/searchDataStore'
import {getApiSearch} from '~Api/getApi'
import { UseSearchPrompt } from './searchPrompt.props'
import {useDebounce} from '~Lib/useDebounce'

const useSearchPrompt:UseSearchPrompt = () => {    

	const [status, setStatus] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounce<string>(value)

	useEffect(() => {
		if (inputRef?.current) {
			inputRef.current.focus()
		}     
	}, [])

	useEffect(() => {
		if (debouncedValue.length === 0) return
		getApiSearch(debouncedValue)
		.then(res => {
			if (typeof(res) === 'string') {
				setStatus(res)
				return
			}
			setStatus(`Found jokes: ${res.total.toString()}`)
			searchDataStore.setSearchData(res.result)
		})

	}, [debouncedValue])
	
	
	const handleInput = (value: string) => {
		if (value.length === 0) {
			setStatus('')
			return
		}
		if (value.length <= 3) {
			setStatus('Need more than 3 characters to search.')
			return
		}
		setStatus('Searchig in process. Please wait.')
		setValue(value)
	}

	const state = {
		status: status,
		inputRef: inputRef,
	}

	const api = {
		handleInput:handleInput,
	}

	return (
		[state, api]
	)
}
export default useSearchPrompt
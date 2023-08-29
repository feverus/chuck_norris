import { useState, useEffect, useRef } from 'react'
import {useDebounce} from '~Lib/useDebounce'
import {getApiSearch} from '~Api/getApi'
import searchDataStore from '~Store/searchDataStore'
import { UseSearchPrompt } from './searchPrompt.props'

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

	return (
		[status, inputRef, handleInput]
	)
}
export default useSearchPrompt
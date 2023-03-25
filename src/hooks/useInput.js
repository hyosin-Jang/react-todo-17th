import {useState, useCallback} from "react"

const useInput = (defaultValue) => {
	const [value, setValue] = useState(defaultValue)

	const onChange = useCallback(({target}) => {
		const {value} = target
		setValue(value)
	}, [])
	return {value, onChange, setValue}
}

export default useInput

import {useState} from "react"

const useInput = (defaultValue) => {
	const [value, setValue] = useState(defaultValue)

	const onChange = ({target}) => {
		const {value} = target
		setValue(value)
	}
	return {value, onChange, setValue}
}

export default useInput

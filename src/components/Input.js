import styled from "styled-components"

const Input = ({onChange}) => {
	return (
		<input
			type="text"
			onChange={onChange}
			autoFocus
			required
		/>
	)
}

export default Input

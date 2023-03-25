import React from "react"

const Input = ({onChange}) => {
	return (
		<>
			<input
				placeholder="Type to do list"
				className="input"
				onChange={onChange}
				autoFocus
				required
				type="text"
				name="text"
			/>
		</>
	)
}

export default React.memo(Input)

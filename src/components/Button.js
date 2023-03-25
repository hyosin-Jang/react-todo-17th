import React from "react"

const Button = ({onClick, clicked, type, value, className}) => {
	const getClassName = () => {
		return clicked === value ? `button ${className} button-clicked` : `button ${className}`
	}
	return (
		<button
			type={type}
			onClick={onClick}
			value={value}
			className={getClassName()}>
			{value}
		</button>
	)
}

export default React.memo(Button)

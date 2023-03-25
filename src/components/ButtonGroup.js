import React, {useState, useCallback, useEffect} from "react"
import {Button} from "../components"

// n개의 버튼 중에 하나만 클릭되도록 하는 컴포넌트
const n = 5

const ButtonGroup = ({handlePriority}) => {
	const [clicked, setClicked] = useState() // 현재 클릭된 버튼

	const handleClick = useCallback((e) => {
		e.preventDefault()
		if (clicked !== e.target.value) setClicked(e.target.value)
		else setClicked()
	}, [])

	useEffect(() => {
		handlePriority(clicked)
	}, [clicked])

	return (
		<>
			{Array.from({length: n}, (_, i) => i + 1)
				.sort((a, b) => b - a)
				.map((value) => (
					<Button
						key={value}
						className={`button-priority`}
						clicked={clicked}
						onClick={handleClick}
						type="button"
						value={value.toString()}
					/>
				))}
		</>
	)
}

export default React.memo(ButtonGroup)

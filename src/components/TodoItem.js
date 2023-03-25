import styled from "styled-components"
import React from "react"
const TodoItem = ({item, toggleStatus, removeItem}) => {
	const getPriorityToTagSize = (priority) => {
		switch (priority) {
			case "5":
				return <h1>{item.value}</h1>
			case "4":
				return <h2>{item.value}</h2>
			case "3":
				return <h3>{item.value}</h3>
			case "2":
				return <h4>{item.value}</h4>
			case "1":
				return <h5>{item.value}</h5>
			default:
				return <span>{item.value}</span>
		}
	}

	return (
		<ItemWrapper
			onClick={(e) => {
				toggleStatus(item.id, e)
			}}
			key={item.id}>
			<button
				type="button"
				className="button icon-trash"
				onClick={(e) => {
					removeItem(item.id, e)
				}}></button>
			{getPriorityToTagSize(item.priority)}
		</ItemWrapper>
	)
}

export default React.memo(TodoItem)

const ItemWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 3px 0 3px 10px;
	cursor: pointer;
	span {
		margin-left: 10px;
	}
`

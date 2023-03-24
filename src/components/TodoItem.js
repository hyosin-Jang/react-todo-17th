import styled from "styled-components"

const TodoItem = ({item, toggleStatus, removeItem}) => {
	return (
		<ItemWrapper
			onClick={(e) => {
				toggleStatus(item.id, e)
			}}
			key={item.id}>
			<button
				type="button"
				className="button"
				onClick={(e) => {
					removeItem(item.id, e)
				}}>
				❎
			</button>
			<span>{item.value}</span>
		</ItemWrapper>
	)
}

export default TodoItem

const ItemWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 3px 0 3px 10px;
	cursor: pointer;

	span {
		margin-left: 10px;
	}
`

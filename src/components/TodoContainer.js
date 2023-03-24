import TodoItem from "./TodoItem"

const TodoContainer = ({todo, status, toggleStatus, removeItem}) => {
	return (
		<div>
			{todo &&
				todo.map(
					(item) =>
						item.status === status && (
							<TodoItem
								key={item.id}
								item={item}
								toggleStatus={toggleStatus}
								removeItem={removeItem}
							/>
						)
				)}
		</div>
	)
}

export default TodoContainer

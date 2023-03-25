import React from "react"
import TodoItem from "./TodoItem"

const TodoContainer = ({todo, toggleStatus, removeItem}) => {
	return (
		<>
			{todo &&
				todo
					.sort((a, b) => b.priority - a.priority)
					.map((item) => {
						return (
							<TodoItem
								key={item.id}
								item={item}
								toggleStatus={toggleStatus}
								removeItem={removeItem}
							/>
						)
					})}
		</>
	)
}

export default React.memo(TodoContainer)

import styled from "styled-components"
import {useState, useCallback} from "react"
import {Input, Button, TodoContainer} from "../components"
import useInput from "../hooks/useInput"

const TODO = false
const DONE = true

const Todo = () => {
	const [todo, setTodo] = useState([])

	const input = useInput("")

	const addItem = (value) => {
		const id = new Date().valueOf()
		const item = {
			id: id,
			value: value,
			status: TODO,
		}
		setTodo([...todo, item])
	}

	const toggleStatus = (id) => {
		const updateArray = todo.map((item) => (item.id === id ? {...item, status: !item.status} : item))
		setTodo(updateArray)
	}

	const removeItem = (id, e) => {
		const updateArray = todo.filter((item) => item.id !== id)
		setTodo(updateArray)
		e.stopPropagation()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const inputValueTrim = input.value.trim()

		if (inputValueTrim === "") {
			alert("빈 문자열입니다.")
			return
		}
		addItem(inputValueTrim)
		e.target.reset()
	}

	return (
		<Wrapper>
			<section className="container-input">
				<h1 className="title">Things to do</h1>
				<form
					className="input-wrapper"
					onSubmit={handleSubmit}>
					<Input onChange={input.onChange} />
					<Button type="submit" />
				</form>
			</section>
			<section className="todo">
				<h2 className="title">🔥to do</h2>
				<TodoContainer
					todo={todo}
					status={TODO}
					toggleStatus={toggleStatus}
					removeItem={removeItem}
				/>
			</section>
			<section className="todo">
				<h2 className="title">🎯done</h2>
				<TodoContainer
					todo={todo}
					status={DONE}
					toggleStatus={toggleStatus}
					removeItem={removeItem}
				/>
			</section>
		</Wrapper>
	)
}

export default Todo

const Wrapper = styled.main`
	width: 22rem;
	height: 40rem;
	border-radius: 20px;
	box-shadow: 0px 0px 20px rgb(125, 123, 125);
	display: flex;
	flex-direction: column;
	background-color: white;

	.input-wrapper {
		display: flex;
		margin-bottom: 20px;
		justify-content: center;
	}

	section.todo {
		flex: 0.5;
		overflow-y: auto;
		border-top: 1px solid rgb(213, 213, 213);
	}
`

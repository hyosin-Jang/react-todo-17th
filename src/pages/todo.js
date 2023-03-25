import styled from "styled-components"
import {useState, useCallback, useEffect} from "react"
import {Input, Button, TodoContainer, ButtonGroup, Animation} from "../components"
import useInput from "../hooks/useInput"

const Todo = () => {
	const [todo, setTodo] = useState([])
	const [done, setDone] = useState([])
	const [priority, setPriority] = useState()
	const [loading, setLoading] = useState(false)

	const input = useInput("")
	const setLoadingStop = () => setLoading(false)

	const saveToDos = () => {
		localStorage.setItem("todos", JSON.stringify(todo))
		localStorage.setItem("dones", JSON.stringify(done))
	}

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos")) ?? []
		const dones = JSON.parse(localStorage.getItem("dones")) ?? []
		setTodo(todos)
		setDone(dones)
	}, [])

	useEffect(() => {
		if (todo.length === 0 && done.length > 0) {
			setLoading(true)
			setTimeout(setLoadingStop, 3000)
		}
	}, [todo])

	const handlePriority = useCallback((newPriority) => setPriority(newPriority), [])

	const addItem = (value) => {
		const id = new Date().valueOf()
		const item = {
			id: id,
			value: value,
			priority: priority, // 현재 인풋의 중요도 (우선순위)
		}
		setTodo([...todo, item])
		saveToDos()
	}

	const toggleStatus = useCallback(
		(id) => {
			let isTodo = todo.find((item) => item.id === id)
			if (isTodo) {
				const updateTodo = todo.filter((item) => item.id !== id)
				setTodo(updateTodo)
				setDone([...done, isTodo])
			} else {
				isTodo = done.find((item) => item.id === id)
				const updateDone = done.filter((item) => item.id !== id)
				setDone(updateDone)
				setTodo([...todo, isTodo])
			}
			saveToDos()
		},
		[todo, done]
	)

	const removeItem = useCallback(
		(id, e) => {
			let isTodo = todo.find((item) => item.id === id)
			if (isTodo) {
				const updateArray = todo.filter((item) => item.id !== id)
				setTodo(updateArray)
			} else {
				const updateArray = done.filter((item) => item.id !== id)
				setDone(updateArray)
			}
			e.stopPropagation()
			saveToDos()
		},
		[todo, done]
	)

	const resetInput = (e) => {
		input.setValue("")
		e.target.reset()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const inputValueTrim = input.value.trim()

		if (inputValueTrim === "") {
			alert("빈 문자열입니다.")
			resetInput(e)
			return
		}
		if (!priority) {
			alert("중요도를 선택해주세요!")
			return
		}

		addItem(inputValueTrim)
		resetInput(e)
	}

	return (
		<Wrapper>
			<section className="container-input">
				<h1 className="title">Todo list</h1>
				<form
					className="form"
					onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<Input onChange={input.onChange} />
						<Button
							type="submit"
							value={"+"}
						/>
					</div>
					<div className="button-wrapper">
						<ButtonGroup handlePriority={handlePriority} />
					</div>
				</form>
			</section>
			{loading && <Animation />}
			<section className="todo-content">
				<h2 className="title">💪TODO ({todo && todo.length})</h2>
				<TodoContainer
					todo={todo}
					toggleStatus={toggleStatus}
					removeItem={removeItem}
				/>
			</section>
			<section className="todo-content">
				<h2 className="title">😆 DONE ({done && done.length})</h2>
				<TodoContainer
					todo={done}
					toggleStatus={toggleStatus}
					removeItem={removeItem}
				/>
			</section>
		</Wrapper>
	)
}

export default Todo

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	width: 25rem;
	height: 40rem;
	border-radius: 30px;
	background-color: white;
	box-shadow: 0px 0px 20px grey;

	.container-input {
		.title {
			display: flex;
			justify-content: center;
			padding: 20px 0;
		}
		.form {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: 0 20px 20px 20px;

			.input-wrapper {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.button-wrapper {
				display: flex;
				justify-content: center;
				gap: 20px;
				margin-top: 15px;
			}
		}
	}

	.todo-content {
		flex: 0.5;
		overflow-y: auto;
		border-top: 1px solid rgb(213, 213, 213);

		&::-webkit-scrollbar {
			display: none;
		}
		.title {
			font-size: 1rem;
			margin: 1rem;
		}
	}
`

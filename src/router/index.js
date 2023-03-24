import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Todo from "../pages/todo"

const TodoRouter = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Todo />}
				/>
			</Routes>
		</Router>
	)
}

export default TodoRouter

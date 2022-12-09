import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo></Todo>
		</BrowserRouter>
	);
};

const task_list = ["Go To Grocery Shop", "Write Stories", "Adjust UI"];

const addTodo = (tasks) => {
	const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
	const buttonElement = screen.getByText(/Add/i);

	tasks.forEach((task) => {
		fireEvent.change(inputElement, {
			target: {
				value: task,
			},
		});
		fireEvent.click(buttonElement);
	});
};

describe("Todo Test", () => {
	it("should complete an integration test", () => {
		render(<MockTodo></MockTodo>);
		addTodo(task_list);
		const divElements = screen.getAllByTestId("todo_holder");
		const paragraphElement = screen.getByText(
			`${divElements.length} tasks left`
		);
		//expect(divElements.length).toBe(3);
		expect(paragraphElement).toBeInTheDocument();
	});

	it("should test clicking on a task, creates a penned through line", () => {
		render(<MockTodo></MockTodo>);
		addTodo(task_list);
		const divElements = screen.getAllByTestId("todo_holder");
		divElements.forEach((div) => {
			fireEvent.click(div);
			expect(div).toHaveClass("todo-item-active");
		});
	});
});

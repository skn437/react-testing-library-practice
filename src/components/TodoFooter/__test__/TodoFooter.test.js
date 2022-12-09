import TodoFooter from "../TodoFooter";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
	return (
		<BrowserRouter>
			<TodoFooter
				numberOfIncompleteTasks={numberOfIncompleteTasks}
			></TodoFooter>
		</BrowserRouter>
	);
};

it("should render the correct amount of incomplete tasks", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={5}></MockTodoFooter>);
	const paragraphElement = screen.getByText(/5 tasks left/i);
	expect(paragraphElement).toBeInTheDocument();
});

it("should render render 'task' when the number of incomplete task is one", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeInTheDocument();
});

it("should render render 'task' when the number of incomplete task is one", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeTruthy();
});

it("should render render 'task' when the number of incomplete task is one", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).toBeVisible();
});

it("should render render 'task' when the number of incomplete task is one", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
	const paragraphElement = screen.getByText(/1 task left/i);
	expect(paragraphElement).not.toBeFalsy();
});

it("should render render 'task' when the number of incomplete task is one", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
	const paragraphElement = screen.getByTestId("para");
	expect(paragraphElement.textContent).not.toBe("1 tasks left");
});

it("should render render 'task' when the number of incomplete task is one", () => {
	render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
	const paragraphElement = screen.getByTestId("para");
	expect(paragraphElement.textContent).toBe("1 task left");
});

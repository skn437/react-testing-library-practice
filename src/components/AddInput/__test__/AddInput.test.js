import AddInput from "../AddInput";
import { render, screen, fireEvent } from "@testing-library/react";

const mockSetTodo = jest.fn();

describe("Add Input ", () => {
	it("should render input element", () => {
		render(
			<AddInput
				todos={[]}
				setTodos={mockSetTodo}
			></AddInput>
		);
		const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
		expect(inputElement).toBeInTheDocument();
	});

	it("should render be able to type in input", () => {
		render(
			<AddInput
				todos={[]}
				setTodos={mockSetTodo}
			></AddInput>
		);
		const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
		fireEvent.change(inputElement, {
			target: {
				value: "Go Grocery Shopping",
			},
		});
		expect(inputElement.value).toBe("Go Grocery Shopping");
	});

	it("should have empty input when add button is clicked", () => {
		render(
			<AddInput
				todos={[]}
				setTodos={mockSetTodo}
			></AddInput>
		);
		const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
		fireEvent.change(inputElement, {
			target: {
				value: "Go Grocery Shopping",
			},
		});
		const buttonElement = screen.getByRole("button", {
			name: /Add/i,
		});
		fireEvent.click(buttonElement);
		expect(inputElement.value).toBe("");
	});
});

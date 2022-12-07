import Header from "../Header";
import { render, screen } from "@testing-library/react";

it("should render same text passed into title prop", () => {
	render(<Header title="My Missy"></Header>);
	const headingElement = screen.getByText(/My Missy/i);
	expect(headingElement).toBeInTheDocument();
});

// it("should render same text passed into title prop", () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElement = screen.getByRole("heading");
// 	expect(headingElement).toBeInTheDocument();
// });

it("should render same text passed into title prop", () => {
	render(<Header title="My Missy"></Header>);
	const headingElement = screen.getByRole("heading", {
		name: "My Missy",
	});
	expect(headingElement).toBeInTheDocument();
});

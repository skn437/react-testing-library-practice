import Header from "../Header";
import { render, screen } from "@testing-library/react";

//! Get By

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

// it("should render same text passed into title prop", () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElement = screen.getByRole("heading", {
// 		name: "My Missy",
// 	});
// 	expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElement = screen.getByTitle("header");
// 	expect(headingElement).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElement = screen.getByTestId("header-1");
// 	expect(headingElement).toBeInTheDocument();
// });

// //! Find By

// it("should render same text passed into title prop", async () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElement = await screen.findByText(/My Missy/i);
// 	expect(headingElement).toBeInTheDocument();
// });

// //! Query By

// it("should render same text passed into title prop", async () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElement = await screen.queryByText(/dogs/i);
// 	expect(headingElement).not.toBeInTheDocument();
// });

// //! Get All By
// it("should render same text passed into title prop", () => {
// 	render(<Header title="My Missy"></Header>);
// 	const headingElements = screen.getAllByRole("heading");
// 	expect(headingElements.length).toBe(2);
// });

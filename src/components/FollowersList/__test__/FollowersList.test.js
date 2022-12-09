import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList></FollowersList>
		</BrowserRouter>
	);
};

describe("Followers List", () => {
	it("should render Followers List", async () => {
		render(<MockFollowersList></MockFollowersList>);
		const divElement = await screen.findByTestId("follower-item-0");
		screen.debug();
		expect(divElement).toBeInTheDocument();
	});

	// it("should render All Followers List", async () => {
	// 	render(<MockFollowersList></MockFollowersList>);
	// 	const divElements = await screen.findAllByTestId(/follower-item/i);
	// 	expect(divElements.length).toBe(5);
	// });
});

import { render, screen } from "@testing-library/react";
import Navbar from ".";
import { expect } from "vitest";

function renderComponent() {
	render(<Navbar />);
	return {
		heading: screen.getByRole("heading", { level: 1 }),
	};
}

describe("test cases for Navbar component layout", () => {
	it("should render page title", () => {
		const { heading: heading } = renderComponent();
		expect(heading).toHaveTextContent(/development books store/i);
	});
});

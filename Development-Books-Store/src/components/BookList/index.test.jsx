import { render, screen } from "@testing-library/react";
import BookList from ".";
import { expect } from "vitest";

function renderComponent() {
	render(<BookList />);
	return {
		heading: screen.getByRole("heading", { level: 2 }),
	};
}

describe("test cases for book list component", () => {
	it("should render component heading", () => {
		const { heading: heading } = renderComponent();
		expect(heading).toHaveTextContent(/books available/i);
	});
});

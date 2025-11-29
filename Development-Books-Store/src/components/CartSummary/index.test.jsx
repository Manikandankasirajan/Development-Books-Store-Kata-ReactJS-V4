import { render, screen } from "@testing-library/react";
import CartSummary from ".";
import { expect } from "vitest";

function renderComponent() {
	render(<CartSummary />);
	return {
		heading: screen.getByRole("heading", { level: 2 }),
	};
}

describe("test cases for cart summary component", () => {
	it("should render heading", () => {
		const { heading: heading } = renderComponent();
		expect(heading).toHaveTextContent(/cart summary/i);
	});
});

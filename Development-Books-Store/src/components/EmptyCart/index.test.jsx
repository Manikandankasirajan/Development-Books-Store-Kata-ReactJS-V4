import { render, screen } from "@testing-library/react";
import EmptyCart from ".";
import { expect } from "vitest";

function renderComponent() {
	render(<EmptyCart />);
	return {
		emptyCartImg: screen.getByRole("img"),
		supportText: screen.queryByText(/your cart is empty.../i),
	};
}

describe("test cases for empty cart component", () => {
	it("should render empty cart image", () => {
		const { emptyCartImg: emptyCartImg } = renderComponent();
		expect(emptyCartImg).toHaveAttribute("src", "../public/add-to-cart.png");
	});
	it("should render support message", () => {
		const { supportText: supportText } = renderComponent();
		expect(supportText).toBeInTheDocument();
	});
});

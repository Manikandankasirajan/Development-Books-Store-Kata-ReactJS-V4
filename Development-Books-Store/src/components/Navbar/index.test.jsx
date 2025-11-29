import { render, screen } from "@testing-library/react";
import Navbar from ".";
import { expect, vi } from "vitest";

vi.mock("react-icons/fa6", () => ({
	FaBagShopping: () => (
		<div data-testid="fa-bag-shopping">This is a Mock shopping bag icon</div>
	),
}));

function renderComponent() {
	render(<Navbar />);
	return {
		heading: screen.getByRole("heading", { level: 1 }),
		showCartBtn: screen.queryByRole("button"),
		shoppingBagIcon: screen.queryByTestId("fa-bag-shopping"),
	};
}

describe("test cases for Navbar component layout", () => {
	it("should render page title", () => {
		const { heading: heading } = renderComponent();
		expect(heading).toHaveTextContent(/development books store/i);
	});
	it("should render show cart button with shopping cart icon", () => {
		const { showCartBtn: showCartBtn, shoppingBagIcon: shoppingBagIcon } =
			renderComponent();
		expect(showCartBtn).toBeInTheDocument();
		expect(shoppingBagIcon).toBeInTheDocument();
	});
});

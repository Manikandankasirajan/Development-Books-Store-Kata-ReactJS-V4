import { render, screen } from "@testing-library/react";
import Navbar from ".";
import { expect, vi } from "vitest";
import { CartContext } from "../../App";
import getCartQuantity from "../../utils/getCartQuantity";
import userEvent from "@testing-library/user-event";

vi.mock("react-icons/fa6", () => ({
	FaBagShopping: () => (
		<div data-testid="fa-bag-shopping">This is a Mock shopping bag icon</div>
	),
}));

vi.mock("../../utils/getCartQuantity", () => ({
	default: vi.fn(),
}));

vi.mock("../CartQuantityBanner", () => ({
	default: () => (
		<div data-testid="cartQuantityComponent">
			This is a Mock Cart Quantity Component
		</div>
	),
}));

function renderComponent(mockCartQuantityValue = 0, propValue = vi.fn()) {
	getCartQuantity.mockReturnValue(mockCartQuantityValue);
	render(
		<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
			<Navbar setShowCart={propValue} />
		</CartContext>
	);
	return {
		heading: screen.getByRole("heading", { level: 1 }),
		showCartBtn: screen.queryByRole("button"),
		shoppingBagIcon: screen.queryByTestId("fa-bag-shopping"),
		cartQuantityComponent: screen.queryByTestId("cartQuantityComponent"),
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
	it("should not render cart quantity banner when cart is empty", () => {
		const { cartQuantityComponent: cartQuantityComponent } = renderComponent();
		expect(cartQuantityComponent).not.toBeInTheDocument();
	});
	it("should render cart quantity banner when cart has items", () => {
		const cartQuantity = 2;
		const { cartQuantityComponent: cartQuantityComponent } =
			renderComponent(cartQuantity);
		expect(cartQuantityComponent).toBeInTheDocument();
	});
	it("should trigger mock function when show cart button is clicked", async () => {
		const mockFn = vi.fn();
		const { showCartBtn: showCartBtn } = renderComponent(0, mockFn);
		const user = userEvent.setup();
		await user.click(showCartBtn);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});

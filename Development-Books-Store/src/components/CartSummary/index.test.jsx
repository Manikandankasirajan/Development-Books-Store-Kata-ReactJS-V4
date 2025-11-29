import { render, screen } from "@testing-library/react";
import CartSummary from ".";
import { expect, vi } from "vitest";
import { CartContext } from "../../App";

vi.mock("../CartItem", () => ({
	default: () => (
		<div data-testid="cartItem">This is a Mock Cart Item Component</div>
	),
}));

function renderComponent(cart = { "Clean Code": 1 }) {
	render(
		<CartContext value={{ cart: cart, cartAction: vi.fn() }}>
			<CartSummary />
		</CartContext>
	);
	return {
		heading: screen.getByRole("heading", { level: 2 }),
		cartItemComponent: screen.getByTestId("cartItem"),
	};
}

describe("test cases for cart summary component", () => {
	it("should render heading", () => {
		const { heading: heading } = renderComponent();
		expect(heading).toHaveTextContent(/cart summary/i);
	});
	it("should render cart item component", () => {
		const { cartItemComponent: cartItemComponent } = renderComponent();
		expect(cartItemComponent).toBeInTheDocument();
	});
});

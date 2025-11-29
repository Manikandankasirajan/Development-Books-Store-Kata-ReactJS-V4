import { render, screen } from "@testing-library/react";
import Cart from ".";
import { expect, vi } from "vitest";
import { CartContext } from "../../App";
import userEvent from "@testing-library/user-event";
import getCartQuantity from "../../utils/getCartQuantity";

vi.mock("react-icons/fa6", () => ({
	FaXmark: () => <div data-testid="fa-xmark">This is a Mock close icon</div>,
}));

vi.mock("../../utils/getCartQuantity", () => ({
	default: vi.fn(),
}));

vi.mock("../EmptyCart", () => ({
	default: () => (
		<div data-testid="emptyCartComponent">
			This is a Mock Empty Cart Component
		</div>
	),
}));
vi.mock("../CartSummary", () => ({
	default: () => (
		<div data-testid="cartSummaryComponent">
			This is a Mock Cart Summary Component
		</div>
	),
}));

function renderComponent(propValue = vi.fn(), mockValue = 0) {
	getCartQuantity.mockReturnValue(mockValue);
	render(
		<CartContext value={{ cart: {}, cartAction: vi.fn() }}>
			<Cart setShowCart={propValue} />
		</CartContext>
	);
	return {
		closeCartBtn: screen.getByRole("button"),
		closeIcon: screen.getByTestId("fa-xmark"),
		emptyCartComponent: screen.queryByTestId("emptyCartComponent"),
		cartSummaryComponent: screen.queryByTestId("cartSummaryComponent"),
	};
}

describe("test cases for cart component", () => {
	it("should render close cart button with close icon", () => {
		const { closeCartBtn: closeCartBtn, closeIcon: closeIcon } =
			renderComponent();
		expect(closeCartBtn).toBeInTheDocument();
		expect(closeIcon).toBeInTheDocument();
	});
	it("should trigger mock function when close cart button is clicked", async () => {
		const mockFn = vi.fn();
		const { closeCartBtn: closeCartBtn } = renderComponent(mockFn);
		const user = userEvent.setup();
		await user.click(closeCartBtn);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
	it("should render empty cart component when cart is empty", () => {
		const { emptyCartComponent: emptyCartComponent } = renderComponent();
		expect(emptyCartComponent).toBeInTheDocument();
	});
	it("should not render empty cart component when cart has items", () => {
		const { emptyCartComponent: emptyCartComponent } = renderComponent(
			vi.fn(),
			2
		);
		expect(emptyCartComponent).not.toBeInTheDocument();
	});
	it("should not render cart summary component when cart is empty", () => {
		const { cartSummaryComponent: cartSummaryComponent } = renderComponent();
		expect(cartSummaryComponent).not.toBeInTheDocument();
	});
	it("should render cart summary component when cart has items", () => {
		const { cartSummaryComponent: cartSummaryComponent } = renderComponent(
			vi.fn(),
			2
		);
		expect(cartSummaryComponent).toBeInTheDocument();
	});
});

import { render, screen } from "@testing-library/react";
import Cart from ".";
import { expect, vi } from "vitest";
import { CartContext } from "../../App";
import userEvent from "@testing-library/user-event";

vi.mock("react-icons/fa6", () => ({
	FaXmark: () => <div data-testid="fa-xmark">This is a Mock close icon</div>,
}));
function renderComponent(propValue = vi.fn()) {
	render(<Cart setShowCart={propValue} />);
	return {
		closeCartBtn: screen.getByRole("button"),
		closeIcon: screen.getByTestId("fa-xmark"),
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
});

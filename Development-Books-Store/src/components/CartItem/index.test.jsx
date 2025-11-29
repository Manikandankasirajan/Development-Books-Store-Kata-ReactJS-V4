import { render, screen } from "@testing-library/react";
import CartItem from ".";
import { expect, vi } from "vitest";
import { CartContext } from "../../App";
import userEvent from "@testing-library/user-event";

vi.mock("react-icons/fa6", () => ({
	FaMinus: () => <div data-testid="fa-minus">This is a Mock FaMinus Icon</div>,
	FaPlus: () => <div data-testid="fa-plus">This is a Mock FaPlus Icon</div>,
}));

function renderComponent(propValues = [], cartAction = vi.fn()) {
	render(
		<CartContext value={{ cart: {}, cartAction: cartAction }}>
			<CartItem book={propValues} />
		</CartContext>
	);
	return {
		bookTitle: screen.getByRole("heading", { level: 3 }),
		bookCount: screen.getByText(propValues[1]),
		decreaseBookCountBtn: screen.getByLabelText("decreaseBookQuantity"),
		minusIcon: screen.queryByTestId("fa-minus"),
		increasseBookCountBtn: screen.getByLabelText("increaseBookQuantity"),
		plusIcon: screen.queryByTestId("fa-plus"),
	};
}

describe("test cases for cart item component", () => {
	it("should render book title for the books cart", () => {
		const book = ["Clean Code", 1];
		const { bookTitle: bookTitle } = renderComponent(book);
		expect(bookTitle).toHaveTextContent(book[0]);
	});
	it("should render book count each book in the cart", () => {
		const book = ["Clean Code", 1];
		const { bookCount: bookCount } = renderComponent(book);
		expect(bookCount).toHaveTextContent(book[1]);
	});
	it("should render decrease book count button and minus icon", () => {
		const book = ["Clean Code", 1];
		const { decreaseBookCountBtn: decreaseBookCountBtn, minusIcon: minusIcon } =
			renderComponent(book);
		expect(decreaseBookCountBtn).toBeInTheDocument();
		expect(minusIcon).toBeInTheDocument();
	});
	it("should render diabled decrease book count button when conut is < 2", () => {
		const book = ["Clean Code", 1];

		const { decreaseBookCountBtn: decreaseBookCountBtn } =
			renderComponent(book);

		expect(decreaseBookCountBtn).toBeDisabled();
	});
	it("should render increase book count button and plus icon", () => {
		const book = ["Clean Code", 1];
		const { increasseBookCountBtn: increasseBookCountBtn, plusIcon: plusIcon } =
			renderComponent(book);
		expect(plusIcon).toBeInTheDocument();
		expect(plusIcon).toBeInTheDocument();
	});
	it("should trigger function when decrease book count button is clicked", async () => {
		const book = ["Clean Code", 2];
		const mockFn = vi.fn();
		const { decreaseBookCountBtn: decreaseBookCountBtn } = renderComponent(
			book,
			mockFn
		);
		const user = userEvent.setup();
		await user.click(decreaseBookCountBtn);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
	it("should trigger function when decrease book count button is clicked", async () => {
		const book = ["Clean Code", 2];
		const mockFn = vi.fn();
		const { increasseBookCountBtn: increasseBookCountBtn } = renderComponent(
			book,
			mockFn
		);
		const user = userEvent.setup();
		await user.click(increasseBookCountBtn);
		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});

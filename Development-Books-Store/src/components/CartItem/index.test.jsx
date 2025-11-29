import { render, screen } from "@testing-library/react";
import CartItem from ".";
import { expect } from "vitest";

function renderComponent(propValues = []) {
	render(<CartItem book={propValues} />);
	return {
		bookTitle: screen.getByRole("heading", { level: 3 }),
		bookCount: screen.getByText(propValues[1]),
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
});

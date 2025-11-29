import { render, screen } from "@testing-library/react";
import Book from ".";
import { expect } from "vitest";
import BOOK_LIST from "../../data/bookList";

function renderComponent(propsValue) {
	render(<Book book={propsValue} />);
	return {
		bookImage: screen.getByRole("img"),
		bookTitle: screen.getByRole("heading", { level: 3 }),
	};
}

describe("test cases for book component", () => {
	it("should render book image", () => {
		const { bookImage: bookImage } = renderComponent(BOOK_LIST[0]);
		expect(bookImage).toHaveAttribute("src", BOOK_LIST[0].bookImage);
	});
	it("should render book Title", () => {
		const { bookTitle: bookTitle } = renderComponent(BOOK_LIST[0]);
		expect(bookTitle).toHaveTextContent(BOOK_LIST[0].title);
	});
});

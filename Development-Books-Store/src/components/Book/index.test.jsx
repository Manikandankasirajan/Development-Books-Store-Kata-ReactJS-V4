import { render, screen } from "@testing-library/react";
import Book from ".";
import { expect } from "vitest";
import BOOK_LIST from "../../data/bookList";

function renderComponent(propsValue) {
	render(<Book book={propsValue} />);
	return {
		bookImage: screen.getByRole("img"),
	};
}

describe("test cases for book component", () => {
	it("should render book image", () => {
		const { bookImage: bookImage } = renderComponent(BOOK_LIST[0]);
		expect(bookImage).toHaveAttribute("src", BOOK_LIST[0].bookImage);
	});
});

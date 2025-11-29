import { render, screen } from "@testing-library/react";
import Book from ".";
import { expect } from "vitest";
import BOOK_LIST from "../../data/bookList";

function renderComponent(propsValue) {
	render(<Book book={propsValue} />);
	return {
		bookImage: screen.getByRole("img"),
		bookTitle: screen.getByRole("heading", { level: 3 }),
		bookPrice: screen.getByRole("heading", { level: 4 }),
		addtoCartBtn: screen.getByRole("button"),
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
	it("should render truncated book Title when book name length is more that limit", () => {
		const truncatedTitle = BOOK_LIST[3].title.slice(0, 25) + "...";
		const { bookTitle: bookTitle } = renderComponent(BOOK_LIST[3]);
		expect(bookTitle).toHaveTextContent(truncatedTitle);
	});
	it("should render book price", () => {
		const { bookPrice: bookPrice } = renderComponent(BOOK_LIST[0]);
		expect(bookPrice).toHaveTextContent(BOOK_LIST[0].price);
	});
	it("should rende add book to cat button", () => {
		const { addtoCartBtn: addtoCartBtn } = renderComponent(BOOK_LIST[0]);
		expect(addtoCartBtn).toHaveTextContent(/add to cart/i);
	});
});

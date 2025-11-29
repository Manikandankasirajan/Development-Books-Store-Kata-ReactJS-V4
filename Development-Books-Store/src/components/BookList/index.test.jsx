import { render, screen } from "@testing-library/react";
import BookList from ".";
import { expect, vi } from "vitest";
import BOOK_LIST from "../../data/bookList";

vi.mock("../../data/bookList", () => ({
	default: vi.fn(),
}));

function renderComponent(bookListMockValue) {
	BOOK_LIST.mockReturnValue(bookListMockValue);
	render(<BookList />);
	return {
		heading: screen.getByRole("heading", { level: 2 }),
		message: screen.queryByText(
			/no books available to show right now, please try later/i
		),
	};
}

describe("test cases for book list component", () => {
	it("should render component heading", () => {
		const { heading: heading } = renderComponent([]);
		expect(heading).toHaveTextContent(/books available/i);
	});
	it("should render no books available message when book list is empty", () => {
		const { message: message } = renderComponent([]);
		expect(message).toBeInTheDocument();
	});
});

import { render, screen } from "@testing-library/react";
import BookList from ".";
import { expect, vi } from "vitest";
import BOOK_LIST from "../../data/bookList";

vi.mock("../Book", () => ({
	default: () => {
		return <div data-testid="bookComponent">This is a Mock Book Component</div>;
	},
}));

function renderComponent(propValue) {
	render(<BookList bookList={propValue} />);
	return {
		heading: screen.getByRole("heading", { level: 2 }),
		message: screen.queryByText(
			/no books available to show right now, please try later/i
		),
		childComponent: screen.queryAllByTestId("bookComponent"),
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
	it("should render books details when books available to show", () => {
		const { childComponent: childComponent } = renderComponent(BOOK_LIST);
		expect(childComponent.length).toEqual(BOOK_LIST.length);
	});
});

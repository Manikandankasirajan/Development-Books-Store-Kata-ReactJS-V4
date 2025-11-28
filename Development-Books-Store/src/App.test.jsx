import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, vi } from "vitest";

vi.mock("./components/Navbar", () => ({
	default: () => (
		<div data-testid="navbar">This is a Mock Navbar component</div>
	),
}));
vi.mock("./components/BookList", () => ({
	default: () => (
		<div data-testid="bookList">This is a Mock BookList component</div>
	),
}));

function renderComponent() {
	render(<App />);
	return {
		navBar: screen.getByTestId("navbar"),
		bookList: screen.getByTestId("bookList"),
	};
}

describe("test cases for app component", () => {
	it("should render Navbar components", () => {
		const { navBar: navBar } = renderComponent();
		expect(navBar).toBeInTheDocument();
	});
	it("should render BookList components", () => {
		const { bookList: bookList } = renderComponent();
		expect(bookList).toBeInTheDocument();
	});
});

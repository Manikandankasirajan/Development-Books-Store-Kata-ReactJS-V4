import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, vi } from "vitest";

vi.mock("./components/Navbar", () => ({
	default: () => (
		<div data-testid="navbar">This is a Mock Navbar component</div>
	),
}));

function renderComponent() {
	render(<App />);
	return {
		navBar: screen.getByTestId("navbar"),
	};
}

describe("test cases for app component", () => {
	it("should render Navbar components", () => {
		const { navBar: navBar } = renderComponent();
		expect(navBar).toBeInTheDocument();
	});
});

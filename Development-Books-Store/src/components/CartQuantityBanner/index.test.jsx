import { render, screen } from "@testing-library/react";
import CartQuantityBanner from ".";
import { expect } from "vitest";

describe("test cases for cart quantity banner", () => {
	it("should render cart quantity", () => {
		const cartQuantity = 2;
		render(<CartQuantityBanner cartQuantity={cartQuantity} />);
		const banner = screen.queryByText(cartQuantity);
		expect(banner).toBeInTheDocument();
	});
});

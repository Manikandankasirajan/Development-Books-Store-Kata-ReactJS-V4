import React, { useContext } from "react";
import CartItem from "../CartItem";
import { CartContext } from "../../App";

const CartSummary = () => {
	const { cart: cart } = useContext(CartContext);
	return (
		<section className="p-6">
			<h2 className="pb-5 pl-2 text-xl font-bold border-b-2 border-slate-400">
				Cart Summary
			</h2>
			<section className="pb-4 h-80 border-b border-dotted overflow-y-auto bg-gray-50">
				{Object.entries(cart).map((book, index) => {
					return <CartItem key={index} book={book} />;
				})}
			</section>
		</section>
	);
};

export default CartSummary;

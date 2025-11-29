import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { CartContext } from "../../App";
import getCartQuantity from "../../utils/getCartQuantity";
import EmptyCart from "../EmptyCart";

const Cart = ({ setShowCart }) => {
	const { cart, cartAction } = useContext(CartContext);
	const cartQuantity = getCartQuantity(cart);
	return (
		<section className="fixed top-0 left-0 z-80 flex justify-end w-screen h-screen bg-slate-400/50 shadow-2xl">
			<section className="relative w-10/12 h-full bg-gray-50 shadow-2xl sm:w-2/3 md:w-1/2 lg:w-2/6">
				<button
					className="absolute top-8 right-8 text-2xl cursor-pointer hover:scale-125 transition delay-150 duration-300 ease-in-out"
					onClick={() => setShowCart((curr) => !curr)}>
					<FaXmark />
				</button>
				{cartQuantity === 0 && <EmptyCart />}
			</section>
		</section>
	);
};

export default Cart;

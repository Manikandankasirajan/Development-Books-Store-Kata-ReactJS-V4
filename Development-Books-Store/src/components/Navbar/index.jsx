import React, { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { CartContext } from "../../App";
import getCartQuantity from "../../utils/getCartQuantity";
import CartQuantityBanner from "../CartQuantityBanner";

const Navbar = ({ setShowCart }) => {
	const { cart, cartAction } = useContext(CartContext);
	const cartQuantity = getCartQuantity(cart);

	return (
		<header className="w-full bg-slate-800 shadow-lg">
			<nav className="px-10 py-6 flex justify-between">
				<h1 className="text-3xl font-bold text-white">
					Development Books Store
				</h1>
				<section className="relative flex justify-around items-center ml-5">
					<button
						aria-label="show cart button"
						className="mr-4 text-3xl text-white font-bold cursor-pointer hover:scale-110 transition delay-150 duration-300 ease-in-out"
						onClick={() => setShowCart((curr) => !curr)}>
						<FaBagShopping />
					</button>
					{cartQuantity > 0 && (
						<CartQuantityBanner cartQuantity={cartQuantity} />
					)}
				</section>
			</nav>
		</header>
	);
};

export default Navbar;

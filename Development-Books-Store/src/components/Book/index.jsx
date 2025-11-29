import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../App";

const Book = ({ book }) => {
	const { imgSrc: bookImg, title: bookTitle, price: bookPrice } = book;
	const rupeeSymbol = "\u20B9";
	const { cart, cartAction } = useContext(CartContext);
	return (
		<section className="p-3 w-68 bg-white shadow-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
			<img className="w-62 h-72 mb-3" src={bookImg} alt="bookImage" />
			<h3 className="mb-1 text-md font-bold text-black/75">
				{bookTitle.length > 30 ? bookTitle.slice(0, 25) + "..." : bookTitle}
			</h3>
			<h4 className="text-md font-bold mb-1 text-gray-700">
				{rupeeSymbol} {bookPrice}
			</h4>
			<button
				className="w-full py-2 flex justify-center bg-blue-900 text-white  cursor-pointer font-bold hover:bg-blue-700 rounded hover:scale-105 transition delay-150 duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-700 "
				onClick={() => cartAction({ type: "addToCart", payload: bookTitle })}>
				Add to Cart
			</button>
		</section>
	);
};

Book.propTypes = {
	book: PropTypes.object,
};
export default Book;

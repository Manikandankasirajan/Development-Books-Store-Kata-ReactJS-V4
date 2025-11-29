import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
	const { imgSrc: bookImg, title: bookTitle, price: bookPrice } = book;
	const rupeeSymbol = "\u20B9";
	return (
		<section className="p-3 w-68 bg-white shadow-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
			<img className="w-62 h-72 mb-3" src={bookImg} alt="bookImage" />
			<h3 className="mb-1 text-md font-bold text-black/75">
				{bookTitle.length > 30 ? bookTitle.slice(0, 25) + "..." : bookTitle}
			</h3>
			<h4 className="text-md font-bold mb-1 text-gray-700">
				{rupeeSymbol} {bookPrice}
			</h4>
		</section>
	);
};

Book.propTypes = {
	book: PropTypes.object,
};
export default Book;

import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
	const { imgSrc: bookImg, title: bookTitle } = book;
	return (
		<section className="p-3 w-68 bg-white shadow-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
			<img className="w-62 h-72 mb-3" src={bookImg} alt="bookImage" />
			<h3 className="mb-1 text-md font-bold text-black/75">{bookTitle}</h3>
		</section>
	);
};

Book.propTypes = {
	book: PropTypes.object,
};
export default Book;

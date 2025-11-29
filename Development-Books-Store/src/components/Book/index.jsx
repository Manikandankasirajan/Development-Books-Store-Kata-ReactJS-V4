import React from "react";

const Book = ({ book }) => {
	const { imgSrc: bookImg } = book;
	return (
		<section className="p-3 w-68 bg-white shadow-2xl hover:scale-105 transition delay-150 duration-300 ease-in-out cursor-pointer">
			<img className="w-62 h-72 mb-3" src={bookImg} alt="bookImage" />
		</section>
	);
};

export default Book;

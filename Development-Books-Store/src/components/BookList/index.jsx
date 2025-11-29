import React from "react";
import Book from "../Book";
import PropTypes from "prop-types";

const BookList = ({ bookList = [] }) => {
	return (
		<main className="p-12 bg-gray-200">
			<h2 className="mb-8 px-5 text-xl font-bold text-center">
				Books Available
			</h2>
			{bookList.length === 0 ? (
				<section className="text-center">
					<p>No books Available to Show right now, please try later</p>
				</section>
			) : (
				<section className="grid grid-cols-1 grid-flow-row gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{bookList.map((book) => {
						return (
							<section key={book.id} className="w-fit mx-auto">
								<Book book={book} />
							</section>
						);
					})}
				</section>
			)}
		</main>
	);
};

BookList.prototype = {
	bookList: PropTypes.array,
};

export default BookList;

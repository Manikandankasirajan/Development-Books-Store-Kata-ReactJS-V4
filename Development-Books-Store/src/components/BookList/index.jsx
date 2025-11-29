import React from "react";
import BOOK_LIST from "../../data/bookList";

const BookList = () => {
	return (
		<main className="p-12 bg-gray-200">
			<h2 className="mb-8 px-5 text-xl font-bold text-center">
				Books Available
			</h2>
			{BOOK_LIST.length === 0 && (
				<section className="text-center">
					<p>No books Available to Show right now, please try later</p>
				</section>
			)}
		</main>
	);
};

export default BookList;

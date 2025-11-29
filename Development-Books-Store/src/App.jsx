import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BOOK_LIST from "./data/bookList";

const App = () => {
	return (
		<>
			<Navbar />
			<BookList bookList={BOOK_LIST} />
		</>
	);
};

export default App;

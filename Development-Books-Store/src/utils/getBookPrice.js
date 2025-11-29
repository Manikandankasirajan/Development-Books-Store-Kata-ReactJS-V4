import BOOK_LIST from "../data/bookList";
export default function getBookPrice(bookTitle) {
	return BOOK_LIST.filter((book) => book.title === bookTitle)[0].price;
}

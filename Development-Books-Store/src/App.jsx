import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BOOK_LIST from "./data/bookList";

export const CartContext = createContext();
const initialState = {};
const handlers = {
	addToCart: (state, action) => ({
		...state,
		[action.payload]: 1,
	}),
};

function cartReducerFn(state, action) {
	const handler = handlers[action.type];
	return handler ? handler(state, action) : state;
}

const App = () => {
	const [state, dispatch] = useReducer(cartReducerFn, initialState);
	const contextObject = { cart: state, cartAction: dispatch };
	return (
		<>
			<CartContext value={contextObject}>
				<Navbar />
				<BookList bookList={BOOK_LIST} />
			</CartContext>
		</>
	);
};

export default App;

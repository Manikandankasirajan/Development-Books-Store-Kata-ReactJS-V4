import React, { createContext, useReducer, useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BOOK_LIST from "./data/bookList";
import Cart from "./components/Cart";

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
	const [showCart, setShowCart] = useState(false);
	return (
		<>
			<CartContext value={contextObject}>
				<Navbar setShowCart={setShowCart} />
				<BookList bookList={BOOK_LIST} />
				{showCart && <Cart setShowCart={setShowCart} />}
			</CartContext>
		</>
	);
};

export default App;

import React from "react";

const CartItem = ({ book }) => {
	const [bookTitle, bookCount] = book;

	return (
		<section className="w-full px-3 py-2 mt-5 grid grid-cols-5 gap-3 bg-white  rounded-2xl">
			<section className="p-1 col-span-2 ">
				<h3 className="text-sm text-left text-blue-900 font-bold">
					{bookTitle}
				</h3>
			</section>
		</section>
	);
};

export default CartItem;

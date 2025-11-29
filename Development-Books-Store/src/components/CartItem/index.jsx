import React, { useContext } from "react";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { CartContext } from "../../App";
import getBookPrice from "../../utils/getBookPrice";

const CartItem = ({ book }) => {
	const { cartAction: cartAction } = useContext(CartContext);
	const [bookTitle, bookCount] = book;
	const isBtnDisabled = bookCount < 2;
	const bookPrice = getBookPrice(bookTitle) * bookCount;

	return (
		<section className="w-full px-3 py-2 mt-5 grid grid-cols-5 gap-3 bg-white  rounded-2xl">
			<section className="p-1 col-span-2 ">
				<h3 className="text-sm text-left text-blue-900 font-bold">
					{bookTitle}
				</h3>
			</section>
			<section className="col-span-1 flex justify-center items-center">
				<section className="flex justify-around items-start gap-2">
					<button
						aria-label="decreaseBookQuantity"
						className="px-3 py-1 text-black font-bold rounded-xl hover:opacity-50 cursor-pointer disabled:text-black/50 disabled:cursor-not-allowed"
						disabled={isBtnDisabled}
						onClick={() =>
							cartAction({
								type: "reduceBookQuantity",
								payload: bookTitle,
							})
						}>
						<FaMinus />
					</button>
					<p className="font-bold">{bookCount}</p>
					<button
						aria-label="increaseBookQuantity"
						className="px-3 py-1 text-black font-bold rounded-xl hover:opacity-50 cursor-pointer"
						onClick={() =>
							cartAction({
								type: "increaseBookQuantity",
								payload: bookTitle,
							})
						}>
						<FaPlus />
					</button>
				</section>
			</section>
			<section className="col-span-1 flex justify-center items-center">
				<h4>{bookPrice}</h4>
			</section>
			<section className="col-span-1 flex justify-center items-center">
				<button
					aria-label="removeBook"
					className="hover:opacity-50 cursor-pointer "
					onClick={() =>
						cartAction({
							type: "removeFromCart",
							payload: bookTitle,
						})
					}>
					<FaRegTrashCan />
				</button>
			</section>
		</section>
	);
};

export default CartItem;

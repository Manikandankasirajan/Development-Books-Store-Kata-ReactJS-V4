import React from "react";

const EmptyCart = () => {
	return (
		<section className="absolute top-50 left-35 opacity-50 sm:left-40 xl:left-1/3 2xl:left-1/3 ">
			<img src="../public/add-to-cart.png" alt="empty cart" className="w-35" />
			<h3 className=" font-bold mt-3">Your Cart is Empty...</h3>
		</section>
	);
};

export default EmptyCart;

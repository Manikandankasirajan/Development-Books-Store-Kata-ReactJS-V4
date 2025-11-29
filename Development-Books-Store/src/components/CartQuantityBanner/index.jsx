import PropTypes from "prop-types";
import React from "react";

const CartQuantityBanner = ({ cartQuantity = 0 }) => {
	return (
		<div className="absolute top-0 right-3 w-4 h-4 bg-red-600 text-white text-xs font-bold text-center rounded-full">
			{cartQuantity}
		</div>
	);
};

CartQuantityBanner.propTypes = {
	cartQuantity: PropTypes.number,
};

export default CartQuantityBanner;

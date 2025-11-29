export default function getCartQuantity(cart) {
	return Object.values(cart).reduce((total, count) => {
		return (total += count);
	}, 0);
}

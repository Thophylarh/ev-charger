export const formatNumber = (number, naira) => {
	let num = Number(number)
	if (num) {
		if (!naira) {
			return num?.toLocaleString();
		} else {
			return `₦${num?.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}`;
		}
	} else {
		if (!naira) {
			return 0;
		} else {
			return `₦0.00`;
		}
	}
};

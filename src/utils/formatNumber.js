export const formatNumber = (number, naira, decimalPlace) => {
	let num = Number(number);

	if (num) {
		if (!naira) {
			if (!decimalPlace) {
				return num?.toLocaleString();
			}
			if (!naira && decimalPlace) {
				return `${num?.toLocaleString("en", {
					minimumFractionDigits: decimalPlace,
					maximumFractionDigits: decimalPlace,
				})}`;
			}
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

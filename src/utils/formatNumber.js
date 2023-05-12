export const formatNumber = (num, naira) => {
	if (num) {
		if (!naira) {
			return num?.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
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

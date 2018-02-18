function reformat(strNumber) {
	if (strNumber) {
		const number = strNumber.replace(/,/g, '');
		const [integer, fraction] = number.split('.');
		return integer.replace(/(\d+?)(?=(\d{3})+$)/g, '$1,') + (fraction !== undefined ? '.' + fraction : '');
	}
	return '';
}

module.exports = reformat;

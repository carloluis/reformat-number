const reformat = require('../index');

describe('reformat-number', () => {
	it('should return empty string if argument not provided', () => {
		const result = reformat();
		expect(result).toBe('');
	});

	it('should return a number-string formatted with commas grouping each three digits', () => {
		const result = reformat('1234567890');
		expect(result).toBe('1,234,567,890');
	});

	it('should reorder number-string commas to match previous format', () => {
		const result = reformat('1,2,3,4,5,6');
		expect(result).toBe('123,456');
	});

	it('should re-format number-string and keep decimal values', () => {
		const result = reformat('12345678.90');
		expect(result).toBe('12,345,678.90');
	});
});
